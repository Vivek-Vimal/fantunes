import React from 'react'
import styled from 'styled-components'
// import { Link, animateScroll as scroll } from "react-scroll";
import { H,T } from '../../Page2/Page2'
import { BsCalendar2Check } from 'react-icons/bs'
import { smalldata } from '../../config/config'
import Card from '../../../components/card/Card'

const StyledRelatedProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0 0;
    width: 100%;
    @media only screen and (max-width: 768px) {
        padding: 0 0 0 4rem;
    }
`
const Width = styled.div`
      width: 1300px;
      display: flex;
        
        // align-items: center;
        flex-direction: column;
        justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        width: 95%;
      }
   
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  place-items: center;
  width: 100%;
`

const RelatedProduct = (props) => {
    return (
        <StyledRelatedProduct>
            <Width>
                <H style={{textAlign:'left'}}>Related Product</H>
                <Grid>
                    {smalldata?.map(e => (
                        
                        <Card sm img={e.img} name={e.name.toUpperCase()} desc={e.desc} bg={e.bg}/>
                        
                    ))}
                </Grid>
            </Width>
        </StyledRelatedProduct>
    )
}

export default RelatedProduct
