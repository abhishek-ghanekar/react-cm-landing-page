import React from 'react'
import Success1 from "../../../assets/home/case-study-1.png"
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
const SuccessStories = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container  px-5 py-10 mx-auto">
    <div className="lg:w-3/5 bg-[#282828] rounded-md p-4 mx-auto flex flex-wrap">
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
        src={Success1}
      />
    </div>
  </div>
</section>

  )
}

export default SuccessStories
