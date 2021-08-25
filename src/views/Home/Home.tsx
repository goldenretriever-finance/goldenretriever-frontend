import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import StatusArea from './components/StatusArea'

const AnimeBg = styled.div`
  @keyframes bgiLoop {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 1440px 0px;
    }
  }

  background-image: url('/images/city.png');
  animation: bgiLoop 20s linear infinite;
  background-repeat: repeat-x;
  background-position: top;
`

const Container = styled.div`
  max-width: 1080px;
  width: 84%;
  margin: 0 auto;
  padding: 62px 0;

  .flex {
    display: block;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .text_l {
    font-size: 20px;
    color: #aebfeb;
  }

  .mt50 {
    margin-top: 50px;
  }

  .image_w50 {
    width: 50%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    .flex {
      display: flex;
    }
  }
}
`

const HomeMv = styled.div`
  margin-top: 80px;

  div.sns_links {
    margin-top: 20px;
  }

  a.sns_link {
    width: 48px;
    display: inline-block;
    margin-right: 10px;
  }

  div.left_area{
    position: relative;
    z-index: 1;
  }

  div.right_area{
    width: 68%;
    margin-left: 36%;
    margin-top: -23vw;
    position: relative;
    z-index: 0;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    div.right_area {
      width: auto;
    margin-left: 0%;
    margin-top: 0vw;
    }
  }
`

const HomeCarousel = styled.div`
  margin-top: 80px;
  padding-bottom: 15px;
  overflow-x: scroll;

  div.carouselwrap {
    display: block;
    width: 500px;

    ${({ theme }) => theme.mediaQueries.sm} {
      display: flex;
      justify-content: center;
      align-items : flex-start;
      width: 100%;
    }
  }

  div.slide {
    width: 230px;
    margin: 0 10px 0 0;
    padding: 15px 20px;
    background: rgba(0, 0, 0, 0.33);
    box-shadow: rgb(7 0 27 / 40%) 0px 0px 16px;
    display: inline-block;
    vertical-align: top;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 260px;
      margin: 0 10px 0 10px;
      display: block;
      padding: 15px 25px;
    }
  }

  div.image{
    width: 100%;
    margin-bottom: 10px;
  }

  div.text{
    font-size: 13px;
    margin-bottom: 10px;
    line-height: 1.6;

     > span {
      font-weight: bold;
      margin-top: 7px;
      color: #ffeb3b;
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      > span {
        display: inline;
      }
    }
  }

  div.address{
    font-size: 13px;
    line-height: 1.5;
    font-weight: bold;
    background: #000;
    padding: 2px 10px 6px;
    border-radius: 4px;
    border: 1px solid #aaa;

     > span {
      font-size: 14px;
      display: block;
      color: #ffeb3b;
    }
  }

  div.addresstxt{
    word-break: break-all;
    line-height: 1.2;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    overflow-x: auto;
  }
`


const HomeContent = styled.div`
  h2 {
    font-size: 34px;
    margin-top: 100px;
    margin-bottom: 24px;
    line-height: 1.1;
    text-align: center;

    ${({ theme }) => theme.mediaQueries.sm} {
      text-align: left;
      }
  }

  h2 .line {
    display: block;
    width: 112px;
    height: 3px;
    border-radius: 2px;
    background: rgb(152, 30, 88);
    background: linear-gradient(90deg, rgba(152, 30, 88, 1) 0%, rgba(9, 71, 231, 1) 100%);
    margin: 0 auto 30px;

    ${({ theme }) => theme.mediaQueries.sm} {
      margin: 0 0 30px;
      }
  }

  h2 .mrauto {
    margin: 0 auto 30px;
    display: block;
  }

  .txt_center {
    text-align: center;
  }
`

const Section1 = styled.div``

const Section2 = styled.div`
  background-image: url('/images/homecommunity.png');
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 0px;
  padding-top: 1vw;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 50px;
    padding-top: 0vw;
  }
}

.txt_left {
  text-align: center;
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
   }
}

  .txtbox {
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 50%;
    }
  }
  }
`

const Section3 = styled.div`
  background-image: url('/images/homeequal.png');
  background-repeat: no-repeat;
  background-size: 59%;
  padding-bottom: 0px;
  padding-top: 1vw;
  background-position: top center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 50px;
    padding-top: 0vw;
    background:none;
   }
  }
  .txt_right {
    text-align: right;
  }

  .txtbox {
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 50%;
    }
  }
  }
  img {
    max-height: 375px;
    margin: 0 auto;
    display: none;
    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
   }
  }
`

