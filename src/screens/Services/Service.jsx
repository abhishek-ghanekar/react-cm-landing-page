import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar'
import ServicesHero from './ServicesHero/ServicesHero'
import UiHero from './UiHero/UiHero'
import SoftwareForStartups from './SoftwareForStartups/SoftwareForStartups'
import WebDevelopement from './WebDevelopement/WebDevelopement'
import EnterpriseSolutions from './EnterpriseSolutions/EnterpriseSolutions'

const Service = () => {
  return (
    <>
  <div className="bg-[#282828] ">
    <div className='grid-yellow-overlay'>
    <div className='dark-layer'>
      {/* <div className='yellow-services-layer'> */}

        <div className='md:p-5'>
          
        <Navbar/>

        <ServicesHero/>

        </div>
      {/* </div> */}
    </div>
    </div>
    <UiHero/>
    <SoftwareForStartups/>
    <WebDevelopement/>
    <EnterpriseSolutions/>
  </div>
  <Footer/>
</>

  )
}

export default Service
