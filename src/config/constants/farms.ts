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
    pid: 1,
    lpSymbol: 'INU-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xc8FB3Cb96FF53b7DA444B61a978c5b12fe343099',
    },
    token: tokens.inu,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf5c254986e3f8BF47757C652a2105735D51a88b9',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
]

export default farms
