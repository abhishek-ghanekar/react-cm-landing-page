import React from 'react'
import CodemischiefLogo from "../../assets/logo/codemischief-logo.png"
import { ArrowUpOutlined } from '@ant-design/icons'
import UpArrow from "../../assets/logo/up-arrow.png"
const Footer = () => {
  return (
    
      <footer className="text-gray-600 body-font bg-[#282828] ">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex gap-3">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pt-3">
          <img src={CodemischiefLogo} className='self-start '/>
        </a>
        <div className='flex flex-col items-center text-center'>

        <p className="mt-2  text-white text-2xl">Software Reimagined</p>
        <button className="inline-flex  items-center bg-[#282828] border-[0.5px] border-white text-white font-thin   py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-2 w-[70%]">
          Know More
        </button>
        </div>
      </div>
      <div className="flex-grow flex flex-wrap justify-end -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
          <h2 className="title-font font-thin text-white tracking-widest text-sm mb-3">
            Quick Navigation
          </h2>
          <nav className="list-none mb-10 space-y-3 font-medium">
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Case Study
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Methodology
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                About{" "}
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Cover{" "}
              </a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
          <h2 className="title-font font-thin text-white tracking-widest text-sm mb-3">
            Social
          </h2>
          <nav className="list-none mb-10 space-y-3 font-medium">
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Linkedin
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Instagram
              </a>
            </li>
            <li>
              <a className="text-white hover:text-[#B5D202] cursor-pointer">
                Facebook
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-200">
      <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
          
          {/* <p className="inline-flex  border-0 py-2 px-6 focus:outline-none text-[#FEFFF5] rounded  cursor-pointer">
            Subscribe To Our Newsletter
          </p> */}
          
        </div>
        <span className="inline-flex lg:ml-auto gap-2 lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
          <div className='flex items-center'>

            <div className='h-[80%] flex flex-col justify-center text-center'>
              <p className="inline-flex text-[#FEFFF5] border-0 py-2 px-6 focus:outline-none rounded">
                info@codemischief.tech &nbsp; &nbsp; &nbsp; +91 79728 04023
              </p>
            </div>

          </div>
          <button onClick={() => {
            window.scrollTo({top : 0, behavior : 'smooth'})
          }}>
            {/* <img src={UpArrow}/> */}
            <div className='bg-[#363636] rounded-full p-4'>

            <ArrowUpOutlined />
            </div>

          </button>
          
        </span>
      </div>
    </div>
  </footer>
    
  )
}

export default Footer
