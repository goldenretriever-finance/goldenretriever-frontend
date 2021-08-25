import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import CarouselItem from "./CarouselItem";


const Wrapper = styled.div`
  display: block;
  width: 100%;
  box-shadow: 0 0 20px 5px rgb(0 0 0 / 30%) inset;
  padding: 15px 0 40px;
  border-radius: 10px;
  overflow: hidden;
`

const items = [
  {
    imagePath: `/images/carousel01.png`,
    name: `GoldenRetriever`,
    symbol: `INU`,
    startTotalSupply: `8,000`,
    launchDate: `08/08/2021`,
    feature: `The Golden Retriever is a large dog. Gentle character with wisdom and loyalty, Golden Retrievers are loved by many.`,
    contactAddress: `0x3F8b51C9b9Fe2ed06f9A165db906f7946B4C08E2`
  },
  {
    imagePath: `/images/carousel02.png`,
    name: `Poseidon Retriever`,
    symbol: `RETPOSEIDON`,
    startTotalSupply: `6,000`,
    launchDate: `08/08/2021`,
    feature: `King of the sea. He is usually serious, but loves to talk with girls. His favorite food is fish, which he always catches and eats with his prized harpoon.`,
    contactAddress: `0x2a652ae0d27a86fd7b62375e9abe521534f6a9f5`
  },
  {
    imagePath: `/images/carousel03.png`,
    name: `Zeus Retriever`,
    symbol: `RETZEUS`,
    startTotalSupply: `3,000`,
    launchDate: `27/08/2021`,
    feature: `The main god and supreme deity of Greek mythologyIt's exciting to do anything. He is the supreme deity with both kindness and strength.`,
    contactAddress: `0xc8887fcec64ffc6996647819b342dc68a8266ba7`
  },
  {
    imagePath: `/images/carousel04.png`,
    name: `Aphrodite Retriever`,
    symbol: `RETAPHRODIT`,
    startTotalSupply: `6,000`,
    launchDate: `27/08/2021`,
    feature: `Goddess of love, beauty and sex. The best goddess. She was so beautiful that she was courted by all the gods.`,
    contactAddress: `0x8b5346865e60303fe0de622d9ae6b3778d93b334`
  },
  {
    imagePath: `/images/carousel05.png`,
    name: `Ares Retriever`,
    symbol: `RETARES`,
    startTotalSupply: `8,000`,
    launchDate: `27/08/2021`,
    feature: `He deified the frenzy and destruction during battle and was afraid as a raging god. He is a war god who fights bravely with a strong body.`,
    contactAddress: `0x7039124347445987b2e3f8ad3944dc2ad8d8f4b9`
  },
]

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }
  return (
    <Wrapper>
      <Slider {...settings}>
      {items.map((item) =>
        <CarouselItem {...item} />
      )}
      </Slider>
    </Wrapper>
  )
}

export default Carousel
