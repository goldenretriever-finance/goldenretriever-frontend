import React from 'react'
import styled from 'styled-components'
import { ChevronDownIcon } from '@pancakeswap/uikit'
import BaseCell from './BaseCell'

interface ExpandActionCellProps {
  expanded: boolean
  isFullLayout: boolean
}

const StyledCell = styled(BaseCell)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-right: 12px;
  padding-left: 0px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
    padding-right: 32px;
    padding-left: 8px;
  }
`

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
  transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
  height: 24px;
  fill: rgba(255, 255, 255, 0.54);
`

const TotalStakedCell: React.FC<ExpandActionCellProps> = ({ expanded }) => {
  return (
    <StyledCell role="cell">
      <ArrowIcon color="primary" toggled={expanded} />
    </StyledCell>
  )
}

export default TotalStakedCell
