import React from 'react'
import Navbar from '../../components/Navbar'
import CareerHero from './CareerHero/CareerHero'
import JobDescription from './JobDescription/JobDescription'
import WhyJoin from './WhyJoin/WhyJoin'
import Footer from '../../components/Footer/Footer'
import Openings from './Openings/Openings'

const Careers = () => {
  return (
    <>
    <div className='bg-white'>

    
    <div className='bg-[#282828]'>
      <Navbar/>

    </div>
    <CareerHero/>
    <JobDescription/>
    <WhyJoin/>
    <Openings/>
    <div className='w-full flex justify-center mb-4'>

    <div className='w-4/5 text-center'>
       <h1 className='text-[41px] font-bold'>Craft the future. Join the Mischief.</h1>
       <h1 className='text-[26px] font-bold'>Where passion meets code. Build something remarkable.
       </h1>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Careers