const Section4 = styled.div`
  background-image: url('/images/homesque.png');
  background-repeat: no-repeat;
  background-size: 59%;
  padding-bottom: 0px;
  padding-top: 26vw;
  background-position: top center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 50px;
    padding-top: 0vw;
    background:none;
   }
  }
  .txt_left {
    text-align: center;
    ${({ theme }) => theme.mediaQueries.sm} {
      text-align: left;
     }
  }

  .txtbox {
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
      width: 50%;
    }
  }
  }

  img {
    max-height: 350px;
    display: none;
    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
   }
  }
`

const SlipPage = styled.div`
  width: 90%;
  margin: 80px auto;
  display: block;
  line-height: 50px;
  color: #ffffff;
  background-color: #000000;
  border: double 2px transparent;
  border-radius: 5px;
  background-image: linear-gradient(#000000, #000000), linear-gradient(135deg, #0947e7, #cf00f0);
  background-origin: border-box;
  background-clip: content-box, border-box;

  .title {
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    padding: 14px 20px;
  }

  .contract {
    background: rgb(152, 30, 88);
    background: linear-gradient(90deg, rgba(152, 30, 88, 1) 0%, rgba(9, 71, 231, 1) 100%);
    font-weight: 600;
    line-height: 1.4;
    padding: 14px 20px;

    span{
      padding: 0 10px;
      display: block;

      ${({ theme }) => theme.mediaQueries.sm} {
        display: inline;
      }
     }
    }
  }
`

const Profile = styled.div`
  width: 80%;
  margin: 0 auto;
  display: block;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 90%;
  }

  .line {
    margin: 0 auto;
  }

  .profimage {
    width: 100%;
    margin: 0 auto 30px;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 50%;
      margin: 0 0 0px;
    }
   }

    img {
      margin: 0 auto;
      display: block;
      width: 50%;
    }
  }

  .txtbox {
    width: 100%;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 50%;
    }
   }

  li {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    line-height: 1.4;
    margin-top: 12px;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 100%;
    }

    .caption {
      flex: 0 0 100px;
      margin-right: 20px;
      font-weight: bold;
    }

    .text_m {
    }
  }
`

