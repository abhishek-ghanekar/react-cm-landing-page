import React, { useRef } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar'
import ServicesHero from './ServicesHero/ServicesHero'
import UiHero from './UiHero/UiHero'
import SoftwareForStartups from './SoftwareForStartups/SoftwareForStartups'
import WebDevelopement from './WebDevelopement/WebDevelopement'
import EnterpriseSolutions from './EnterpriseSolutions/EnterpriseSolutions'

const Service = () => {
  const uiRef = useRef();
  const startupRef = useRef();
  const webRef = useRef();
  const enterpriseRef = useRef();

  return (
    <>
  <div className="bg-[#282828] ">
    <div className='grid-yellow-overlay'>
    <div className='dark-layer'>
      {/* <div className='yellow-services-layer'> */}

        <div className='md:p-5'>
          
        <Navbar/>

        <ServicesHero uiRef={uiRef} startupRef={startupRef} webRef={webRef} enterpriseRef={enterpriseRef}/>

        </div>
      {/* </div> */}
    </div>
    </div>
    <UiHero uiRef={uiRef}/>
    <SoftwareForStartups startupRef={startupRef}/>
    <WebDevelopement webRef={webRef}/>
    <EnterpriseSolutions enterpriseRef={enterpriseRef}/>
  </div>
  <Footer/>
</>

  )
}

export default Service
