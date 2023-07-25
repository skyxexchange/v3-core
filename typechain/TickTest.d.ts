/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TickTestInterface extends ethers.utils.Interface {
  functions: {
    "clear(int24)": FunctionFragment;
    "cross(int24,uint256,uint256,uint160,int56,uint32)": FunctionFragment;
    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)": FunctionFragment;
    "setTick(int24,tuple)": FunctionFragment;
    "tickSpacingToMaxLiquidityPerTick(int24)": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "clear", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "cross",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeGrowthInside",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setTick",
    values: [
      BigNumberish,
      {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacingToMaxLiquidityPerTick",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "clear", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cross", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTick", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacingToMaxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;

  events: {};
}

export class TickTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TickTestInterface;

  functions: {
    clear(
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "clear(int24)"(
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cross(int24,uint256,uint256,uint160,int56,uint32)"(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    setTick(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))"(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tickSpacingToMaxLiquidityPerTick(int24)"(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    "ticks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)"(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  clear(
    tick: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "clear(int24)"(
    tick: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cross(
    tick: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cross(int24,uint256,uint256,uint160,int56,uint32)"(
    tick: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getFeeGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      feeGrowthInside0X128: BigNumber;
      feeGrowthInside1X128: BigNumber;
    }
  >;

  "getFeeGrowthInside(int24,int24,int24,uint256,uint256)"(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    tickCurrent: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      feeGrowthInside0X128: BigNumber;
      feeGrowthInside1X128: BigNumber;
    }
  >;

  setTick(
    tick: BigNumberish,
    info: {
      liquidityGross: BigNumberish;
      liquidityNet: BigNumberish;
      feeGrowthOutside0X128: BigNumberish;
      feeGrowthOutside1X128: BigNumberish;
      tickCumulativeOutside: BigNumberish;
      secondsPerLiquidityOutsideX128: BigNumberish;
      secondsOutside: BigNumberish;
      initialized: boolean;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))"(
    tick: BigNumberish,
    info: {
      liquidityGross: BigNumberish;
      liquidityNet: BigNumberish;
      feeGrowthOutside0X128: BigNumberish;
      feeGrowthOutside1X128: BigNumberish;
      tickCumulativeOutside: BigNumberish;
      secondsPerLiquidityOutsideX128: BigNumberish;
      secondsOutside: BigNumberish;
      initialized: boolean;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tickSpacingToMaxLiquidityPerTick(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tickSpacingToMaxLiquidityPerTick(int24)"(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ticks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      feeGrowthOutside0X128: BigNumber;
      feeGrowthOutside1X128: BigNumber;
      tickCumulativeOutside: BigNumber;
      secondsPerLiquidityOutsideX128: BigNumber;
      secondsOutside: number;
      initialized: boolean;
    }
  >;

  "ticks(int24)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      feeGrowthOutside0X128: BigNumber;
      feeGrowthOutside1X128: BigNumber;
      tickCumulativeOutside: BigNumber;
      secondsPerLiquidityOutsideX128: BigNumber;
      secondsOutside: number;
      initialized: boolean;
    }
  >;

  update(
    tick: BigNumberish,
    tickCurrent: BigNumberish,
    liquidityDelta: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    upper: boolean,
    maxLiquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)"(
    tick: BigNumberish,
    tickCurrent: BigNumberish,
    liquidityDelta: BigNumberish,
    feeGrowthGlobal0X128: BigNumberish,
    feeGrowthGlobal1X128: BigNumberish,
    secondsPerLiquidityCumulativeX128: BigNumberish,
    tickCumulative: BigNumberish,
    time: BigNumberish,
    upper: boolean,
    maxLiquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    clear(tick: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "clear(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cross(int24,uint256,uint256,uint160,int56,uint32)"(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        feeGrowthInside0X128: BigNumber;
        feeGrowthInside1X128: BigNumber;
      }
    >;

    setTick(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))"(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tickSpacingToMaxLiquidityPerTick(int24)"(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    "ticks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
      }
    >;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)"(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    clear(tick: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "clear(int24)"(
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cross(int24,uint256,uint256,uint160,int56,uint32)"(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTick(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))"(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tickSpacingToMaxLiquidityPerTick(int24)"(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "ticks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)"(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clear(
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "clear(int24)"(
      tick: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cross(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cross(int24,uint256,uint256,uint160,int56,uint32)"(
      tick: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getFeeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFeeGrowthInside(int24,int24,int24,uint256,uint256)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      tickCurrent: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTick(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTick(int24,(uint128,int128,uint256,uint256,int56,uint160,uint32,bool))"(
      tick: BigNumberish,
      info: {
        liquidityGross: BigNumberish;
        liquidityNet: BigNumberish;
        feeGrowthOutside0X128: BigNumberish;
        feeGrowthOutside1X128: BigNumberish;
        tickCumulativeOutside: BigNumberish;
        secondsPerLiquidityOutsideX128: BigNumberish;
        secondsOutside: BigNumberish;
        initialized: boolean;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tickSpacingToMaxLiquidityPerTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tickSpacingToMaxLiquidityPerTick(int24)"(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ticks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    update(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "update(int24,int24,int128,uint256,uint256,uint160,int56,uint32,bool,uint128)"(
      tick: BigNumberish,
      tickCurrent: BigNumberish,
      liquidityDelta: BigNumberish,
      feeGrowthGlobal0X128: BigNumberish,
      feeGrowthGlobal1X128: BigNumberish,
      secondsPerLiquidityCumulativeX128: BigNumberish,
      tickCumulative: BigNumberish,
      time: BigNumberish,
      upper: boolean,
      maxLiquidity: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
