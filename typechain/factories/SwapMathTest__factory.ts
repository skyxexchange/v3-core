/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SwapMathTest } from "../SwapMathTest";

export class SwapMathTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SwapMathTest> {
    return super.deploy(overrides || {}) as Promise<SwapMathTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapMathTest {
    return super.attach(address) as SwapMathTest;
  }
  connect(signer: Signer): SwapMathTest__factory {
    return super.connect(signer) as SwapMathTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapMathTest {
    return new Contract(address, _abi, signerOrProvider) as SwapMathTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint24",
        name: "feePips",
        type: "uint24",
      },
    ],
    name: "computeSwapStep",
    outputs: [
      {
        internalType: "uint160",
        name: "sqrtQ",
        type: "uint160",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "sqrtP",
        type: "uint160",
      },
      {
        internalType: "uint160",
        name: "sqrtPTarget",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "amountRemaining",
        type: "int256",
      },
      {
        internalType: "uint24",
        name: "feePips",
        type: "uint24",
      },
    ],
    name: "getGasCostOfComputeSwapStep",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610839806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063100d3f741461003b578063d28c51b7146100bc575b600080fd5b61008c600480360360a081101561005157600080fd5b5080356001600160a01b039081169160208101359091169060408101356001600160801b0316906060810135906080013562ffffff1661011f565b604080516001600160a01b0390951685526020850193909352838301919091526060830152519081900360800190f35b61010d600480360360a08110156100d257600080fd5b5080356001600160a01b039081169160208101359091169060408101356001600160801b0316906060810135906080013562ffffff16610145565b60408051918252519081900360200190f35b6000806000806101328989898989610169565b929c919b50995090975095505050505050565b6000805a90506101588787878787610169565b505050505a90039695505050505050565b60008080806001600160a01b03808916908a1610158187128015906101ee5760006101a28989620f42400362ffffff16620f424061035b565b9050826101bb576101b68c8c8c600161040b565b6101c8565b6101c88b8d8c6001610486565b95508581106101d9578a96506101e8565b6101e58c8b8386610531565b96505b50610238565b81610205576102008b8b8b6000610486565b610212565b6102128a8c8b600061040b565b935083886000031061022657899550610238565b6102358b8a8a6000038561057d565b95505b6001600160a01b038a811690871614821561029b578080156102575750815b61026d57610268878d8c6001610486565b61026f565b855b955080801561027c575081155b6102925761028d878d8c600061040b565b610294565b845b94506102e5565b8080156102a55750815b6102bb576102b68c888c600161040b565b6102bd565b855b95508080156102ca575081155b6102e0576102db8c888c6000610486565b6102e2565b845b94505b811580156102f557508860000385115b15610301578860000394505b81801561032057508a6001600160a01b0316876001600160a01b031614155b1561032f57858903935061034c565b610349868962ffffff168a620f42400362ffffff166105c9565b93505b50505095509550955095915050565b6000808060001985870986860292508281109083900303905080610391576000841161038657600080fd5b508290049050610404565b80841161039d57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b6000836001600160a01b0316856001600160a01b0316111561042b579293925b8161045857610453836001600160801b03168686036001600160a01b0316600160601b61035b565b61047b565b61047b836001600160801b03168686036001600160a01b0316600160601b6105c9565b90505b949350505050565b6000836001600160a01b0316856001600160a01b031611156104a6579293925b600160601b600160e01b03606084901b166001600160a01b0386860381169087166104d057600080fd5b8361050057866001600160a01b03166104f38383896001600160a01b031661035b565b816104fa57fe5b04610526565b6105266105178383896001600160a01b03166105c9565b886001600160a01b0316610603565b979650505050505050565b600080856001600160a01b03161161054857600080fd5b6000846001600160801b03161161055e57600080fd5b8161057057610453858585600161060e565b61047b85858560016106ef565b600080856001600160a01b03161161059457600080fd5b6000846001600160801b0316116105aa57600080fd5b816105bc5761045385858560006106ef565b61047b858585600061060e565b60006105d684848461035b565b9050600082806105e257fe5b84860911156104045760001981106105f957600080fd5b6001019392505050565b808204910615150190565b600081156106815760006001600160a01b038411156106445761063f84600160601b876001600160801b031661035b565b61065c565b6001600160801b038516606085901b8161065a57fe5b045b90506106796106746001600160a01b038816836107d2565b6107e8565b91505061047e565b60006001600160a01b038411156106af576106aa84600160601b876001600160801b03166105c9565b6106c6565b6106c6606085901b6001600160801b038716610603565b905080866001600160a01b0316116106dd57600080fd5b6001600160a01b03861603905061047e565b6000826106fd57508361047e565b600160601b600160e01b03606085901b16821561078b576001600160a01b0386168481029085828161072b57fe5b04141561075c5781810182811061075a5761075083896001600160a01b0316836105c9565b935050505061047e565b505b6107828261077d878a6001600160a01b0316868161077657fe5b04906107d2565b610603565b9250505061047e565b6001600160a01b038616848102908582816107a257fe5b041480156107af57508082115b6107b857600080fd5b808203610750610674846001600160a01b038b16846105c9565b808201828110156107e257600080fd5b92915050565b806001600160a01b03811681146107fe57600080fd5b91905056fea2646970667358221220fb405f1df2b0b6992e32341c4a53f3d79d3c10b0657d33b0437065ee11d236cf64736f6c63430007060033";