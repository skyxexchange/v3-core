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

interface ILMPoolInterface extends ethers.utils.Interface {
  functions: {
    "accumulateReward(uint32)": FunctionFragment;
    "getRewardGrowthInside(int24,int24)": FunctionFragment;
    "lastRewardTimestamp()": FunctionFragment;
    "lmLiquidity()": FunctionFragment;
    "lmTicks(int24)": FunctionFragment;
    "rewardGrowthGlobalX128()": FunctionFragment;
    "updatePosition(int24,int24,int128)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accumulateReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardGrowthInside",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastRewardTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lmLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lmTicks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardGrowthGlobalX128",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePosition",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRewardTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lmLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lmTicks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardGrowthGlobalX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePosition",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILMPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILMPoolInterface;

  functions: {
    accumulateReward(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "accumulateReward(uint32)"(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getRewardGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rewardGrowthInsideX128: BigNumber }>;

    "getRewardGrowthInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { rewardGrowthInsideX128: BigNumber }>;

    lastRewardTimestamp(overrides?: CallOverrides): Promise<[number]>;

    "lastRewardTimestamp()"(overrides?: CallOverrides): Promise<[number]>;

    lmLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lmLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lmTicks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    "lmTicks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    rewardGrowthGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rewardGrowthGlobalX128()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updatePosition(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updatePosition(int24,int24,int128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  accumulateReward(
    currTimestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "accumulateReward(uint32)"(
    currTimestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getRewardGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRewardGrowthInside(int24,int24)"(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastRewardTimestamp(overrides?: CallOverrides): Promise<number>;

  "lastRewardTimestamp()"(overrides?: CallOverrides): Promise<number>;

  lmLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "lmLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  lmTicks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  "lmTicks(int24)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  rewardGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  "rewardGrowthGlobalX128()"(overrides?: CallOverrides): Promise<BigNumber>;

  updatePosition(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidityDelta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updatePosition(int24,int24,int128)"(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    liquidityDelta: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    accumulateReward(
      currTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "accumulateReward(uint32)"(
      currTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardGrowthInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRewardTimestamp(overrides?: CallOverrides): Promise<number>;

    "lastRewardTimestamp()"(overrides?: CallOverrides): Promise<number>;

    lmLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "lmLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    lmTicks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    "lmTicks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    rewardGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardGrowthGlobalX128()"(overrides?: CallOverrides): Promise<BigNumber>;

    updatePosition(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePosition(int24,int24,int128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    accumulateReward(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "accumulateReward(uint32)"(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getRewardGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardGrowthInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRewardTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "lastRewardTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    lmLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "lmLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    lmTicks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "lmTicks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardGrowthGlobalX128()"(overrides?: CallOverrides): Promise<BigNumber>;

    updatePosition(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updatePosition(int24,int24,int128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulateReward(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "accumulateReward(uint32)"(
      currTimestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getRewardGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardGrowthInside(int24,int24)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastRewardTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastRewardTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lmLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lmLiquidity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lmTicks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lmTicks(int24)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rewardGrowthGlobalX128()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updatePosition(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updatePosition(int24,int24,int128)"(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      liquidityDelta: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
