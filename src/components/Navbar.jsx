import React, { useState } from 'react';
import CodeMischiefLogo from "../assets/logo/codemischief-logo.png"
import { Link } from 'react-router-dom';
import FadeIn from '../animations/FadeIn';
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
            <Link to="/">
            <img src={CodeMischiefLogo}/>
            </Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden absolute right-6">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* Navbar Links */}
        <div className="hidden lg:flex items-center space-x-8">
            <Link to='/services'>
            
                <a href="#" className="text-white hover:underline hover:underline-offset-2 hover:decoration-[#ccea17] transition duration-300 ease-in-out">Services</a>
            </Link>
          <div className="relative group">
            <button className="text-white hover:underline-offset-2 hover:decoration-[#ccea17] transition duration-300 ease-in-out focus:outline-none">Resources</button>
            <div className="absolute left-0  w-48 bg-[#ccea17] rounded-md shadow-lg py-2 z-20 hidden group-hover:block group-hover:visible ">
                <Link
                 to="/casestudies"
                >

              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Case Study</a>

                </Link>
                <Link to="/blogs">
                
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blogs</a>
                </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-white hover:underline-offset-2 hover:decoration-[#ccea17] transition duration-300 ease-in-out  focus:outline-none">About</button>
            <div className="absolute left-0  w-48 bg-[#ccea17] rounded-md shadow-lg py-2 z-20 hidden group-hover:block group-hover:visible">
                <Link to="/team">
                
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Team</a>
                </Link>
                <Link to="/roadmap">

                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Methodology</a>
                </Link>
                <Link to='/careers'>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Career</a>
                </Link>
            </div>
          </div>
        </div>
        {/* <button className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Contact</button> */}
        <Link to='/contact'>

        <button className="hidden lg:block inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50">
            Contact Us
          </button>
        </Link>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && 
      <FadeIn>
      <div className={`mobile menu lg:hidden bg-[#282828]  mt-4`}>
        <Link to='/services'>

            <a href="#" className="block text-white px-2 py-1">Services</a>
        </Link>
        <div className="relative">
          <Link to='/casestudies'>

          <button className="block text-white px-2 py-1 focus:outline-none">Case Study</button>
          </Link>
          <Link to='/blogs'>

            <button className="block text-white px-2 py-1 focus:outline-none">Blogs</button>
          </Link>
          {/* <div className="mt-1 bg-gray-800 rounded-md shadow-lg py-2">
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Case Study</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Blogs</a>
          </div> */}
        </div>
        <div className="relative">
          <Link to='/team'>
          
            <button className="block text-white px-2 py-1 focus:outline-none">Team</button>
          </Link>
          <Link to='/roadmap'>

                <button className="block text-white px-2 py-1 focus:outline-none">Methodology</button>
          </Link>
          <Link to='/careers'>

            <button className="block text-white px-2 py-1 focus:outline-none">Career</button>
          </Link>
          {/* <div className="mt-1 bg-gray-800 rounded-md shadow-lg py-2">
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Team</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Methodology</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Career</a>
          </div> */}
        </div>
        <Link to='/contact'>
        
        <button className="bg-black text-white px-4 py-2 mt-2 rounded-md  hover:border-white w-full">Contact</button>
        </Link>
      </div> </FadeIn>}
      
    </nav>
  );
};

export default Navbar;
