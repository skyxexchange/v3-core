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

interface SkyXV3LmPoolDeployerInterface extends ethers.utils.Interface {
  functions: {
    "deploy(address)": FunctionFragment;
    "masterChef()": FunctionFragment;
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deploy", values: [string]): string;
  encodeFunctionData(
    functionFragment: "masterChef",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "masterChef", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {
    "NewLMPool(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewLMPool"): EventFragment;
}

export class SkyXV3LmPoolDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SkyXV3LmPoolDeployerInterface;

  functions: {
    deploy(pool: string, overrides?: Overrides): Promise<ContractTransaction>;

    "deploy(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    masterChef(overrides?: CallOverrides): Promise<[string]>;

    "masterChef()"(overrides?: CallOverrides): Promise<[string]>;

    parameters(
      overrides?: CallOverrides
    ): Promise<[string, string] & { pool: string; masterChef: string }>;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & { pool: string; masterChef: string }>;
  };

  deploy(pool: string, overrides?: Overrides): Promise<ContractTransaction>;

  "deploy(address)"(
    pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  masterChef(overrides?: CallOverrides): Promise<string>;

  "masterChef()"(overrides?: CallOverrides): Promise<string>;

  parameters(
    overrides?: CallOverrides
  ): Promise<[string, string] & { pool: string; masterChef: string }>;

  "parameters()"(
    overrides?: CallOverrides
  ): Promise<[string, string] & { pool: string; masterChef: string }>;

  callStatic: {
    deploy(pool: string, overrides?: CallOverrides): Promise<string>;

    "deploy(address)"(pool: string, overrides?: CallOverrides): Promise<string>;

    masterChef(overrides?: CallOverrides): Promise<string>;

    "masterChef()"(overrides?: CallOverrides): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<[string, string] & { pool: string; masterChef: string }>;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & { pool: string; masterChef: string }>;
  };

  filters: {
    NewLMPool(pool: string | null, LMPool: string | null): EventFilter;
  };

  estimateGas: {
    deploy(pool: string, overrides?: Overrides): Promise<BigNumber>;

    "deploy(address)"(pool: string, overrides?: Overrides): Promise<BigNumber>;

    masterChef(overrides?: CallOverrides): Promise<BigNumber>;

    "masterChef()"(overrides?: CallOverrides): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    "parameters()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(pool: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "deploy(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    masterChef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "masterChef()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "parameters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}