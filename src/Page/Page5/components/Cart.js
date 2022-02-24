import React, { useState }  from 'react'
import styled from 'styled-components'
import Tilt from 'react-parallax-tilt';
import theme from "styled-theming";
import { Rating } from 'react-simple-star-rating'
import { H,T } from '../../Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const StyledCart = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;  
    margin: 5rem 0;
    @media only screen and (max-width: 1440px) {
        justify-content: space-evenly; 
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (max-width: 768px) {
        padding: 0 0 0 4rem;
    }
`;

const Left = styled.div`
        height: 40rem;
        width: 35rem;
        margin-right: 1rem;

        @media only screen and (max-width: 1440px) {
            height: 35rem;
            width: 30rem;
            margin-right: 0rem;
        }
     
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 1rem;
      width: 50%;

      @media only screen and (max-width: 768px) {
        margin-left: 0rem;
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
    
`;

const Row = styled.div`
      display: flex;
`

const Button = styled.button`
      border: 2px solid #000000;
      width: 12rem;
      height: 3rem;
      font-size: 1.1rem;
      cursor: pointer;
`
const Details = styled.div``

const Cart = (props)=> {

    const [rating, setRating] = useState(0) 

    const handleRating = (rate) => {
        setRating(rate)
        // other logic
      }
    
    return (
        <StyledCart>
           
                <Left>
                    <img src={props.image ? props.image : 'https://mixtape.qodeinteractive.com/wp-content/uploads/2016/09/shop-img-5-635x675.jpg'} alt='' style={{width:'100%',height:'100%'}} />
                </Left>
                <Right>
                    <H style={{textAlign:'left'}}>{props.name ? props.name : 'Red California'}</H>
                    <Rating onClick={handleRating} ratingValue={rating}  />
                    <H style={{textAlign:'left'}}>{props.price ? props.price : '$45'}</H>
                    <T style={{textAlign:'left'}}>
                        {props.desc ? props.desc : 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas.'}
                    </T>
                    <Row style={{margin:'2rem 0'}}>
                        <Button type='button' style={{backgroundColor:'#000',color:'#FFF'}}>
                            add to cart
                        </Button>
                        <Button type='button'  style={{backgroundColor:'#fff',color:'#000'}}>
                            view cart
                        </Button>
                    </Row>
                    <Details>
                        <Row style={{margin:'1rem 0'}}><H style={{margin:'0'}}>SKU</H><T style={{margin:'0.3rem 0 0 2rem'}}>106</T></Row>
                        <Row style={{margin:'1rem 0'}}><H style={{margin:'0'}}>SKU</H><T style={{margin:'0.3rem 0 0 2rem'}}>106</T></Row>
                        <Row style={{margin:'1rem 0'}}><H style={{margin:'0'}}>SKU</H><T style={{margin:'0.3rem 0 0 2rem'}}>106</T></Row>
                    </Details>
                </Right>
            
        </StyledCart>
    )
}

export default Cart;
