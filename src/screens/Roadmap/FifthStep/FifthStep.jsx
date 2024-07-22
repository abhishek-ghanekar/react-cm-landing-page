import React from 'react'
import StepFive from "../../../assets/roadmap/stepfive.svg"
const FifthStep = () => {
  return (
    <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
    <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64  object-center rounded"
        src={StepFive}
      />
      <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <div className='w-full flex gap-2 justify-center md:justify-between items-center'>

        <h1 className="text-gray-200 text-[40px] title-font font-bold mb-4 leading-[120%]">
           05
        </h1>
        <h1 className="text-gray-900 text-[25px] title-font font-bold mb-4 leading-[120%]">
            Launch & Ongoing Support
        </h1>
        </div>
        
       <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
          We deploy the software to your chosen platform for a successful launch.
       </p>
       <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
          Our team provides ongoing support to ensure optimal performance.
       </p>
        
       
      </div>
      
    </div>
    
  </div>
  )
}

export default FifthStep
