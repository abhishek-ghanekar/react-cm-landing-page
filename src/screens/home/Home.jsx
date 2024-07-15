import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero/Hero'
import WorkWithUs from './WorkWithUs/WorkWithUs'
import Services from './Services/Services'
import Footer from '../../components/Footer/Footer'
import SuccessStories from './SuccessStories/SuccessStories'

const Home = () => {
  return (
    <>
  <div className="bg-[#373737] grid-overlay">
    <Navbar/>
    <Hero/>
  </div>
    <WorkWithUs/>
    <Services/>
    <SuccessStories/>
    <Footer/>
</>

  )
}

export default Home
