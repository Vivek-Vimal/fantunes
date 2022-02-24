import React from 'react'
import {data} from '../config/config'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import theme from "styled-theming";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import bg from '../Page1/mainBg.jpg'
import { H,T } from '../Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display : flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 3rem 4%;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
   background-color: #e5e5e5;
   
   @media only screen and (max-width: 998px) {
    padding: 0 0 3rem 8%;
}
    @media only screen and (max-width: 768px) {
        min-height: auto;
        width: 100%;
        background-size: auto 100%;
        padding: 0 0 3rem 4.8rem;
    }
`;

const Width = styled.div`
      width: 1400px;
      display: flex;
        flex-direction: column;
        // align-items: center;
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


const resposive =  {
    600: {
        items: 1,
    },
    
    1000:{
        items: 2,
    },
    1200:{
        items: 3,
    },
    1600:{
        items: 4,
    },
    2400:{
        items: 6,
    }
  }

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-items: center;
  width: 100%;
`
const TextConatiner = styled.div`
    margin: 0 0 0 2rem;
   
`

const Page3 = () => {

    return (
        <Sec>

            <Width>

            {/* <AliceCarousel
                autoPlay={true}
                infinite={true}
                animationDuration={1468}
                disableButtonsControls={true}
                disableDotsControls={true}
                autoPlayStrategy={'none'}
                autoHeight={true}
                paddingLeft={60}
                responsive={resposive}
              
            > */}
            <TextConatiner >
                <T style={{textAlign:'left'}}>Madison Square Garden</T>
                <H style={{textAlign:'left'}}>Exclusive Merch</H>
            </TextConatiner>
            <Grid>


                    {data?.map(e => (
                        
                        <Card img={e.img} name={e.name.toUpperCase()} desc={e.desc} bg={e.bg}/>
                        
                    ))}

            </Grid>
            {/* </AliceCarousel> */}
            </Width>
        </Sec>
    )
}

export default Page3
