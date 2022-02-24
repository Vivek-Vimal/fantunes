import React from 'react'
import styled from 'styled-components'
// import { Link, animateScroll as scroll } from "react-scroll";
import { H,T } from '../../Page2/Page2'
import { BsCalendar2Check } from 'react-icons/bs'

const StyledInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0 0;
    width: 100%;
`
const Width = styled.div`
      width: 1300px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        width: 95%;
      }
   
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 15rem;
    @media only screen and (max-width: 998px) {
        width: 12rem;
    }
    @media only screen and (max-width: 768px) {
        width: 9rem;
    }
`
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items:center;
    flex-direction: column;
    width: 50%;
    margin-right: 2rem;
    @media only screen and (max-width: 768px) {
        margin: 0;
        width: 100%;
    }
`

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    margin-left: 2rem;
    margin: 3rem 0 0 0 ;
    width: 50%;
    @media only screen and (max-width: 1000px) {
        width: 100%;
        justify-content: space-around;
    }
    @media only screen and (max-width: 768px) {
        justify-content: space-around;
        width: 100%;
    }
    @media only screen and (max-width: 560px) {
        flex-direction: column;

    }
`
const Link1 = styled.div`
    margin-right: 8rem  !important;
    width: 18rem;
    height: 6rem;
   cursor: pointer;
    @media only screen and (max-width: 998px) {
        margin-right: 6rem  !important;
        width: 16rem;
        height: auto;
    }
    @media only screen and (max-width: 768px) {
        margin-right: 3rem  !important;
        width: 10rem;
    }
    `

const Row  = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    width: 100%;
`
const Container = styled.div`
    // background: red;
`

const Info = (props) => {
    return (
        <StyledInfo>
            <Width>
            <Left>  
                <T style={{textAlign:'left'}}>Music Makers</T>
                <H style={{textAlign:'left'}}>
                About Artist

                </H>
                <T style={{textAlign:'left'}}>
                    {props.desc ? props.desc : 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihilerst erwvsa expetendis in mei. Meis an pericula euripidis,hinc partem eise est. Eos ei nisl graecis, vix aperiri consequat an. Eiuser lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis rest urbanies tas moderatius id. Vis ei rationibus.' }
                </T>
            </Left>

           

            <Right>
                <Container>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>
                    <Row>
                        <BsCalendar2Check style={{fontSize:'1.6rem'}}/>
                        <T style={{margin:'0 0 0 2rem'}}>
                        DOB: 02/10/1991
                        </T>
                    </Row>

                </Container>
               
            </Right>
            </Width>

           
        </StyledInfo>
    )
}

export default Info
