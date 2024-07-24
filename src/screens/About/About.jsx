import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutHero from './AboutHero/AboutHero'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import CoreValues from './CoreValues/CoreValues'
import MeetTheTeam from './MeetTheTeam/MeetTheTeam'
import FadeUpBounce from '../../animations/FadeUpBounce'

const About = () => {
  return (
    <>
    <div className='bg-white'>


  <div className='md:p-5'>
    <div className="bg-[#282828] md:rounded-xl">
      <Navbar/>
      <AboutHero/>
    </div>
  </div>
  <FadeUpBounce>

  <WhyChooseUs/>
  </FadeUpBounce>
  <FadeUpBounce>

  <CoreValues/>
  </FadeUpBounce>
  <FadeUpBounce>

  <MeetTheTeam/>
  </FadeUpBounce>
  <Footer/>
    </div>
</>

  )
}

export default About
