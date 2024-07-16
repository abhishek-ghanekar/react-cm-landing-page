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
    <div className='bg-[#fefff5] md:p-5'>

      <div className="bg-[#282828] md:rounded-xl ">
        <div className='grid-overlay md:rounded-xl'>

        <div className='yellow-layer md:rounded-xl'>
        <div className='dark-layer md:rounded-xl relative'>
          {/* <div className='bg-[#fefff5] w-32 h-20 absolute top-0 right-0 z-20 rounded-bl-xl z-0'>
            
          </div> */}
          <Navbar/>
          <Hero/>

        </div>
        </div>

        </div>
      </div>
    </div>
    <WorkWithUs/>
    <Services/>
    <SuccessStories/>
    <Footer/>
</>

  )
}

export default Home
