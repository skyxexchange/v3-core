# SkyX V3

[![npm version](https://img.shields.io/npm/v/@skyxexchange/v3-core/latest.svg)](https://www.npmjs.com/package/@skyxexchange/v3-core/v/latest)

This repository contains the core smart contracts for the SkyX V3 Protocol.
For higher level contracts, see the [v3-periphery](https://github.com/skyxexchange/v3-periphery)
repository.

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@skyxexchange/v3-core`
and import the factory bytecode located at
`@skyxexchange/v3-core/artifacts/contracts/SkyXV3Factory.sol/SkyXV3Factory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@skyxexchange/v3-core/artifacts/contracts/SkyXV3Factory.sol/SkyXV3Factory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all SkyX code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The SkyX v3 interfaces are available for import into solidity smart contracts
via the npm artifact `@skyxexchange/v3-core`, e.g.:

```solidity
import '@skyxexchange/v3-core/contracts/interfaces/ISkyXV3Pool.sol';

contract MyContract {
  ISkyXV3Pool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```