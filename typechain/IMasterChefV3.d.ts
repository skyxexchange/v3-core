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

interface IMasterChefV3Interface extends ethers.utils.Interface {
  functions: {
    "nonfungiblePositionManager()": FunctionFragment;
    "skyxPerSecond()": FunctionFragment;
    "skyxPerSecondByPool(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "nonfungiblePositionManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "skyxPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "skyxPerSecondByPool",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "nonfungiblePositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skyxPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skyxPerSecondByPool",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMasterChefV3 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMasterChefV3Interface;

  functions: {
    nonfungiblePositionManager(overrides?: CallOverrides): Promise<[string]>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    skyxPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    "skyxPerSecond()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    skyxPerSecondByPool(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "skyxPerSecondByPool(address)"(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

  "nonfungiblePositionManager()"(overrides?: CallOverrides): Promise<string>;

  skyxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  "skyxPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

  skyxPerSecondByPool(
    _v3Pool: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "skyxPerSecondByPool(address)"(
    _v3Pool: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    nonfungiblePositionManager(overrides?: CallOverrides): Promise<string>;

    "nonfungiblePositionManager()"(overrides?: CallOverrides): Promise<string>;

    skyxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    "skyxPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

    skyxPerSecondByPool(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "skyxPerSecondByPool(address)"(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    nonfungiblePositionManager(overrides?: CallOverrides): Promise<BigNumber>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    skyxPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    "skyxPerSecond()"(overrides?: CallOverrides): Promise<BigNumber>;

    skyxPerSecondByPool(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "skyxPerSecondByPool(address)"(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    nonfungiblePositionManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nonfungiblePositionManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    skyxPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "skyxPerSecond()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    skyxPerSecondByPool(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "skyxPerSecondByPool(address)"(
      _v3Pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
