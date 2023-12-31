/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISkyXV3FlashCallback } from "../ISkyXV3FlashCallback";

export class ISkyXV3FlashCallback__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISkyXV3FlashCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISkyXV3FlashCallback;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "skyxV3FlashCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
