/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockObservations } from "../MockObservations";

export class MockObservations__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _blockTimestamps: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    _tickCumulatives: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    _secondsPerLiquidityCumulativeX128s: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _initializeds: [boolean, boolean, boolean, boolean],
    _tick: BigNumberish,
    _observationCardinality: BigNumberish,
    _observationIndex: BigNumberish,
    _lastObservationCurrentTimestamp: boolean,
    _liquidity: BigNumberish,
    overrides?: Overrides
  ): Promise<MockObservations> {
    return super.deploy(
      _blockTimestamps,
      _tickCumulatives,
      _secondsPerLiquidityCumulativeX128s,
      _initializeds,
      _tick,
      _observationCardinality,
      _observationIndex,
      _lastObservationCurrentTimestamp,
      _liquidity,
      overrides || {}
    ) as Promise<MockObservations>;
  }
  getDeployTransaction(
    _blockTimestamps: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    _tickCumulatives: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    _secondsPerLiquidityCumulativeX128s: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    _initializeds: [boolean, boolean, boolean, boolean],
    _tick: BigNumberish,
    _observationCardinality: BigNumberish,
    _observationIndex: BigNumberish,
    _lastObservationCurrentTimestamp: boolean,
    _liquidity: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _blockTimestamps,
      _tickCumulatives,
      _secondsPerLiquidityCumulativeX128s,
      _initializeds,
      _tick,
      _observationCardinality,
      _observationIndex,
      _lastObservationCurrentTimestamp,
      _liquidity,
      overrides || {}
    );
  }
  attach(address: string): MockObservations {
    return super.attach(address) as MockObservations;
  }
  connect(signer: Signer): MockObservations__factory {
    return super.connect(signer) as MockObservations__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockObservations {
    return new Contract(address, _abi, signerOrProvider) as MockObservations;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32[4]",
        name: "_blockTimestamps",
        type: "uint32[4]",
      },
      {
        internalType: "int56[4]",
        name: "_tickCumulatives",
        type: "int56[4]",
      },
      {
        internalType: "uint128[4]",
        name: "_secondsPerLiquidityCumulativeX128s",
        type: "uint128[4]",
      },
      {
        internalType: "bool[4]",
        name: "_initializeds",
        type: "bool[4]",
      },
      {
        internalType: "int24",
        name: "_tick",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "_observationCardinality",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "_observationIndex",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "_lastObservationCurrentTimestamp",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "_liquidity",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "liquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "slot0",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104ac3803806104ac83398181016040526102a081101561003457600080fd5b5061020081015161022082015161024083015161026084015161028085015160808601946101008701946101808801949193909260005b600481101561019c5760405180608001604052808b836004811061008b57fe5b602002015163ffffffff1681526020018a83600481106100a757fe5b602002015160060b81526020018983600481106100c057fe5b60200201516001600160801b03166001600160a01b031681526020018883600481106100e857fe5b602002015115159052600082600481106100fe57fe5b825191018054602084015160408501516060909501511515600160f81b026001600160f81b036001600160a01b039096166b01000000000000000000000002600160581b600160f81b031960069390930b66ffffffffffffff166401000000000266ffffffffffffff60201b1963ffffffff90971663ffffffff1990951694909417959095169290921716929092179290921617905560010161006b565b506004805462ffffff191662ffffff60029790970b969096169590951764ffff0000001916630100000061ffff958616021761ffff60281b19166501000000000093909416929092029290921760ff60b81b1916600160b81b9215159290920291909117600160381b600160b81b0319166701000000000000006001600160801b0392909216919091021790555061026d925082915061023f90506000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631a68650214610046578063252c09d71461006a5780633850c7bd146100c1575b600080fd5b61004e61011a565b604080516001600160801b039092168252519081900360200190f35b6100876004803603602081101561008057600080fd5b5035610134565b6040805163ffffffff909516855260069390930b60208501526001600160a01b039091168383015215156060830152519081900360800190f35b6100c9610209565b604080516001600160a01b03909816885260029690960b602088015261ffff9485168787015292841660608701529216608085015260ff90911660a0840152151560c0830152519081900360e00190f35b60045467010000000000000090046001600160801b031681565b600080600080600080866004811061014857fe5b60408051608081018252929091015463ffffffff811683526401000000008104600690810b810b900b60208401526001600160a01b03600160581b8204169183019190915260ff600160f81b909104811615156060830152600454919250600160b81b90910416156101e8578051600480546000916501000000000090910461ffff169081106101d457fe5b015463ffffffff9081169190910342031681525b80516020820151604083015160609093015191989097509195509350915050565b600454600090600281900b9061ffff650100000000008204811691630100000090041683808091929394959656fea264697066735822122069d915b6bb9d11f068b7daa6b13cc7578cb17693aa9d4924ad37b077f4bd485f64736f6c63430007060033";