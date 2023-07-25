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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TickMathTestInterface extends ethers.utils.Interface {
  functions: {
    "MAX_SQRT_RATIO()": FunctionFragment;
    "MIN_SQRT_RATIO()": FunctionFragment;
    "getGasCostOfGetSqrtRatioAtTick(int24)": FunctionFragment;
    "getGasCostOfGetTickAtSqrtRatio(uint160)": FunctionFragment;
    "getSqrtRatioAtTick(int24)": FunctionFragment;
    "getTickAtSqrtRatio(uint160)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_SQRT_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_SQRT_RATIO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetSqrtRatioAtTick",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfGetTickAtSqrtRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSqrtRatioAtTick",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTickAtSqrtRatio",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_SQRT_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_SQRT_RATIO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetSqrtRatioAtTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfGetTickAtSqrtRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSqrtRatioAtTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTickAtSqrtRatio",
    data: BytesLike
  ): Result;

  events: {};
}

export class TickMathTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TickMathTestInterface;

  functions: {
    MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MAX_SQRT_RATIO()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MIN_SQRT_RATIO()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGasCostOfGetSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfGetSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfGetTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfGetTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    "getTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  "MAX_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

  "MIN_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

  getGasCostOfGetSqrtRatioAtTick(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfGetSqrtRatioAtTick(int24)"(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfGetTickAtSqrtRatio(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfGetTickAtSqrtRatio(uint160)"(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSqrtRatioAtTick(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getSqrtRatioAtTick(int24)"(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTickAtSqrtRatio(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "getTickAtSqrtRatio(uint160)"(
    sqrtPriceX96: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfGetSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "getTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<BigNumber>;

    "MIN_SQRT_RATIO()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfGetSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfGetTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_SQRT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MAX_SQRT_RATIO()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_SQRT_RATIO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MIN_SQRT_RATIO()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfGetSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfGetTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfGetTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSqrtRatioAtTick(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSqrtRatioAtTick(int24)"(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTickAtSqrtRatio(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTickAtSqrtRatio(uint160)"(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
