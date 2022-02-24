import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.jpg'
import theme from "styled-theming";
import left from './king.png'
import right from './right.png'
import { motion } from 'framer-motion'
import element from './element.png'
import { Button } from '../../components/Navbar/Navbar';
import frame from './Frame.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
    width: 100%;
  
    padding: 5rem 0;
    
    @media only screen and (max-width: 768px) {
        
        padding:  2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1600px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 90%;
      }
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled(motion.div)`
        width: 45%;
        height: 32rem;
        background-image: url(${left});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 1rem;
        @media only screen and (max-width: 1700px) {
            height: 35rem;
          }

          @media only screen and (max-width: 1100px) {
            width: 60%;
            margin-top: 5rem;
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
        }

    @media only screen and (max-width: 768px) {
     
        width: 85%;
        height: 20rem;
       
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        height: auto;
        background-image: url(${right});
        background-size: 100% 100%;
        background-repeat: no-repeat;

        padding: 5rem 3rem 1rem 5rem;


        @media only screen and (max-width: 1700px) {
            height: auto;
            padding: 3.5rem 3rem 1rem 5rem;
          }

          @media only screen and (max-width: 1400px) {
            padding: 3.5rem 2rem 1rem 3rem;
          }

          @media only screen and (max-width: 1100px) {
            width: 60%;
            
        }
        @media only screen and (max-width: 998px) {
            width: 85%;
           
        }

      @media only screen and (max-width: 768px) {
        width: 95%; 
        padding: 3.5rem 1rem 1rem 1.5rem;
      }
`;

export const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: left;
    font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

export const H = styled.h1`
    color: #e69500;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Ht = styled.h1`
    color: #e69500;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;


const Lower = styled.div`
      display: flex;
        justify-content: center;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
       margin-top: 5rem;

       background-color:  rgba(51, 51, 51, 1);
       padding: 2rem 1rem 1rem 1rem;
      //  width: 1300px;
      //  border-radius: 1rem;
      width: 100%;
`

const Page3a = () => {
  
    return (
        <Sec id="rarity">

            <Width>
                
            
                <Right>
                    <Ht>King Solomon is eons ahead of traditional NFTs, it is a groundbreaking innovation with unlimited power</Ht>
                    <T>Our project is set to explode soon so don’t wait until it reaches the moon! Be a part of early adopters with a game plan that will turn you into a millionaire! King Solomon offers a long list of benefits and unbelievable gains to its holders. Based on ethics of resilience, digital diversity and community appraisal, we’re leveraging the best parts of the DeFi universe while ditching its quirks altogether. So, be ready for an experience that reminisces of a ruler with conquests nobody can forget even today – we will make our impact with the same intensity.</T>
                    <T></T>
                    {/* <T>Get your Digital Avatar of Destruction and defeat your enemies to survive in a world with no place for the weak. Experience the most exciting vehicle combat king on the blockchain and play to earn amazing Crypto rewards.</T> */}
                    {/* <Image>
                        <img src={element} alt=""  style={{width:"100%",height:"100%"}}/>
                    </Image> */}
                </Right>

                <Left 
                    whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
                   
                />

            </Width>

            <Lower>
                <H style={{textAlign:"center"}}>Gain in on compelling rewards</H>
                <T style={{textAlign:"center",maxWidth:"1300px"}}>Never miss an update when you’re in the loop! King Solomon offers amazing royalty rewards to all holders from mint. You can also be eligible for one-to-one rewards through airdrops as the project reaches 50% sold! We’re eager to help our community increase financial sustainability just like a good ruler who works hard to reward his subjects!</T>
                
            </Lower>

        </Sec>
    )
}

export default Page3a





