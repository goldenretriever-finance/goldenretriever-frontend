import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'

const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`

const SwapCard = () => {
  const Homebtns = styled.div`
    background-color: green;
  `

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            Exchange
          </Heading>
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg">
              Exchange tokens
            </Heading>
            <Homebtns>
              <div>Swap</div>
            </Homebtns>
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default SwapCard
