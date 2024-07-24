import React from 'react'
import Navbar from '../../components/Navbar'
import CaseStudyListings from './CaseStudyListings'
import Footer from '../../components/Footer/Footer'

const CaseStudies = () => {
  return (
    <div className='bg-white'>
        <div className='bg-[#282828]'>
            <Navbar/>
        </div>
      <CaseStudyListings/>
      <Footer/>
    </div>
  )
}

export default CaseStudies
