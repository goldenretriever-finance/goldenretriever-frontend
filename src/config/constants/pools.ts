import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.inu,
    earningToken: tokens.inu,
    contractAddress: {
      97: '',
      56: '0x32e01724D2145A373A50F17efc7CD9d2db53061f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.001',
    sortOrder: 1,
    isFinished: false,
  },

]

export default pools
