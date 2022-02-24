import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Page/Page1/Home'
import Page2 from './Page/Page2/Page2'
import Page3 from './Page/Page3/Page3'
import Page3a from './Page/Page3a/Page3a'
import Page4 from './Page/Page4/Page4'
import Page5 from './Page/Page5/Page5'
import Page6 from './Page/Page6/Page6'
import Page6a from './Page/Page6a/Page6a'
import Page6b from './Page/Page6b/Page6b'
import Page7 from './Page/Page7/Page7'
import Footer from './Page/Foot/Footer'
import Header from './components/Sidebar/Header'

const App = () => {

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Page2 />
      <Page3 />
      {/* <Page3a />  X */}
      <Page4 />
      <Page5 />
      {/* <Page6 />  X
      <Page6a /> X
      <Page6b /> X
      <Page7 /> X */}
      <Footer />
   </>
  )
}

export default App
