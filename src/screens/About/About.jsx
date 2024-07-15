import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutHero from './AboutHero/AboutHero'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import CoreValues from './CoreValues/CoreValues'
import MeetTheTeam from './MeetTheTeam/MeetTheTeam'

const About = () => {
  return (
    <>
  <div className="bg-[#282828]">
    <Navbar/>
    <AboutHero/>
  </div>
  <WhyChooseUs/>
  <CoreValues/>
  <MeetTheTeam/>
  <Footer/>
</>

  )
}

export default About
