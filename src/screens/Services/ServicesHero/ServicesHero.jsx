import React from 'react'
import Service1 from "../../../assets/services/services_page_1.png"
import Service2 from "../../../assets/services/services_page_2.png"
import Service3 from "../../../assets/services/services_page_3.png"
import Service4 from "../../../assets/services/services_page_4.png"
const ServicesHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="gradient-text sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Services
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-white font-[400] ">
          We go beyond code. CodeMischief becomes your software partner, guiding
          you from concept to launch with innovative solutions. Our expertise in
          lean startups and MVPs gets your software to market fast. Let's build
          something amazing together.
        </p>
      </div>
    
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-[#363636] p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Service1}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                UI/UX Design
              </h2>
              <p className="leading-relaxed text-base text-white">
                At CodeMischief, we believe exceptional user experience (UX) is
                the cornerstone of any successful digital product.{" "}
              </p>

              <p className='text-[#F2FFA2] mt-2'>Learn More</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-[#363636] p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Service2}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Software for Startups
              </h2>
              <p className="leading-relaxed text-base text-white">
                At CodeMischief, we're passionate about helping startups
                succeed.{" "}
              </p>

              <p className='text-[#F2FFA2] mt-2'>Learn More</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-[#363636] p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Service3}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Web Development
              </h2>
              <p className="leading-relaxed text-base text-white">
                We go beyond just coding. We partner with you to create a
                website that reflects your brand and achieves your business
                goals.
              </p>

              <p className='text-[#F2FFA2] mt-2'>Learn More</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-[#363636] p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={Service4}
                alt="content"
              />
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Enterprise Solutions
              </h2>
              <p className="leading-relaxed text-base text-white">
                In today's digital landscape, enterprises need robust software
                solutions that can adapt and evolve alongside their business.{" "}
              </p>


              <p className='text-[#F2FFA2] mt-2'>Learn More</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
