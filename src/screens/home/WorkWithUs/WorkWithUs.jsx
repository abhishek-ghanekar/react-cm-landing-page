import React from 'react'
import ManCoffee from "../../../assets/home/man_coffee.png"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import FadeUpBounce from '../../../animations/FadeUpBounce.jsx'

const WorkWithUs = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10 items-center">
        <Link to="/contact">
         <button  className=" bg-[#282828] py-4 px-4 text-xs text-white tracking-widest font-[400] title-font mb-1">
        Work With Us
        </button>
        
        </Link>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          From <span className='bg-[#f2ffa2] p-[0.5px]'>Idea To Impact</span>: The Codemischief Methodology
        </h1>
        
        

        <img src={ManCoffee} className="w-full mt-4  sm:w-[80%] md:w-[50%] lg:w-[30%]" />
        
      </div>
      <div  className="flex flex-wrap -m-4">
        <div
        className="p-4 md:w-1/3">
          <FadeUpBounce>
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#A0B812] text-white flex-shrink-0">
                <p>01</p>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Colloborate and Innovate
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                We don't just code, we become your partner. Our team understands
                your business and tackles challenges with creative solutions
                along with constant guidance at every stage.&nbsp;
              </p>
             
            </div>
          </div>
          </FadeUpBounce>
        </div>
        <div className="p-4 md:w-1/3">
        <FadeUpBounce>
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#A0B812] text-white flex-shrink-0">
                <p>02</p>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Build for Users &amp; Agility
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                Our experienced engineers ensure your software is built on a
                solid foundation with the best tools for scalability. We use
                proven agile methodologies and strict development practices to
                deliver high-quality software iteratively.&nbsp;
              </p>
             
            </div>
          </div>
          </FadeUpBounce>
        </div>
        <div className="p-4 md:w-1/3">
        <FadeUpBounce>
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#A0B812] text-white flex-shrink-0">
                <p>03</p>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Deliver &amp; Persist
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
                We manage your project efficiently, from accurate estimates to
                clear timelines. Our team is constantly learning and applying
                the latest advancements in technology to build innovative
                solutions for your business.
              </p>
             
            </div>
          </div>
          </FadeUpBounce>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorkWithUs
