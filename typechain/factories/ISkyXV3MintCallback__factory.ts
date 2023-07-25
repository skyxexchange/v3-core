/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISkyXV3MintCallback } from "../ISkyXV3MintCallback";

export class ISkyXV3MintCallback__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISkyXV3MintCallback {
    return new Contract(address, _abi, signerOrProvider) as ISkyXV3MintCallback;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "skyxV3MintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
