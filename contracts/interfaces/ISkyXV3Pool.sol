// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/ISkyXV3PoolImmutables.sol';
import './pool/ISkyXV3PoolState.sol';
import './pool/ISkyXV3PoolDerivedState.sol';
import './pool/ISkyXV3PoolActions.sol';
import './pool/ISkyXV3PoolOwnerActions.sol';
import './pool/ISkyXV3PoolEvents.sol';

/// @title The interface for a SkyX V3 Pool
/// @notice A SkyX pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface ISkyXV3Pool is
    ISkyXV3PoolImmutables,
    ISkyXV3PoolState,
    ISkyXV3PoolDerivedState,
    ISkyXV3PoolActions,
    ISkyXV3PoolOwnerActions,
    ISkyXV3PoolEvents
{

}
