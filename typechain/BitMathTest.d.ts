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

interface BitMathTestInterface extends ethers.utils.Interface {
  functions: {
    "getGasCostOfLeastSignificantBit(uint256)": FunctionFragment;
    "getGasCostOfMostSignificantBit(uint256)": FunctionFragment;
    "leastSignificantBit(uint256)": FunctionFragment;
    "mostSignificantBit(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getGasCostOfLeastSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfMostSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leastSignificantBit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mostSignificantBit",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getGasCostOfLeastSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfMostSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leastSignificantBit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mostSignificantBit",
    data: BytesLike
  ): Result;

  events: {};
}

export class BitMathTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BitMathTestInterface;

  functions: {
    getGasCostOfLeastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfLeastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfMostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfMostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    leastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { r: number }>;

    "leastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { r: number }>;

    mostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { r: number }>;

    "mostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { r: number }>;
  };

  getGasCostOfLeastSignificantBit(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfLeastSignificantBit(uint256)"(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfMostSignificantBit(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfMostSignificantBit(uint256)"(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  leastSignificantBit(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "leastSignificantBit(uint256)"(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  mostSignificantBit(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "mostSignificantBit(uint256)"(
    x: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    getGasCostOfLeastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfLeastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfMostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfMostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "leastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    mostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "mostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    getGasCostOfLeastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfLeastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfMostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfMostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "leastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGasCostOfLeastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfLeastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfMostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfMostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leastSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "leastSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mostSignificantBit(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "mostSignificantBit(uint256)"(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}