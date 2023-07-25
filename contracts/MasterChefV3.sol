// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.7.6;
pragma abicoder v2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./libraries/FixedPoint128.sol";
import "./libraries/LowGasSafeMath.sol";
import "./libraries/SafeCast.sol";
import "./libraries/TransferHelperExtended.sol";
import "./interfaces/ISkyXV3Pool.sol";
import "./interfaces/liquidity-mining/INonfungiblePositionManager.sol";
import "./interfaces/liquidity-mining/ISkyXV3LmPoolDeployer.sol";
import "./interfaces/liquidity-mining/ILMPool.sol";
import "./Enumerable.sol";
import "./SkyXToken.sol";

contract MasterChefV3 is Ownable, ReentrancyGuard, Enumerable {
    string public constant name = "MasterChef";
    using LowGasSafeMath for uint256;
    using SafeCast for uint256;

    struct UserPositionInfo {
        address user;
        uint256 pid;
        int24 tickLower;
        int24 tickUpper;
        uint128 liquidity;
        uint256 rewardGrowthInside;
        uint256 reward;
    }

    struct PoolInfo {
        ISkyXV3Pool v3Pool;
        address token0;
        address token1;
        uint24 fee;
        uint256 allocPoint;
        uint128 liquidity;
        uint256 lastTime;
    }

    address public immutable WETH;
    SkyXToken public immutable skyx;
    address public constant burnAddress =
        address(0x000000000000000000000000000000000000dEaD);
    INonfungiblePositionManager public nftManager;
    ISkyXV3LmPoolDeployer public lmPoolDeployer;
    uint256 public burnPercent;
    uint256 public skyxPerSecond;

    uint256 public poolLength;
    mapping(uint256 => PoolInfo) public poolInfo;
    mapping(uint256 => UserPositionInfo) public userPositionInfos;

    // v3PoolPid[token0][token1][fee] => pid
    mapping(address => mapping(address => mapping(uint24 => uint256))) v3PoolPid;
    // v3PoolAddressPid[v3PoolAddress] => pid
    mapping(address => uint256) public v3PoolAddressPid;
    uint256 public totalAllocPoint;

    event SetNftManager(address nftManager);
    event SetLmPoolDeployer(address lmPoolDeployer);
    event SetEmissionRate(uint256 skyxPerSecond);
    event SetPercent(uint256 burnPercent);
    event AddPool(uint256 allocPoint, address v3Pool, address lmPool);
    event SetPool(uint256 indexed pid, uint256 allocPoint);
    event UpdateLiquidity(
        address indexed from,
        uint256 indexed pid,
        uint256 indexed tokenId,
        int24 tickLower,
        int24 tickUpper,
        int128 liquidity
    );
    event Deposit(
        address indexed from,
        uint256 indexed pid,
        uint256 indexed tokenId,
        int24 tickLower,
        int24 tickUpper,
        uint128 liquidity
    );
    event Harvest(
        address indexed sender,
        address to,
        uint256 indexed pid,
        uint256 indexed tokenId,
        uint256 skyxReward
    );
    event Withdraw(
        address indexed sender,
        address to,
        uint256 indexed pid,
        uint256 indexed tokenId
    );

    constructor(
        address _WETH,
        SkyXToken _skyx,
        INonfungiblePositionManager _nftManager,
        uint256 _skyxPerSecond,
        uint256 _burnPercent
    ) public {
        WETH = _WETH;
        skyx = _skyx;
        nftManager = _nftManager;
        skyxPerSecond = _skyxPerSecond;
        burnPercent = _burnPercent;
    }

    function setNftManager(
        INonfungiblePositionManager _nftManager
    ) external onlyOwner {
        updateAllPools();
        nftManager = _nftManager;

        emit SetNftManager(address(_nftManager));
    }

    function setLmPoolDeployer(
        ISkyXV3LmPoolDeployer _lmPoolDeployer
    ) external onlyOwner {
        updateAllPools();
        lmPoolDeployer = _lmPoolDeployer;

        emit SetLmPoolDeployer(address(_lmPoolDeployer));
    }

    function setEmissionRate(uint256 _skyxPerSecond) external onlyOwner {
        updateAllPools();
        skyxPerSecond = _skyxPerSecond;

        emit SetEmissionRate(_skyxPerSecond);
    }

    function setPercent(uint256 _burnPercent) external onlyOwner {
        require(_burnPercent < 100e18, "MasterChef: EXCEEDED_MAX_PERCENT");
        updateAllPools();
        burnPercent = _burnPercent;

        emit SetPercent(_burnPercent);
    }

    function skyxPerSecondByPool(
        address _v3Pool
    ) external view returns (uint256) {
        return
            (skyxPerSecond * poolInfo[v3PoolAddressPid[_v3Pool]].allocPoint) /
            totalAllocPoint;
    }

    function addPool(
        uint256 _allocPoint,
        ISkyXV3Pool _v3Pool,
        bool _withUpdate
    ) external onlyOwner {
        if (_withUpdate) updateAllPools();
        ILMPool lmPool = lmPoolDeployer.deploy(_v3Pool);
        // TODO: set lmPool of v3Pool by factory owner
        totalAllocPoint = totalAllocPoint.add(_allocPoint);

        address token0 = _v3Pool.token0();
        address token1 = _v3Pool.token1();
        uint24 fee = _v3Pool.fee();
        require(
            v3PoolPid[token0][token1][fee] == 0,
            "MasterChef: DUPLICATED_POOL"
        );

        if (IERC20(token0).allowance(address(this), address(nftManager)) == 0)
            TransferHelper.safeApprove(
                token0,
                address(nftManager),
                type(uint256).max
            );
        if (IERC20(token1).allowance(address(this), address(nftManager)) == 0)
            TransferHelper.safeApprove(
                token1,
                address(nftManager),
                type(uint256).max
            );

        poolLength++;
        poolInfo[poolLength] = PoolInfo({
            v3Pool: _v3Pool,
            token0: token0,
            token1: token1,
            fee: fee,
            allocPoint: _allocPoint,
            liquidity: 0,
            lastTime: block.timestamp
        });
        v3PoolPid[token0][token1][fee] = poolLength;
        v3PoolAddressPid[address(_v3Pool)] = poolLength;

        emit AddPool(_allocPoint, address(_v3Pool), address(lmPool));
    }

    function setPool(
        uint256 _pid,
        uint256 _allocPoint,
        bool _withUpdate
    ) external onlyOwner {
        PoolInfo storage pool = poolInfo[_pid];
        ILMPool lmPool = ILMPool(pool.v3Pool.lmPool());
        if (address(lmPool) != address(0)) {
            lmPool.accumulateReward(uint32(block.timestamp));
        }

        if (_withUpdate) updateAllPools();

        totalAllocPoint = totalAllocPoint.add(_allocPoint).sub(
            poolInfo[_pid].allocPoint
        );
        poolInfo[_pid].allocPoint = _allocPoint;

        emit SetPool(_pid, _allocPoint);
    }

    function _calculate(
        uint256 _reward
    ) internal view returns (uint256 burnSkyx, uint256 farmSkyx) {
        uint256 totalSupply = skyx.totalSupply();
        uint256 maxSupply = skyx.maxSupply();
        if (maxSupply < totalSupply.add(_reward)) {
            _reward = maxSupply.sub(totalSupply);
        }

        burnSkyx = _reward.mul(burnPercent).div(100e18);
        farmSkyx = _reward.sub(burnSkyx);
    }

    function updateAllPools() public {
        uint256 length = poolLength;
        for (uint256 pid = 1; pid <= length; pid++) {
            updatePool(pid);
        }
    }

    function updateMultiplePools(uint[] memory _pids) external {
        for (uint256 i = 0; i < _pids.length; i++) {
            updatePool(_pids[i]);
        }
    }

    function updatePool(uint256 _pid) public {
        require(
            _pid != 0 && _pid <= poolLength,
            "updatePool: The pool does not exist"
        );
        PoolInfo storage pool = poolInfo[_pid];
        uint256 lastTime = pool.lastTime;
        if (block.timestamp <= lastTime) {
            return;
        }
        if (pool.allocPoint == 0) {
            pool.lastTime = block.timestamp;
            return;
        }
        ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
        if (address(LMPool) != address(0)) {
            LMPool.accumulateReward(uint32(block.timestamp));
        }

        uint256 multiplier = block.timestamp.sub(lastTime);
        uint256 skyxReward = multiplier
            .mul(skyxPerSecond)
            .mul(pool.allocPoint)
            .div(totalAllocPoint);

        (uint256 burnSkyx, uint256 farmSkyx) = _calculate(skyxReward);

        skyx.mint(address(this), burnSkyx.add(farmSkyx));
        if (burnSkyx > 0) {
            TransferHelper.safeTransfer(address(skyx), burnAddress, burnSkyx);
        }

        pool.lastTime = block.timestamp;
    }

    function _updateLiquidityOperation(
        UserPositionInfo storage _positionInfo,
        uint256 _tokenId
    ) internal {
        (
            ,
            ,
            ,
            ,
            ,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            ,
            ,
            ,

        ) = nftManager.positions(_tokenId);
        PoolInfo storage pool = poolInfo[_positionInfo.pid];
        int128 liquidityDelta;
        if (_positionInfo.liquidity != liquidity) {
            liquidityDelta =
                int128(liquidity) -
                int128(_positionInfo.liquidity);
            pool.liquidity =
                pool.liquidity -
                _positionInfo.liquidity +
                liquidity;
            _positionInfo.liquidity = liquidity;
        }

        if (liquidityDelta != 0) {
            ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
            require(address(LMPool) != address(0), "MasterChef: NO_LM_POOL");
            LMPool.updatePosition(tickLower, tickUpper, liquidityDelta);

            emit UpdateLiquidity(
                msg.sender,
                _positionInfo.pid,
                _tokenId,
                tickLower,
                tickUpper,
                liquidityDelta
            );
        }
    }

    struct DepositCache {
        address token0;
        address token1;
        uint24 fee;
        int24 tickLower;
        int24 tickUpper;
        uint128 liquidity;
    }

    /// @notice Upon receiving a ERC721
    function onERC721Received(
        address,
        address _from,
        uint256 _tokenId,
        bytes calldata
    ) external nonReentrant returns (bytes4) {
        require(msg.sender == address(nftManager), "MasterChef: NOT_SKYX_NFT");
        DepositCache memory cache;
        (
            ,
            ,
            cache.token0,
            cache.token1,
            cache.fee,
            cache.tickLower,
            cache.tickUpper,
            cache.liquidity,
            ,
            ,
            ,

        ) = nftManager.positions(_tokenId);
        require(cache.liquidity > 0, "MasterChef: NO_LIQUIDITY");
        uint256 pid = v3PoolPid[cache.token0][cache.token1][cache.fee];
        require(pid > 0, "MasterChef: INVALID_NFT");
        PoolInfo memory pool = poolInfo[pid];
        ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
        require(address(LMPool) != address(0), "MasterChef: NO_LM_POOL");

        UserPositionInfo storage positionInfo = userPositionInfos[_tokenId];

        positionInfo.tickLower = cache.tickLower;
        positionInfo.tickUpper = cache.tickUpper;
        positionInfo.user = _from;
        positionInfo.pid = pid;
        // Need to update LMPool.
        updatePool(pid);
        // LMPool.accumulateReward(uint32(block.timestamp));
        _updateLiquidityOperation(positionInfo, _tokenId);

        positionInfo.rewardGrowthInside = LMPool.getRewardGrowthInside(
            cache.tickLower,
            cache.tickUpper
        );

        // Update Enumerable
        addToken(_from, _tokenId);
        emit Deposit(
            _from,
            pid,
            _tokenId,
            cache.tickLower,
            cache.tickUpper,
            cache.liquidity
        );

        return this.onERC721Received.selector;
    }

    function pendingSkyx(
        uint256 _tokenId
    ) external view returns (uint256 reward) {
        UserPositionInfo memory positionInfo = userPositionInfos[_tokenId];
        if (positionInfo.pid != 0) {
            PoolInfo memory pool = poolInfo[positionInfo.pid];
            ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
            if (address(LMPool) != address(0)) {
                uint256 rewardGrowthInside = LMPool.getRewardGrowthInside(
                    positionInfo.tickLower,
                    positionInfo.tickUpper
                );
                // Check overflow
                if (
                    rewardGrowthInside > positionInfo.rewardGrowthInside &&
                    type(uint256).max /
                        (rewardGrowthInside - positionInfo.rewardGrowthInside) >
                    positionInfo.liquidity
                )
                    reward =
                        ((rewardGrowthInside -
                            positionInfo.rewardGrowthInside) *
                            positionInfo.liquidity) /
                        FixedPoint128.Q128;
                (, reward) = _calculate(reward);
            }
            reward += positionInfo.reward;
        }
    }

    function _harvestOperation(
        UserPositionInfo storage _positionInfo,
        uint256 _tokenId,
        address _to
    ) internal returns (uint256 reward) {
        PoolInfo memory pool = poolInfo[_positionInfo.pid];
        ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
        if (address(LMPool) != address(0)) {
            // Update rewardGrowthInside
            // LMPool.accumulateReward(uint32(block.timestamp));
            uint256 rewardGrowthInside = LMPool.getRewardGrowthInside(
                _positionInfo.tickLower,
                _positionInfo.tickUpper
            );
            // Check overflow
            if (
                rewardGrowthInside > _positionInfo.rewardGrowthInside &&
                type(uint256).max /
                    (rewardGrowthInside - _positionInfo.rewardGrowthInside) >
                _positionInfo.liquidity
            )
                reward =
                    ((rewardGrowthInside - _positionInfo.rewardGrowthInside) *
                        _positionInfo.liquidity) /
                    FixedPoint128.Q128;
            (, reward) = _calculate(reward);
            _positionInfo.rewardGrowthInside = rewardGrowthInside;
        }
        reward += _positionInfo.reward;

        if (reward > 0) {
            if (_to != address(0)) {
                _positionInfo.reward = 0;
                TransferHelper.safeTransfer(address(skyx), _to, reward);
                emit Harvest(
                    msg.sender,
                    _to,
                    _positionInfo.pid,
                    _tokenId,
                    reward
                );
            } else {
                _positionInfo.reward = reward;
            }
        }
    }

    function updateLiquidity(uint256 _tokenId) external nonReentrant {
        UserPositionInfo storage positionInfo = userPositionInfos[_tokenId];
        require(positionInfo.pid != 0, "MasterChef: INVALID_NFT");
        updatePool(positionInfo.pid);
        _harvestOperation(positionInfo, _tokenId, address(0));
        _updateLiquidityOperation(positionInfo, _tokenId);
    }

    function harvest(
        uint256 _tokenId,
        address _to
    ) external nonReentrant returns (uint256 reward) {
        UserPositionInfo storage positionInfo = userPositionInfos[_tokenId];
        require(positionInfo.user == msg.sender, "MasterChef: NOT_OWNER");
        require(
            positionInfo.liquidity > 0 || positionInfo.reward > 0,
            "MasterChef: NO_LIQUIDITY"
        );
        updatePool(positionInfo.pid);
        reward = _harvestOperation(positionInfo, _tokenId, _to);
    }

    function withdraw(
        uint256 _tokenId,
        address _to
    ) external nonReentrant returns (uint256 reward) {
        require(
            _to != address(this) && _to != address(0),
            "MasterChef: WRONG_RECEIVER"
        );
        UserPositionInfo storage positionInfo = userPositionInfos[_tokenId];
        require(positionInfo.user == msg.sender, "MasterChef: NOT_OWNER");
        updatePool(positionInfo.pid);
        reward = _harvestOperation(positionInfo, _tokenId, _to);
        uint256 pid = positionInfo.pid;
        PoolInfo storage pool = poolInfo[pid];
        ILMPool LMPool = ILMPool(pool.v3Pool.lmPool());
        if (address(LMPool) != address(0)) {
            // Remove all liquidity from liquidity mining pool.
            int128 liquidityDelta = -int128(positionInfo.liquidity);
            LMPool.updatePosition(
                positionInfo.tickLower,
                positionInfo.tickUpper,
                liquidityDelta
            );
            emit UpdateLiquidity(
                msg.sender,
                pid,
                _tokenId,
                positionInfo.tickLower,
                positionInfo.tickUpper,
                liquidityDelta
            );
        }
        pool.liquidity -= positionInfo.liquidity;

        delete userPositionInfos[_tokenId];
        // Update Enumerable
        removeToken(msg.sender, _tokenId);
        nftManager.safeTransferFrom(address(this), _to, _tokenId);
        emit Withdraw(msg.sender, _to, pid, _tokenId);
    }

    function _pay(address _token, uint256 _amount) internal {
        if (_token == WETH && msg.value > 0) {
            require(msg.value == _amount, "MasterChef: INCONSISTENT_AMOUNT");
        } else {
            TransferHelper.safeTransferFrom(
                _token,
                msg.sender,
                address(this),
                _amount
            );
        }
    }

    function _refund(address _token, uint256 _amount) internal {
        if (_token == WETH && msg.value > 0) {
            nftManager.refundETH();
            TransferHelper.safeTransferETH(msg.sender, address(this).balance);
        } else {
            TransferHelper.safeTransfer(_token, msg.sender, _amount);
        }
    }

    function increaseLiquidity(
        INonfungiblePositionManager.IncreaseLiquidityParams memory _params
    )
        external
        payable
        nonReentrant
        returns (uint128 liquidity, uint256 amount0, uint256 amount1)
    {
        UserPositionInfo storage positionInfo = userPositionInfos[
            _params.tokenId
        ];
        require(positionInfo.pid > 0, "MasterChef: INVALID_NFT");
        updatePool(positionInfo.pid);

        PoolInfo memory pool = poolInfo[positionInfo.pid];
        _pay(pool.token0, _params.amount0Desired);
        _pay(pool.token1, _params.amount1Desired);
        require(
            pool.token0 == WETH || pool.token1 == WETH || msg.value == 0,
            "MasterChef: INVALID_VALUE"
        );
        (liquidity, amount0, amount1) = nftManager.increaseLiquidity{
            value: msg.value
        }(_params);
        uint256 token0Left = _params.amount0Desired - amount0;
        uint256 token1Left = _params.amount1Desired - amount1;
        if (token0Left > 0) {
            _refund(pool.token0, token0Left);
        }
        if (token1Left > 0) {
            _refund(pool.token1, token1Left);
        }

        _harvestOperation(positionInfo, _params.tokenId, address(0));
        _updateLiquidityOperation(positionInfo, _params.tokenId);
    }

    function decreaseLiquidity(
        INonfungiblePositionManager.DecreaseLiquidityParams memory _params
    ) external payable nonReentrant returns (uint256 amount0, uint256 amount1) {
        UserPositionInfo storage positionInfo = userPositionInfos[
            _params.tokenId
        ];
        require(positionInfo.user == msg.sender, "MasterChef: NOT_OWNER");
        updatePool(positionInfo.pid);
        (amount0, amount1) = nftManager.decreaseLiquidity(_params);
        _harvestOperation(positionInfo, _params.tokenId, address(0));
        _updateLiquidityOperation(positionInfo, _params.tokenId);
    }

    function collect(
        INonfungiblePositionManager.CollectParams memory _params
    ) external nonReentrant returns (uint256 amount0, uint256 amount1) {
        UserPositionInfo memory positionInfo = userPositionInfos[
            _params.tokenId
        ];
        require(positionInfo.user == msg.sender, "MasterChef: NOT_OWNER");
        updatePool(positionInfo.pid);
        if (_params.recipient == address(0)) _params.recipient = address(this);
        (amount0, amount1) = nftManager.collect(_params);
    }

    function burn(uint256 _tokenId) external nonReentrant {
        UserPositionInfo storage positionInfo = userPositionInfos[_tokenId];
        require(positionInfo.user == msg.sender, "MasterChef: NOT_OWNER");
        updatePool(positionInfo.pid);
        delete userPositionInfos[_tokenId];
        _harvestOperation(positionInfo, _tokenId, address(0));
        _updateLiquidityOperation(positionInfo, _tokenId);
        // Update Enumerable
        removeToken(msg.sender, _tokenId);
        nftManager.burn(_tokenId);

        emit Withdraw(msg.sender, msg.sender, positionInfo.pid, _tokenId);
    }
}
