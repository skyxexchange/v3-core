// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.7.6;


import './interfaces/liquidity-mining/INonfungiblePositionManager.sol';
import './interfaces/liquidity-mining/IMasterChefV3.sol';
import './SkyXV3LmPool.sol';

/// @dev This contract is for Master Chef to create a corresponding LmPool when
/// adding a new farming pool. As for why not just create LmPool inside the
/// Master Chef contract is merely due to the imcompatibility of the solidity
/// versions.
contract SkyXV3LmPoolDeployer {
    struct Parameters {
        address pool;
        address masterChef;
    }

    Parameters public parameters;

    address public immutable masterChef;

    event NewLMPool(address indexed pool, address indexed LMPool);

    modifier onlyMasterChef() {
        require(msg.sender == masterChef, 'Not MC');
        _;
    }

    constructor(address _masterChef) {
        masterChef = _masterChef;
    }

    /// @dev Deploys a LmPool
    /// @param pool The contract address of the SkyX V3 pool
    function deploy(address pool) external onlyMasterChef returns (address lmPool) {
        parameters = Parameters({pool: pool, masterChef: masterChef});

        lmPool = address(new SkyXV3LmPool{salt: keccak256(abi.encode(pool, masterChef, block.timestamp))}());

        delete parameters;

        // TODO: Set new LMPool for SkyX v3 pool by Factory Owner
        // ISkyXV3Pool(pool).setLmPool(lmPool);

        emit NewLMPool(pool, lmPool);
    }
}