import React from 'react'
import StepOne from "../../../assets/roadmap/stepone.svg"
const ThirdStep = () => {
  return (
    <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
    <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64  object-center rounded"
        src={StepOne}
      />
      <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <div className='w-full flex gap-2 justify-center lg:justify-between items-center'>

        <h1 className="text-gray-200 text-[40px] title-font font-bold mb-4 leading-[120%]">
           03
        </h1>
        <h1 className="text-gray-900 text-[25px] title-font font-bold mb-4 leading-[120%]">
           Project Kick-Off & Requirements
        </h1>
        </div>
        
       <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
         Automated testing and deployment ensure faster delivery and fewer errors.
        </p>
        <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
          You have access to a staging environment to test features before deployment.
        </p>
        
       
      </div>
      
    </div>
    
  </div>
  )
}

export default ThirdStep
