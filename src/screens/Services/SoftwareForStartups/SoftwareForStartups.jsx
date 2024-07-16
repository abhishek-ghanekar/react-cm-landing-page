import React from 'react'
import img1 from "../../../assets/services/softwareforstartup/img-1.png"
import img2 from "../../../assets/services/softwareforstartup/img-2.png"
import img3 from "../../../assets/services/softwareforstartup/img-3.png"
import img4 from "../../../assets/services/softwareforstartup/img-4.png"
const SoftwareForStartups = () => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg mt-8">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-12 sm:flex-row flex-col sm:justify-between ">
            <div className='relative'>
            <h1 className='font-bold absolute text-[80px] top-[-60px] text-[#363636] opacity-10	'>02</h1>
            <h1 className="sm:text-text-[41px]  text-[41px] font-medium title-font mb-2 text-[#363636]">
              Software For Startups
            </h1>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              At CodeMischief, we're passionate about helping startups succeed.
              We offer a range of software development services specifically
              tailored to the needs of early-stage companies, including:
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={img1}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              MVP Developement
            </h2>
            
            <p className="mb-4">
            Get your idea to market quickly with a focused MVP that
            validates your concept and attracts users.
            </p>
            
          </div>
             </div>
              
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={img2}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Agile Development Methodology
            </h2>
            
            <p className="mb-4">
            We work in close collaboration with you, adapting to changing
            priorities and delivering value iteratively.
            </p>
           
          </div>
        </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={img3}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Scalable Software Solutions
            </h2>
            
            <p className="mb-4">
            We build software with the ability to grow alongside your
                  business, ensuring long-term efficiency.
            </p>
            
          </div>
        </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                


                <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={img4}
          />

               
          
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
              Funding Pitch Supports
            </h2>
            
            <p className="mb-4">
            We help you create a strong technical foundation to impress
                  investors and secure funding.
            </p>
            
          </div>
        </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SoftwareForStartups
