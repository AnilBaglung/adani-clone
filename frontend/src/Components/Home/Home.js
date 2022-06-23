import React from 'react'
import Chairman from './Chairman/Chairman'
import Covid from './Covid/Covid'
import Explore from './Explore/Explore'
import Footer from './Footer/Footer'
import Group from './Group/Group'
import Growth from './Growth/Growth'
import Liinks from './Liinks/Links'
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Value from './Value/Value'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Main/>
        <Covid/>
        <Growth/>
        <Explore/>
        <Chairman/>
        <Value/>
        <Group/>
        <Liinks/>
        <Footer/>
    </>
  )
}

export default Home