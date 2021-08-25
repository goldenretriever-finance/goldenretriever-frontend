import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1,3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'INU',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x3F8b51C9b9Fe2ed06f9A165db906f7946B4C08E2',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'INU-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x479ca6c5b7D0Adf13e3d201a75C59658Bd30D1e5',
    },
    token: tokens.inu,
    quoteToken: tokens.wbnb,
    multiplier:"0.001"
  },
  {
    pid: 6,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8e94a4cE3c133bAde84Bba599a0443708F132750',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'RETPOSEIDON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x511AD74963aD65b508b349B975ae6980418Eee6E',
    },
    token: tokens.retposeidon,
    quoteToken: tokens.wbnb,
    multiplier:"0.001"
  }
]

export default farms
