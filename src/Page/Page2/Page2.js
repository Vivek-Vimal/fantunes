import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from '../Page1/mainBg.jpg'
import theme from "styled-theming";
import left from './circle.png'
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
    width: 100%;
  
    background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
 background-color: #e5e5e5;


    @media only screen and (max-width: 1140px) {
      padding: 0 0 0 4rem;
      
    }
    @media only screen and (max-width: 768px) {
      padding: 0 0 0 5rem;
      background-size: auto 100%;
    }
    @media only screen and (max-width: 520px) {
      padding: 0 0 0 5rem;
    }
    @media only screen and (max-width: 460px) {
      padding: 0 0 0 6rem;
    }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;

        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        width: 95%;
      }

    @media only screen and (max-width: 1140px) {
        flex-direction: column-reverse;
    }

`

const Left = styled(motion.div)`
        width: 35rem;
        height: 33rem;
        background-image: url(${left});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 1rem;

        @media only screen and (max-width: 1300px) {
            width: 30rem;
            height: 28rem;
        }
       

    @media only screen and (max-width: 768px) {

        width: 22rem;
        height: 20rem;

      }
    @media only screen and (max-width: 460px) {
        width: 16rem;
        height: 15rem;
      }
`;

const Right = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 40rem;
        height: 45rem;
  


        @media only screen and (max-width: 1700px) {
            height: auto;
            padding: 3.5rem 3rem 2rem 5rem;
          }

          @media only screen and (max-width: 1400px) {
            padding: 3.5rem 2rem 1rem 3rem;
          }

          @media only screen and (max-width: 1100px) {
            width: 60%;
            margin-top: 5rem;
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
color: #8a8a8a;
 font-size: 18px;
  line-height: 28px;
   font-weight: 500;
   text-align: right;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;

      }
`;

export const H = styled.h2`
color: #000;
font-weight: 600;
    margin: 1rem 0 2rem 0;
    text-align: right;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;



const Page2 = () => {

    return (
        <Sec id="rarity">

            <Width>

              <Right>
                  <T>New Album</T>
                    <H>Album Showcase – Mixtape</H>
                    <T>Alienum phaedrum torquatos nec eu, vis detraxit ertssa periculiser ex, nihil expetendis in mei. Meis an pericula es euripidis, hinces partem ei est. Eos ei nisl graecis, vixenss eu qui purto zril laoreet.</T>
                </Right>

                <Left
                     whileHover={{ scale: 1.1,boxShadow:"0 0 25px #e5e5e5"}}
                />

            </Width>


        </Sec>
    )
}

export default Page2





