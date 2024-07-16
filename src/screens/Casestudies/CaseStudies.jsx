import React from 'react'
import Navbar from '../../components/Navbar'
import CaseStudyListings from './CaseStudyListings'

const CaseStudies = () => {
  return (
    <div>
        <div className='bg-[#282828]'>
            <Navbar/>
        </div>
      <CaseStudyListings/>
    </div>
  )
}

export default CaseStudies
