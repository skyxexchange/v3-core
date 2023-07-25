// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.7.6;

import './interfaces/ISkyXV3Factory.sol';
import './interfaces/ISkyXV3PoolDeployer.sol';

import './NoDelegateCall.sol';

/// @title Canonical SkyX V3 factory
/// @notice Deploys SkyX V3 pools and manages ownership and control over pool protocol fees
contract SkyXV3Factory is ISkyXV3Factory, NoDelegateCall {
    /// @inheritdoc ISkyXV3Factory
    address public override owner;
    /// @inheritdoc ISkyXV3Factory
    address public immutable override poolDeployer;

    /// @inheritdoc ISkyXV3Factory
    mapping(uint24 => int24) public override feeAmountTickSpacing;
    /// @inheritdoc ISkyXV3Factory
    mapping(address => mapping(address => mapping(uint24 => address))) public override getPool;

    constructor(address _poolDeployer) {
        owner = msg.sender;
        emit OwnerChanged(address(0), msg.sender);
        poolDeployer = _poolDeployer;

        feeAmountTickSpacing[100] = 1;
        emit FeeAmountEnabled(100, 1);
        feeAmountTickSpacing[500] = 10;
        emit FeeAmountEnabled(500, 10);
        feeAmountTickSpacing[3000] = 60;
        emit FeeAmountEnabled(3000, 60);
        feeAmountTickSpacing[10000] = 200;
        emit FeeAmountEnabled(10000, 200);
    }

    /// @inheritdoc ISkyXV3Factory
    function createPool(
        address tokenA,
        address tokenB,
        uint24 fee
    ) external override noDelegateCall returns (address pool) {
        require(tokenA != tokenB);
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0));
        int24 tickSpacing = feeAmountTickSpacing[fee];
        require(tickSpacing != 0);
        pool = getPool[token0][token1][fee];
        if (pool == address(0)) {
            pool = ISkyXV3PoolDeployer(poolDeployer).deploy(address(this), token0, token1, fee, tickSpacing);
            getPool[token0][token1][fee] = pool;
            // populate mapping in the reverse direction, deliberate choice to avoid the cost of comparing addresses
            getPool[token1][token0][fee] = pool;
            emit PoolCreated(token0, token1, fee, tickSpacing, pool);
        }
    }

    /// @inheritdoc ISkyXV3Factory
    function setOwner(address _owner) external override {
        require(msg.sender == owner);
        emit OwnerChanged(owner, _owner);
        owner = _owner;
    }

    /// @inheritdoc ISkyXV3Factory
    function enableFeeAmount(uint24 fee, int24 tickSpacing) public override {
        require(msg.sender == owner);
        require(fee < 1000000);
        // tick spacing is capped at 16384 to prevent the situation where tickSpacing is so large that
        // TickBitmap#nextInitializedTickWithinOneWord overflows int24 container from a valid tick
        // 16384 ticks represents a >5x price change with ticks of 1 bips
        require(tickSpacing > 0 && tickSpacing < 16384);
        require(feeAmountTickSpacing[fee] == 0);

        feeAmountTickSpacing[fee] = tickSpacing;
        emit FeeAmountEnabled(fee, tickSpacing);
    }
}
