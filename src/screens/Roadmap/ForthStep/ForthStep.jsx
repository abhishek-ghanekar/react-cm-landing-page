import React from 'react'
import StepFour from "../../../assets/roadmap/stepfour.svg"
const ForthStep = () => {
  return (
    <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse sm:flex-wrap justify-center">

      <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
        <div className='w-full flex gap-2 justify-center md:justify-between items-center'>

        <h1 className="text-gray-200 text-[40px] title-font font-bold mb-4 leading-[120%]">
           04
        </h1>
        <h1 className="text-gray-900 text-[25px] title-font font-bold mb-4 leading-[120%]">
           Rigorous Testing & Quality Assurance
        </h1>
        </div>
        
       <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
          Our dedicated QA team tests every aspect of the software throughout development.
           
        </p>
        <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
           You're involved in testing to ensure the software meets your expectations.
           
        </p>
        
       
      </div>
      <img
          alt="ecommerce"
          className="lg:w-1/3 w-full lg:h-auto h-64  object-center rounded"
          src={StepFour}
        />
    </div>
    
  </div>
  )
}

export default ForthStep
