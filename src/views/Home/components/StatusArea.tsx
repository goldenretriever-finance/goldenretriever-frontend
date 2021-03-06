import React, { FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import max from 'lodash/max'
import { useTranslation } from 'contexts/Localization'
import { getFarmApr } from '../../../utils/apr'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'
import { useAppDispatch } from '../../../state'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from '../../../state/farms'
import { useGetStats } from '../../../hooks/api'


const Area = styled.div`
:after {
  content: "";
  display: block;
  clear: both;
} 
:before {
  content: "";
  display: block;
  clear: both;
} 

    .box_wrap {
     text-align: center;
     width: 48%;
     margin:0 1% 10px 1%;
     background-color: #501dc0;
     border-radius: 6px;
     padding: 10px;
     box-shadow: 0 0 16px rgb(7 0 27 / 20%);
     float:left;

      :nth-child(5) {
        width: 98%;
        display: none;
        
        .top_area {
          min-height: auto;
        }

        ${({ theme }) => theme.mediaQueries.sm} {
          .top_area {
            min-height: 86px;
          }
          }
        }
        
       }
      
       
     }
  
  ${({ theme }) => theme.mediaQueries.sm} {   
      .box_wrap {
        width: 19%;
        background-color: #0c0026;
        float:none;
        margin:0 0 0 0;

        :nth-child(5) {
          width: 19%;
          display: none;
         }
      }
    }
  }

  .btn_gr {
    display: block;
    height: 36px;
    line-height: 31px;
    color: #ffffff;
    background-color: #000000;
    border: double 2px transparent;
    border-radius: 5px;
    background-image: linear-gradient(#000000, #000000), linear-gradient(135deg, #0947e7, #cf00f0);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .top_area {
    min-height: 98px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    .top_area {
      min-height: 86px;
    }
    }
  }
  

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    .box_wrap :nth-child(5) .top_area {
      min-height: auto;
    }
    }
  }
`

const StatusArea: FC = () => {
  const [, setIsFetchingFarmData] = useState(true)
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    const fetchFarmData = async () => {
      try {
        await dispatch(fetchFarmsPublicDataAsync(nonArchivedFarms.map((nonArchivedFarm) => nonArchivedFarm.pid)))
      } finally {
        setIsFetchingFarmData(false)
      }
    }
    fetchFarmData()
  }, [dispatch, setIsFetchingFarmData])

  const highestApr = useMemo(() => {
    if (cakePrice.gt(0)) {
      const aprs = farmsLP.map((farm) => {
        // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
        if (farm.pid !== 0 && farm.multiplier !== '0X' && farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice) {
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
          return getFarmApr(new BigNumber(farm.poolWeight), cakePrice, totalLiquidity)
        }
        return null
      })

      const maxApr = max(aprs)
      return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
    return null
  }, [cakePrice, farmsLP])

  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <Area className="flex mt50">
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>{t('Exchange')}</h3>
          <div className="text">{t('Exchange tokens')}</div>
        </div>
        <a href="https://exchange.goldenretriever-finance.com/#/swap" className="btn_s btn_gr bold">
          Swap
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>{t('Liquidity')}</h3>
          <div className="text">{t('Make LP')}</div>
        </div>
        <a href="https://exchange.goldenretriever-finance.com/#/pool" className="btn_s btn_gr bold">
          Add LP
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>{t('Farms')}</h3>
          <div className="text">{t('Stake Liquidity Pool (LP)')}</div>
          <div className="nomber bold text_l">{highestApr}%</div>
        </div>
        <a href="/farms" className="btn_s btn_gr bold">
          Farms
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>{t('Pools')}</h3>
          <div className="text">{t('Just stake some tokens to earn.')}</div>
        </div>
        <a href="/pools" className="btn_s btn_gr bold">
          Pools
        </a>
      </div>
      <div className="box_wrap txt_center">
        <div className="top_area">
          <h3>TVL</h3>
          <div className="text">{t('Across all LPs and Golden Retriever Pools')}</div>
        </div>
        <div className="nomber bold text_l">${tvl}</div>
      </div>
    </Area>
  )
}

export default StatusArea
