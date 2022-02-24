import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Bg.css'
 import bg from './mainBg.jpg'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from "react-redux";
import { BsBoxArrowUp } from 'react-icons/bs';
// import { Link, animateScroll as scroll } from "react-scroll";
import Head from './head.png'
import Tilt from 'react-parallax-tilt'

const HomePage = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  width: 100%;
  padding: 0 0 0 4%;
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
 background-color: #e5e5e5;

@media only screen and (max-width: 1024px){
  padding: 0 0 0 5%;
}

@media only screen and (max-width: 768px) {
    
    width: 100%;
    padding: 0 0 0 8%;
    background-size: auto 100%;
    flex-direction: column;
}
@media only screen and (max-width: 510px) {
 
  width: 100%;
  padding: 0 0 0 4.5rem;
  
  flex-direction: column;
}

`


const Center = styled(Tilt)`
        width: 42rem,;
        height: 42rem;
        z-index: 2;
        border-radius: 1rem;
        opacity: 1 !important;
        @media only screen and (max-width: 1300px) {
      
          width: 35rem,;
          height: 35rem;
      }
      @media only screen and (max-width: 1000px) {
        width: 29rem,;
        height: 29rem;
         
      }
      @media only screen and (max-width: 800px) {
        width: 23rem,;
        height: 23rem;
      }
      @media only screen and (max-width: 600px) {
        width: 98%rem,;
        height: 18rem;
      }
`;

const ShowButton = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: #505050; // 
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;  {/* <img src={Head} alt='' style={{width:'100%',height:'100%'}} />
    bottom: 10rem;
    display: grid;
    place-items: center;
    z-index: 7;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`

const Home = () => {

    // const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    // const dispatch = useDispatch();
    
    // const [ showButton, setShowButton ] = useState(false)

    // const showButtonTop = () => {
    //   // console.log(window.scrollY)
    //   if (window.scrollY >= 600) {
    //     setShowButton(true)
    //   } else {
    //     setShowButton(false)
    //   }
    // }
  
    // useEffect(() => {
    //   showButtonTop()
    //   // adding the event when scroll change background
    //   window.addEventListener("scroll", showButtonTop)
    // },[])  


    return (
        <HomePage id="home">

          {/* <video autoPlay loop muted className="video">
            <source src={videobg} type="video/mp4"/>
          </video>
 */}

          <motion.div
            initial={{ x: 0, y:0}}
            animate={{ x: 0, y: -20 }}
            transition={{ duration: 1, repeat: Infinity ,repeatType: "reverse",}}
          >
            <Center>
               {/* <H style={{textAlign:"center",color:"#FFC000"}}>King Solomon – The new royal NFT you should be thinking about</H>
               <T
                style={{textAlign:"center",fontWeight:"bolder"}}
               >
               As the NFT boom continues to skyrocket, investors and traders are finding it harder to set their eyes on viable tokens. Among the crowd and under the spotlight, King Solomon shines bright with robust capabilities and technological infrastructure backing it up. We've got a treasure trove of benefits waiting to be realized by an emerging community that recognizes worthy rewards beyond the gimmicks.
               </T> */}
               <img src={Head} alt='' style={{width:'100%',height:'100%'}} />
            </Center>
          </motion.div>

            {/* <ModeButton
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
                checked={darkThemeEnabled}
                size={80}
            /> */}

          {/* { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          } */}
            
            
        </HomePage>
    )
}

export default Home

