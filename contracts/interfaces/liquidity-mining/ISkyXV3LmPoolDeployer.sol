// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.7.6;

import "./ILMPool.sol";
import "../ISkyXV3Pool.sol";

interface ISkyXV3LmPoolDeployer {
    function deploy(ISkyXV3Pool pool) external returns (ILMPool lmPool);
}