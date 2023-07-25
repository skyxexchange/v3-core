// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

interface ILMPool {
    function lmTicks(int24) external view returns (uint128, int128, uint256);

    function rewardGrowthGlobalX128() external view returns (uint256);

    function lmLiquidity() external view returns (uint128);

    function lastRewardTimestamp() external view returns (uint32);

    function updatePosition(int24 tickLower, int24 tickUpper, int128 liquidityDelta) external;

    function getRewardGrowthInside(
        int24 tickLower,
        int24 tickUpper
    ) external view returns (uint256 rewardGrowthInsideX128);

    function accumulateReward(uint32 currTimestamp) external;
}