const Member = styled.div`
  width: 80%;
  margin: 0 auto;
  display: block;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 90%;
  }

  .line {
    margin: 0 auto;
  }

  .flex {
    margin-bottom: 30px;
  }

  .spflex{
    display: flex;

    ${({ theme }) => theme.mediaQueries.sm} {
      display: flex;
    }
   }

  .memberimage {
    width: 53%;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 20%;
    }
    img {
      width: 80%;
    }
   }

  .txtbox {
    width: 80%;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: block;
        flex-wrap: nowrap;
        justify-content: flex-start;
        line-height: 1.8;

        ${({ theme }) => theme.mediaQueries.sm} {
          display: flex;
        }
       }

        .caption {
          flex: 0 0 100px;
          margin-right: 20px;
          font-weight: bold;
          display: block;
          margin-top: 14px;
        
        ${({ theme }) => theme.mediaQueries.sm} {
          display: initial;
          margin-top: 0px;
          
        }
       }

        .text_m {
          font-size: 14px;
        }
      }
    }
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Page>
      <AnimeBg>
        <Container>
          <HomeMv className="flex">
            <div className="left_area">
              <div className="title mt50">
                <img src="/images/well.png" alt="Golden retriever finance" />
              </div>
              <div className="text_l">
                {t('The Golden retriever platform is a community-supported platform. People all over the world will love Golden Retriever!')}
              </div>
              <div className="sns_links">
                <a href="https://t.me/joinchat/o98mgf0Nqdg5ZGZl" className="sns_link" target="_blank" rel="noreferrer">
                  <img src="/images/telegram.png" alt="telegram" />
                </a>
                <a href="https://twitter.com/retrievercoin" className="sns_link" target="_blank" rel="noreferrer">
                  <img src="/images/twitter.png" alt="telegram" />
                </a>
                <a href="https://line.me/ti/g2/X-HO6r5raOkKZwDSPv3lEg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" className="sns_link" target="_blank" rel="noreferrer">
                  <img src="/images/line.png" alt="telegram" />
                </a>
                <a href="https://open.kakao.com/o/g1c27qqd" className="sns_link" target="_blank" rel="noreferrer">
                  <img src="/images/kakao.png" alt="telegram" />
                </a>
              </div>
            </div>
            <div className="right_area">
              <div className="dogimage">
                <img src="/images/jump.png" alt="Golden retriever" />
              </div>
            </div>
          </HomeMv>
          <StatusArea />
          <HomeCarousel>
            <div className="carouselwrap">
               <div className="slide">
                 <div className="image">
                   <img src="/images/carousel01.png" alt="GoldenRetriever" />
                 </div>
                 <div className="text">
                   <span>
                   Name： 
                   </span>
                   GoldenRetriever
                 <br />
                   <span>
                   Symbol：
                   </span>
                   INU
                 <br />
                   <span>
                   Start Total Supply：
                   </span>
                   8,000
                 <br />
                   <span>
                   Launch date：
                   </span>
                   08/08/2021
                 <br />
                   <span>
                   Feature：
                   </span>
                 <br />
                   The Golden Retriever is a large dog. Gentle character with wisdom and loyalty, Golden Retrievers are loved by many.
                 </div>
                 <div className="address">
                   <span>
                   Contract address
                   </span>
                   <div className="addresstxt">0x3F8b51C9b9Fe2ed06f9A165db906f7946B4C08E2</div>
                 </div>
               </div>
               <div className="slide">
                 <div className="image">
                   <img src="/images/carousel02.png" alt="Poseidon" />
                 </div>
                 <div className="text">
                   <span>
                   Name： 
                   </span>
                   Poseidon Retriever
                 <br />
                   <span>
                   Symbol：
                   </span>
                   RETPOSEIDON
                 <br />
                   <span>
                   Total Supply：
                   </span>
                   6,000
                 <br />
                   <span>
                   Launch date：
                   </span>
                   08/08/2021
                 <br />
                   <span>
                   Feature：
                   </span>
                 <br />
                 King of the sea. He is usually serious, but loves to talk with girls. His favorite food is fish, which he always catches and eats with his prized harpoon.
                 </div>
                 <div className="address">
                   <span>
                   Contract address
                   </span>
                   <div className="addresstxt">0x2a652ae0d27a86fd7b62375e9abe521534f6a9f5</div>
                 </div>
               </div>
            </div>
          </HomeCarousel>
          <HomeContent>
            <Section1 className="mt50">
              <h2 className="txt_center">
                <span className="line mrauto" />
                {t('What is Golden Retriever finance?')}
              </h2>
              <div className="image">
                <img src="/images/what.png" alt="Golden retriever finance" />
              </div>
              <div className="text_l">
                {t('Golden Retriever finance aims to build a Golden Retriever ecosystem. Golden Retriever finance will launch new tokens every month to build an ecosystem. Like the Golden Retriever, the tokens will all have very little supply. This can increase the value of the Golden Retriever and create scarcity for new Tokens. And above all, many users will be confident that Golden Retriever finance is a reliable project.')}
              </div>
            </Section1>
            <Section2 className="mt50">
              <div className="flex">
                <div className="image_w50" />
                <div className="txtbox">
                  <h2 className="txt_left">
                    <span className="line" />
                    100%
                    <br />
                    community
                    <br />
                    platform
                  </h2>
                  <div className="text_l">
                    {t('Golden Retriever finance is a 100% community supported platform. Many users trade, purchase and offer liquidity at Golden Retriever finance Our mission is to create a huge community platform.')}
                  </div>
                </div>
              </div>
            </Section2>
            <Section3 className="mt50">
              <div className="flex">
                <div className="txtbox">
                  <h2 className="txt_left">
                    <span className="line" />
                    Always equal
                  </h2>
                  <div className="text_l">
                    {t('Golden Retriever did not conduct any ICO or pre-sale. It is a coin that everyone can have equally from the beginning.')}
                  </div>
                </div>
                <div className="image_w50">
                  <img src="/images/homeequal.png" alt="Golden retriever finance" />
                </div>
              </div>
            </Section3>
            <Section4 className="mt50">
              <div className="flex">
                <div className="image_w50">
                  <img src="/images/homesque.png" alt="Golden retriever finance" />
                </div>
                <div className="txtbox">
                  <h2 className="txt_left">
                    <span className="line" />
                    Schedule
                  </h2>
                  <div className="text_l">
                    {t('The initial circulating supply is 8,000 coins. Swap will be available at SGT 8 AM on August 8, 2021. The farm will open on August 8, 2021.')}
                  </div>
                </div>
              </div>
            </Section4>
            <SlipPage className="txt_center">
              <div className="title">{t('We recommend using 12％～16％ slippage')}</div>
              <div className="contract bold">
                <span className="pr20">Golden retriever Contract</span>0x3F8b51C9b9Fe2ed06f9A165db906f7946B4C08E2
              </div>
            </SlipPage>
            <Profile>
              <h2 className="txt_center">
                <span className="line mrauto" />
                Golden Retriever
              </h2>
              <div className="flex">
                <div className="profimage">
                  <img className="mrauto" src="/images/dog.png" alt="Golden retriever finance" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Name')}</span>
                      <span className="text_m">Golden retriever</span>
                    </li>
                    <li>
                      <span className="caption">{t('Age')}</span>
                      <span className="text_m">{t('1 year old')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Features')}</span>
                      <span className="text_m">
                        {t('The Golden Retriever is a large dog. Gentle character with wisdom and loyalty, Golden Retrievers are loved by many.')}
                      </span>
                    </li>
                    <li>
                      <span className="caption">{t('Dream')}</span>
                      <span className="text_m">{t('I want fans all over the world to have fun playing in the dog park')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Comment')}</span>
                      <span className="text_m">
                        {t('A gentle dog who loves and is loved by many. I like being loved by many people. Love and peace!')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Profile>
            <Member>
              <h2 className="txt_center">
                <span className="line mrauto" />
                Project member
              </h2>
              <div className="flex spflex">
                <div className="memberimage">
                  <img src="/images/dog1.png" alt="Engineer / Leader dog" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Playground')}</span>
                      <span className="text_m">Plex</span>
                    </li>
                    <li>
                      <span className="caption">{t('Role')}</span>
                      <span className="text_m">{t('Engineer / Leader dog')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Personality')}</span>
                      <span className="text_m">
                        {t('A leader dog who has wisdom and loyalty, and is loved by everyone for his curiosity and mild personality.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex spflex">
                <div className="memberimage">
                  <img src="/images/dog2.png" alt="Engineer dog" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Playground')}</span>
                      <span className="text_m">Plex</span>
                    </li>
                    <li>
                      <span className="caption">{t('Role')}</span>
                      <span className="text_m">{t('Engineer dog')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Personality')}</span>
                      <span className="text_m">
                        Hates communicating with people. Enjoys loneliness and the only person he talks to is the leader
                        dog. Loves Coca-Cola and games.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex spflex">
                <div className="memberimage">
                  <img src="/images/dog3.png" alt="Designer dog" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Playground')}</span>
                      <span className="text_m">Plex</span>
                    </li>
                    <li>
                      <span className="caption">{t('Role')}</span>
                      <span className="text_m">{t('Designer dog')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Personality')}</span>
                      <span className="text_m">
                        {t('His design is so eccentric that his boss always asks him to start over. “Someday I’ll surpass Picasso!”, says the over ambitious dog all the time.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex spflex">
                <div className="memberimage">
                  <img src="/images/dog4.png" alt="Marketing dog" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Playground')}</span>
                      <span className="text_m">Plex</span>
                    </li>
                    <li>
                      <span className="caption">{t('Role')}</span>
                      <span className="text_m">{t('Marketing dog')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Personality')}</span>
                      <span className="text_m">
                        {t('A cheerful, curious and active dog. Talkative at heart and gets nagging from his boss at least once a day.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex spflex">
                <div className="memberimage">
                  <img src="/images/dog5.png" alt="Large and gentle" />
                </div>
                <div className="txtbox">
                  <ul>
                    <li>
                      <span className="caption">{t('Playground')}</span>
                      <span className="text_m">California</span>
                    </li>
                    <li>
                      <span className="caption">{t('Role')}</span>
                      <span className="text_m">{t('Drinking coffee with the leader dog. Large and gentle.')}</span>
                    </li>
                    <li>
                      <span className="caption">{t('Personality')}</span>
                      <span className="text_m">
                        {t('Dog that devoted his life to making movies. Loves movies so much he can talk about them 24 hours a day. A good mentor of leader dog, he will help you immediately if you have a problem.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Member>
          </HomeContent>
        </Container>
      </AnimeBg>
    </Page>
  )
}

export default Home
