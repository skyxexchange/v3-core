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

interface MockTimeSkyXV3PoolDeployerInterface extends ethers.utils.Interface {
  functions: {
    "deploy(address,address,address,uint24,int24)": FunctionFragment;
    "parameters()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "parameters",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "parameters", data: BytesLike): Result;

  events: {
    "PoolDeployed(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolDeployed"): EventFragment;
}

export class MockTimeSkyXV3PoolDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockTimeSkyXV3PoolDeployerInterface;

  functions: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deploy(address,address,address,uint24,int24)"(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  deploy(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deploy(address,address,address,uint24,int24)"(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  parameters(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number] & {
      factory: string;
      token0: string;
      token1: string;
      fee: number;
      tickSpacing: number;
    }
  >;

  "parameters()"(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, number, number] & {
      factory: string;
      token0: string;
      token1: string;
      fee: number;
      tickSpacing: number;
    }
  >;

  callStatic: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deploy(address,address,address,uint24,int24)"(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    parameters(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;

    "parameters()"(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, number, number] & {
        factory: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpacing: number;
      }
    >;
  };

  filters: {
    PoolDeployed(pool: null): EventFilter;
  };

  estimateGas: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deploy(address,address,address,uint24,int24)"(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    parameters(overrides?: CallOverrides): Promise<BigNumber>;

    "parameters()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deploy(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deploy(address,address,address,uint24,int24)"(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    parameters(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "parameters()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
