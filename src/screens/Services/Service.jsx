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
    <Navbar/>
    {/* hero section */}
    <ServicesHero/>
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
