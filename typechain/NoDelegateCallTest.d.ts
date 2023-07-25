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

interface NoDelegateCallTestInterface extends ethers.utils.Interface {
  functions: {
    "callsIntoNoDelegateCallFunction()": FunctionFragment;
    "canBeDelegateCalled()": FunctionFragment;
    "cannotBeDelegateCalled()": FunctionFragment;
    "getGasCostOfCanBeDelegateCalled()": FunctionFragment;
    "getGasCostOfCannotBeDelegateCalled()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callsIntoNoDelegateCallFunction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "canBeDelegateCalled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cannotBeDelegateCalled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfCanBeDelegateCalled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfCannotBeDelegateCalled",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "callsIntoNoDelegateCallFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canBeDelegateCalled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cannotBeDelegateCalled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfCanBeDelegateCalled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfCannotBeDelegateCalled",
    data: BytesLike
  ): Result;

  events: {};
}

export class NoDelegateCallTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NoDelegateCallTestInterface;

  functions: {
    callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<[void]>;

    "callsIntoNoDelegateCallFunction()"(
      overrides?: CallOverrides
    ): Promise<[void]>;

    canBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;

    "canBeDelegateCalled()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    cannotBeDelegateCalled(overrides?: CallOverrides): Promise<[BigNumber]>;

    "cannotBeDelegateCalled()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGasCostOfCanBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfCanBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGasCostOfCannotBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfCannotBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<void>;

  "callsIntoNoDelegateCallFunction()"(overrides?: CallOverrides): Promise<void>;

  canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

  "canBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

  cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

  "cannotBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

  getGasCostOfCanBeDelegateCalled(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfCanBeDelegateCalled()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGasCostOfCannotBeDelegateCalled(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfCannotBeDelegateCalled()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    callsIntoNoDelegateCallFunction(overrides?: CallOverrides): Promise<void>;

    "callsIntoNoDelegateCallFunction()"(
      overrides?: CallOverrides
    ): Promise<void>;

    canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

    "canBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

    cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

    "cannotBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfCanBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfCanBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfCannotBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfCannotBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    callsIntoNoDelegateCallFunction(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "callsIntoNoDelegateCallFunction()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

    "canBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

    cannotBeDelegateCalled(overrides?: CallOverrides): Promise<BigNumber>;

    "cannotBeDelegateCalled()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGasCostOfCanBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfCanBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfCannotBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfCannotBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callsIntoNoDelegateCallFunction(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "callsIntoNoDelegateCallFunction()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cannotBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cannotBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfCanBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfCanBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfCannotBeDelegateCalled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfCannotBeDelegateCalled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
