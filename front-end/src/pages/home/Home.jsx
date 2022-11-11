import React from 'react'
import HomeBottom from './HomeBottom'
import HomeMiddle from './HomeMiddle'
import HomeTop from './HomeTop'
import HomeWork from './HomeWork'
import Homebottom2 from "./Homebottom2"
import HomeLower from './HomeLower'
import HomeLast from './HomeLast'
import Navbar from '../../componets/Navbar'
import Footer from '../../componets/Footer'
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeTop />
      <HomeWork />
      <HomeMiddle />
      <HomeBottom />
      <Homebottom2 />
      <HomeLower />
      <HomeLast />
      <Footer />
    </>
  )
}

export default Home