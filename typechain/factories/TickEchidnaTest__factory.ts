/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickEchidnaTest } from "../TickEchidnaTest";

export class TickEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickEchidnaTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickEchidnaTest {
    return super.attach(address) as TickEchidnaTest;
  }
  connect(signer: Signer): TickEchidnaTest__factory {
    return super.connect(signer) as TickEchidnaTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickEchidnaTest {
    return new Contract(address, _abi, signerOrProvider) as TickEchidnaTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickSpacing",
        type: "int24",
      },
    ],
    name: "checkTickSpacingToParametersInvariants",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ce806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063858027e514610030575b600080fd5b6100506004803603602081101561004657600080fd5b503560020b610052565b005b620d89e8600282900b131561006657600080fd5b60008160020b1361007657600080fd5b600081600281900b620d89e7198161008a57fe5b05029050600082600281900b620d89e8816100a157fe5b0502905060006100b08461012e565b90508260000360020b8260020b146100c457fe5b60008260020b136100d157fe5b8360020b83830360020b816100e257fe5b0760020b156100ed57fe5b60008460020b84840360020b8161010057fe5b0560020b60010190506001600160801b03801681836001600160801b031602111561012757fe5b5050505050565b60008082600281900b620d89e7198161014357fe5b05029050600083600281900b620d89e88161015a57fe5b0502905060008460020b83830360020b8161017157fe5b0560010190508062ffffff166001600160801b0380168161018e57fe5b049594505050505056fea264697066735822122004c5c8f3f70a08f24d44ca640f136cce6053353dc00261c35e6a5bee21b61dbc64736f6c63430007060033";
