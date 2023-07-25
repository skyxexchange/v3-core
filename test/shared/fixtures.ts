import { BigNumber } from 'ethers'
import { ethers } from 'hardhat'
import { MockTimeSkyXV3Pool } from '../../typechain/MockTimeSkyXV3Pool'
import { TestERC20 } from '../../typechain/TestERC20'
import { SkyXV3Factory } from '../../typechain/SkyXV3Factory'
import { TestSkyXV3Callee } from '../../typechain/TestSkyXV3Callee'
import { TestSkyXV3Router } from '../../typechain/TestSkyXV3Router'
import { MockTimeSkyXV3PoolDeployer } from '../../typechain/MockTimeSkyXV3PoolDeployer'

import { Fixture } from 'ethereum-waffle'

interface FactoryFixture {
  poolDeployer: any
  factory: SkyXV3Factory
}

async function factoryFixture(): Promise<FactoryFixture> {
  const poolDeployerFactory = await ethers.getContractFactory('SkyXV3PoolDeployer')
  const poolDeployer = await poolDeployerFactory.deploy()
  await poolDeployer.deployed()
  const factoryFactory = await ethers.getContractFactory('SkyXV3Factory')
  const factory = (await factoryFactory.deploy(poolDeployer.address)) as SkyXV3Factory
  await factory.deployed()
  await poolDeployer.setFactoryAddress(factory.address)
  return { poolDeployer, factory }
}

interface TokensFixture {
  token0: TestERC20
  token1: TestERC20
  token2: TestERC20
}

async function tokensFixture(): Promise<TokensFixture> {
  const tokenFactory = await ethers.getContractFactory('TestERC20')
  const tokenA = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20
  const tokenB = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20
  const tokenC = (await tokenFactory.deploy(BigNumber.from(2).pow(255))) as TestERC20

  const [token0, token1, token2] = [tokenA, tokenB, tokenC].sort((tokenA, tokenB) =>
    tokenA.address.toLowerCase() < tokenB.address.toLowerCase() ? -1 : 1
  )

  return { token0, token1, token2 }
}

type TokensAndFactoryFixture = FactoryFixture & TokensFixture

interface PoolFixture extends TokensAndFactoryFixture {
  swapTargetCallee: TestSkyXV3Callee
  swapTargetRouter: TestSkyXV3Router
  createPool(
    fee: number,
    tickSpacing: number,
    firstToken?: TestERC20,
    secondToken?: TestERC20
  ): Promise<MockTimeSkyXV3Pool>
}

// Monday, October 5, 2020 9:00:00 AM GMT-05:00
export const TEST_POOL_START_TIME = 1601906400

export const poolFixture: Fixture<PoolFixture> = async function (): Promise<PoolFixture> {
  const { poolDeployer, factory } = await factoryFixture()
  const { token0, token1, token2 } = await tokensFixture()

  const MockTimeSkyXV3PoolDeployerFactory = await ethers.getContractFactory('MockTimeSkyXV3PoolDeployer')
  const MockTimeSkyXV3PoolFactory = await ethers.getContractFactory('MockTimeSkyXV3Pool')

  const calleeContractFactory = await ethers.getContractFactory('TestSkyXV3Callee')
  const routerContractFactory = await ethers.getContractFactory('TestSkyXV3Router')

  const swapTargetCallee = (await calleeContractFactory.deploy()) as TestSkyXV3Callee
  const swapTargetRouter = (await routerContractFactory.deploy()) as TestSkyXV3Router

  return {
    token0,
    token1,
    token2,
    poolDeployer,
    factory,
    swapTargetCallee,
    swapTargetRouter,
    createPool: async (fee, tickSpacing, firstToken = token0, secondToken = token1) => {
      const mockTimePoolDeployer = (await MockTimeSkyXV3PoolDeployerFactory.deploy()) as MockTimeSkyXV3PoolDeployer
      const tx = await mockTimePoolDeployer.deploy(
        factory.address,
        firstToken.address,
        secondToken.address,
        fee,
        tickSpacing
      )

      const receipt = await tx.wait()
      const poolAddress = receipt.events?.[0].args?.pool as string
      return MockTimeSkyXV3PoolFactory.attach(poolAddress) as MockTimeSkyXV3Pool
    },
  }
}
