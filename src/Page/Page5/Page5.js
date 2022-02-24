import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from '../Page1/mainBg.jpg'
import theme from "styled-theming";
import { H,T } from '../Page2/Page2'
import Cart from './components/Cart';
import RelatedProduct from './components/RelatedProduct';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3rem  0 3rem 4%;
    background-color:  #ffffff;
    

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Width = styled.div`
      width: 1300px;
      display: flex;
      
        margin: 0 0 0 1%;
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        width: 95%;
        margin: 0 0 0 6%;
      }
   
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
     
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        height: auto;
        margin-left: 0;
      }
`;

const Head = styled.div`
    background-color: #e5e5e5;
    padding: 5rem 0;
    // display: flex;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;


const Page5 = () => {
  
    return (
        <Sec id="learn">
            <Head>
                <Width>
                    <div>
                        <T style={{textAlign:'left'}}> Mixtape/Red California </T>
                        <H style={{textAlign:'left'}}> Shop</H>
                    </div>
                </Width>
            </Head>
            <Width style={{flexDirection:'column'}}>
                <Cart />
                <RelatedProduct />
            </Width>
        </Sec>
    )
}

export default Page5
