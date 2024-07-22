import React from 'react'
import Navbar from "../../components/Navbar"
import FirstStep from './FirstStep/FirstStep'
import SecondStep from './SecondStep/SecondStep'
import ThirdStep from './ThirdStep/ThirdStep'
import ForthStep from './ForthStep/ForthStep'
import FifthStep from './FifthStep/FifthStep'
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer/Footer"
const Roadmap = () => {
  return (
    <>
    <div className='bg-white'>

    
      <div className='bg-[#282828]'>
        <Navbar/>
      </div>
      <FirstStep/>
      <SecondStep/>
      <ThirdStep/>
      <ForthStep/>
      <FifthStep/>
      
      <div className="flex flex-col gap-3 text-center w-[80%] mb-10 items-center mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        We believe in building <span className='bg-[#CCEA17]'>long-term partnerships</span>, not just one-off projects. We're here to see your software succeed and grow alongside your business.
          {/* From <span className='bg-[#f2ffa2] p-[0.5px]'>Idea To Impact</span>: The Codemischief Methodology */}
        </h1>
        
        <Link to="/contact">
         <button  className=" bg-[#282828] py-4 px-4 text-xs text-white tracking-widest font-[400] title-font mb-1">
        Start Your Project Today
        </button>
        
        </Link>

        
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Roadmap

