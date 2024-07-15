import React from 'react'
import img1 from "../../../assets/services/enterprise/img-1.png"
import img2 from "../../../assets/services/enterprise/img-2.png"
import img3 from "../../../assets/services/enterprise/img-3.png"
import img4 from "../../../assets/services/enterprise/img-4.png"
const EnterpriseSolutions = () => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg mt-8">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Enterprise Solutions
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            At Codemischief, we provide a comprehensive suite of custom
              enterprise software development services to help you achieve your
              strategic goals.
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
            Agile Development with Expertise
            </h2>
            
            <p className="mb-4">
            We leverage Agile practices and skilled developers proficient
                  in Javascript frameworks and various databases to deliver
                  high-quality solutions efficiently.
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
            Scalable System Architecture
            </h2>
            
            <p className="mb-4">
            Our team designs systems that can grow with your business,
                  ensuring data integrity and long-term functionality.
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
            Seamless Cloud Integration
            </h2>
            
            <p className="mb-4">
            We deploy your applications on leading cloud platforms (AWS,
                GCP) for optimal performance and scalability.
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
            Rigorous Testing &amp; Support
            </h2>
            
            <p className="mb-4">
            We employ rigorous testing practices to guarantee flawless
                  software operation and offer ongoing support to address your
                  needs.
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

export default EnterpriseSolutions
