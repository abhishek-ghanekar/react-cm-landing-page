import React, { useState } from 'react'
import CodemischiefLogo from "../assets/logo/codemischief-logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
 
  return (
    <header
    id="navbar"
      className=" body-font  text-white"
      // style={{ background: "rgba(55, 55, 55,0.5)" }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to='/'
        >
          <img src={CodemischiefLogo} />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex md:gap-4 flex-wrap items-center text-base justify-center font-thin">
          
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/services"
            >
              Services
            </Link>
             
          
          
            
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/casestudies"
            >
              Case Study
            </Link>
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/team"
            >
              Team
            </Link>
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/roadmap"
            >
              Methodology
            </Link>
            <Link
              className="mr-5 hover:text-[#b5d202] cursor-pointer"
              to="/careers"
            >
              Career
            </Link>
            
             
          
          
          
    
            
            
          
        </nav>
        

        <Link to="/contact">
          <button className="inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50">
            Contact Us
          </button>
        </Link>
        
      </div>
    </header>
  )
}

export default Navbar
