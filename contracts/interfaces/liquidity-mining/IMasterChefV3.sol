// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity 0.7.6;

interface IMasterChefV3 {
    function nonfungiblePositionManager() external view returns (address);

    function skyxPerSecond() external view returns (uint256);

    function skyxPerSecondByPool(address _v3Pool) external view returns (uint256);
}