import React from 'react'
import styled from 'styled-components'
import bg from './bg.png'
import { Button } from '../../components/Navbar/Navbar';
import { H,T } from '../Page2/Page2'

const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
        padding: 2rem 0;
        background-size: auto 100%;
      }
`;

const Ts = styled(T)`

`
const Center = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1300px;
    background-color: rgba(0,0,0,0.7);
    padding: 2rem;
    border-radius: 1rem;

  @media only screen and (max-width: 1400px) {
      width: 96%;
     
  }
  @media only screen and (max-width: 1000px) {
      width: 99%;
     
  }
  @media only screen and (max-width: 800px) {
      width: 99%;
    
  }
  @media only screen and (max-width: 600px) {
      width: 99%;
      
  }
`

const Page2 = () => {
  
    return (
        <Sec id="garage">

        <Center>
          <H style={{color:"#FFC000",fontWeight:"bolder"}}>Contact Us</H>
          <T style={{color:"#FFC000",fontWeight:"bolder"}}>Dabble in our metaverse of queries and let us provide the answers you seek!</T>
          <Ts>
            Is King Solomon worth minting? Will you actually get anything out of your investment? Where will this NFT be in the coming two years? Are all these questions keeping you up at night? Don’t worry and contact us immediately. We’re always eager to strike a conversation with potential investors! Simply send a message to xxx or call us directly on xxx and we’ll get back to you as soon as possible.
          </Ts>
          <Button
            type="button"
            whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
            whileTap={{ scale: 0.7 }}
          >Join Our Discord</Button>
        </Center>

        </Sec>
    )
}

export default Page2
