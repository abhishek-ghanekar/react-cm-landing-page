import React from 'react'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Case1 from "../../assets/home/case-study-1.png"

const CaseStudyListings = () => {
  return (
    
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
         <div className="flex flex-col  justify-between w-[90%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             <ArrowLeftOutlined/> Case Studies
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
             Witness real-world transformations fueled by our innovative software solutions. Explore how we empower businesses of all sizes to achieve their goals. Dive into success stories showcasing how we tackled specific challenges and delivered measurable results. See for yourself how Codemischief software can be your partner in achieving success.


            </p>
          </div>
          <div className="flex flex-col items-center -m-4 w-[90%]">
            <div className="xl:w-[70%] md:w-[70%] p-4">
            <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container  px-5  mx-auto">
    <div className="w-full bg-[#282828] rounded-md p-4 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-white text-3xl title-font font-medium mb-4">
         EasyAspataal
        </h1>
        
        <p className="leading-relaxed mb-4 text-white">
           Streamlining Hospital Admissions with Innovative Technology
        </p>
        <div className="flex gap-2 mb-4">
          <a className=" text-white font-thin py-2 px-4 bg-[#363636] rounded-md  text-base ">
            Health Care
          </a>
          <a className=" text-white font-thin py-2 px-4 bg-[#363636] rounded-md  text-base ">
            MVP
          </a>
        </div>
        
        <div className="flex">
          <Link to="#">
          
          <span className="title-font font-thin text-base text-[#CCEA17] flex items-center">
            Read case Study <div className='p-2'><ArrowRightOutlined style={{
              marginTop : '5px'
            }}/> </div> 
          </span>
            </Link>
          
        </div>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={Case1}
      />
    </div>
  </div>
</section>
              
            </div>
            <div className="xl:w-[70%] md:w-[70%] p-4">
            <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container  px-5  mx-auto">
    <div className="w-full bg-[#282828] rounded-md p-4 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-white text-3xl title-font font-medium mb-4">
         EasyAspataal
        </h1>
        
        <p className="leading-relaxed mb-4 text-white">
           Streamlining Hospital Admissions with Innovative Technology
        </p>
        <div className="flex gap-2 mb-4">
          <a className=" text-white font-thin py-2 px-4 bg-[#363636] rounded-md  text-base ">
            Health Care
          </a>
          <a className=" text-white font-thin py-2 px-4 bg-[#363636] rounded-md  text-base ">
            MVP
          </a>
        </div>
        
        <div className="flex">
          <Link to="#">
          
          <span className="title-font font-thin text-base text-[#CCEA17] flex items-center">
            Read case Study <div className='p-2'><ArrowRightOutlined style={{
              marginTop : '5px'
            }}/> </div> 
          </span>
            </Link>
          
        </div>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={Case1}
      />
    </div>
  </div>
</section>
            </div>
            
          </div>
        </div>
      </section>
    
  )
}

export default CaseStudyListings
