import React from 'react'
import Success1 from "../../../assets/home/case-study-1.png"
const SuccessStories = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden ">
  <div className="container  px-5 py-24 mx-auto">
    <div className="lg:w-3/5 bg-[#282828] p-4 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-white text-3xl title-font font-medium mb-4">
         EasyAspataal
        </h1>
        
        <p className="leading-relaxed mb-4">
           Streamlining Hospital Admissions with Innovative Technology
        </p>
        <div className="flex mb-4">
          <a className="flex-grow text-white border-gray-200 border-2 py-2 text-lg ">
            Health Care
          </a>
          <a className="flex-grow text-white border-gray-200 border-2 py-2 text-lg ">
            MVP
          </a>
        </div>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-[#CCEA17]">
            Read Case Study
          </span>
          
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
