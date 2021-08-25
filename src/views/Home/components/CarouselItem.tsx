import React from "react";
import styled from "styled-components";


const Slide = styled.div`
  margin: 0 10px 0 0;
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.33);
  box-shadow: rgb(7 0 27 / 40%) 0 0 16px;
  vertical-align: top;
`

const Image = styled.div`
  width: 100%;
  margin-bottom: 10px;
`

const ProfileText = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
  line-height: 1.6;
  span {
    font-weight: bold;
    margin-top: 7px;
    color: #ffeb3b;
  }
`

const Address = styled.div`
  font-size: 13px;
  line-height: 1.5;
  font-weight: bold;
  background: #000;
  padding: 2px 10px 6px;
  border-radius: 4px;
  border: 1px solid #aaa;
  span {
    font-size: 14px;
    display: block;
    color: #ffeb3b;
  }
  .text {
    word-break: break-all;
    line-height: 1.2;
    user-select:auto;
  }
`

interface Props {
  imagePath: string
  name: string
  symbol: string
  startTotalSupply: string
  launchDate: string
  feature: string
  contactAddress: string
}

const CarouselItem: React.FC<Props> = ({
  imagePath,
  name,
  symbol,
  startTotalSupply,
  launchDate,
  feature,
  contactAddress
}) => {
  return (
    <Slide>
      <div>
        <Image>
          <img src={imagePath} alt={name} />
        </Image>
        <ProfileText>
          <span>Name:</span>{name}<br />
          <span>Symbol:</span>{symbol}<br />
          <span>Start Total Supply:</span>{startTotalSupply}<br />
          <span>Launch date:</span>{launchDate}<br />
          <span>Feature:</span><br />
          {feature}
        </ProfileText>
        <Address>
          <span>Contract address</span>
          <div className="text">{contactAddress}</div>
        </Address>
      </div>
    </Slide>
  )
}

export default CarouselItem
