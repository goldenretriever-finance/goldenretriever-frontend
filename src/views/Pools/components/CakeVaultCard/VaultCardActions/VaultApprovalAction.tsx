import React from 'react'
import { Button, AutoRenewIcon, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useVaultApprove } from 'hooks/useApprove'

interface ApprovalActionProps {
  setLastUpdated: () => void
  isLoading?: boolean
}

const EnableWrapper = styled.div`
  border-radius: 6px;
  button {
    position: relative;
    width: auto;
    background-color: rgba(0, 0, 0, 0.13);
    box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    overflow: hidden;
    border-left: 2px solid #0947e7;
    border-right: 2px solid #cf00f0;
    border-image: initial;
    font-size: 14px;
    letter-spacing: 0;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      top: 0;
      background: linear-gradient(to right, #0947e7 0%, #cf00f0 100%);
    }
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      background: linear-gradient(to right, #0947e7 0%, #cf00f0 100%);
    }
  }
`


const VaultApprovalAction: React.FC<ApprovalActionProps> = ({ isLoading = false, setLastUpdated }) => {
  const { t } = useTranslation()

  const { handleApprove, requestedApproval } = useVaultApprove(setLastUpdated)

  return (
    <EnableWrapper>
      {isLoading ? (
        <Skeleton width="100%" height="52px" />
      ) : (
        <Button
          isLoading={requestedApproval}
          endIcon={requestedApproval ? <AutoRenewIcon spin color="currentColor" /> : null}
          disabled={requestedApproval}
          onClick={handleApprove}
          width="100%"
        >
          {t('Enable')}
        </Button>
      )}
    </EnableWrapper>
  )
}

export default VaultApprovalAction
