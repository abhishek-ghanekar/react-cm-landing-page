import React from 'react'
import StepTwo from "../../../assets/roadmap/steptwo.svg"
const SecondStep = () => {
  return (
    <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse  justify-center">
      
      <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
        <div className='w-full flex gap-2 justify-center md:justify-between items-center'>

        <h1 className="text-gray-200 text-[40px] title-font font-bold mb-4 leading-[120%]">
           02
        </h1>
        <h1 className="text-gray-900 text-[25px] title-font font-bold mb-4 leading-[120%]">
           User Experience (UX) Design & Planning
        </h1>
        </div>
        
       <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
           We create prototypes to showcase user experience and functionality.
           
        </p>
        <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
        Your feedback shapes the design for an intuitive and user-friendly experience.
           
        </p>
        
       
      </div>
      <img
          alt="ecommerce"
          className="lg:w-1/3 w-full lg:h-auto h-64  object-center rounded"
          src={StepTwo}
        />
    </div>
    
  </div>
  )
}

export default SecondStep
