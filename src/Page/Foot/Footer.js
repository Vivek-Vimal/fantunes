import React from 'react'
import styled from 'styled-components'
import './Footer.css'
// import { Link, animateScroll as scroll } from "react-scroll";
import { H,T } from '../Page2/Page2'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
   background-color: #000000;
   padding: 4rem 0 4rem 5%;

`
const Width = styled.div`
    //   width: 1300px;

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
const Row  = styled.div`
    display: flex;
    text-align : center;

`
const Heading = styled(H)`
    margin: 0;
    font-size: 3rem;
    font-weight: bolder;
    margin: 0 0  1rem 0;
`
const Text = styled(T)`
    margin: 0 0 1rem 0;
`

const Footer = () => {
    return (
        <StyledFooter >
            <Width>
                <Heading style={{color:'#FFFFFF'}}>Title</Heading>
                <Text style={{color:'#FFFFFF'}}>@2022 Qode Interactive. All rights reserved</Text>
                <Text style={{color:'#FFFFFF'}}>+387 64 8459 254 68 mixtape@qodeinteractive.com</Text>
                <Row>
                    <FaTelegramPlane style={{color:'#909090',fontSize:'2rem'}}/>
                    <BsTwitter style={{color:'rgb(138, 138, 138)',fontSize:'2rem',margin:'0 0 0 1rem'}}/>
                    <FaFacebookF style={{color:'rgb(138, 138, 138)',fontSize:'2rem',margin:'0 1rem'}}/>
                    <BsWhatsapp style={{color:'rgb(138, 138, 138)',fontSize:'2rem'}}/>
                </Row>
            </Width>
        </StyledFooter>
    )
}

export default Footer
