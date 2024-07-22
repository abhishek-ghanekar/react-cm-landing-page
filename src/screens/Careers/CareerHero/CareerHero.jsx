import React from 'react'
import CareerImg from "../../../assets/careers/hero-1.svg"
const CareerHero = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden w-full ">
  <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
      <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-gray-900 text-[64px] title-font font-bold mb-4 leading-[120%]">
         Join Our Team & Craft the Future
        </h1>
        
        
       
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64  object-center rounded"
        src={CareerImg}
      />
    </div>
    
  </div>
  <div className=' w-full flex justify-center'>

  <p className="container  lg:w-1/2 w-full leading-relaxed text-gray-500">
            Witness real-world transformations fueled by our innovative software solutions. Explore how we empower businesses of all sizes to achieve their goals. Dive into success stories showcasing how we tackled specific challenges and delivered measurable results. See for yourself how Codemischief software can be your partner in achieving success.
            </p>
  </div>
</section>

  )
}

export default CareerHero
