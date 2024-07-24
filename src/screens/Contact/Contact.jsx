import React from 'react'
import Navbar from '../../components/Navbar'
import ContactHero from './ContactHero/ContactHero'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <div className='bg-white'>

  <div className="bg-[#282828] ">
    <Navbar/>
  </div>
  <ContactHero/>
  <Footer/>
    </div>
</>

  )
}

export default Contact
