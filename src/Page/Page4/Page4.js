import React from 'react'
import styled from 'styled-components'
import img from '../Page1/whaLe.png'
import { motion } from 'framer-motion'
import theme from 'styled-theming';
import { H, T } from '../Page2/Page2'
import bg from '../Page1/mainBg.jpg'
import Video from './video.mp4'
import Info from './components/Info';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  


const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem 5%;
    background-color: #000000;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    // background-size: 230px 230px;
    // background-image:  repeating-linear-gradient(to right, #5c5d62, #5c5d62 2px, #ffffff 2px, #ffffff);
    
    flex-direction: column;

    @media only screen and (max-width: 1300px) {
      padding: 0 0 3rem 7%;
    }

    @media only screen and (max-width: 998px) {
        min-height: 100vh;
        width: 100%;
        padding: 0 0 3rem 5rem;
        flex-direction: column;
        background-size: auto 100%;
      }
      @media only screen and (max-width: 768px) {
       
        background-size: auto 100%;
      }
`;


const StyleCard = styled.div`
      width: 1600px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
      @media only screen and (max-width: 1500px) {
        width: 95%;
        justify-content: space-between;
      }
      @media only screen and (max-width: 998px) {
        width: 95%;
        justify-content: center;
        flex-direction column;
      
      }
`
const Width = styled.div`
      width: 1300px;
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        width: 95%;
      }
   
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`
const VideoBox = styled.div`
    display: flex;
    padding-top: 5vw;
    padding-right: 5vw;
    padding-left: 5vw;
    width: 100%;
    height: 40rem;
    margin: 3rem 0 0 0;
    border-radius: 24px;
    position: relative;
    background-image: linear-gradient(
    135deg,#ed407e 10%,#8e42c9 60%,#5d7ce5);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const Page4 = () => {
  
    return (
        <Sec id="core">
          <Width>
            {/* <H>Factions</H> */}
{/* 
            <StyleCard>

                {FactionData?.map(e => (
                        
                    <FactionCard img={e.img} name={e.name} desc={e.desc}/>
                        
                ))} */}

            <VideoBox>
                <video autoPlay loop muted className="video" style={{height:"100%",width:"100%"}}>
                    <source src={Video} type="video/mp4"/>
                </video>
            </VideoBox>

            {/* </StyleCard> */}

            <Info />
          
            </Width>

        </Sec>
    )
}

export default Page4
