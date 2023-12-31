/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISkyXV3LmPoolDeveloper } from "../ISkyXV3LmPoolDeveloper";

export class ISkyXV3LmPoolDeveloper__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISkyXV3LmPoolDeveloper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISkyXV3LmPoolDeveloper;
  }
}

const _abi = [
  {
    inputs: [],
    name: "parameters",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "masterChef",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
