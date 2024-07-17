import React from 'react'
import UI1 from "../../../assets/services/ui/ui_1.png"
import UI2 from "../../../assets/services/ui/ui_2.png"
import UI3 from "../../../assets/services/ui/ui_3.png"
const UiHero = ({uiRef}) => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg" ref={uiRef}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg  flex flex-col justify-space-between">
          <div className='relative'>

             <h1 className='font-bold absolute text-[80px] top-[-55px] text-[#363636] opacity-10	'>01</h1>
            <h1 className="sm:text-[41px] text-[41px] font-medium title-font mb-2 text-[#363636] relative">
              UI/UX Design
            </h1>
          </div>
            <p>At Codemischief,</p>
            <p className="mt-4">
              we believe exceptional user experience (UX) is the cornerstone of
              any successful digital product.
            </p>
            <p className="mt-4">
              Our team of passionate UI/UX designers combines creativity with
              strategic thinking to create interfaces that are:
            </p>
            {/* <img alt="feature" class="object-cover object-center h-full w-full" src="ui_img.png"> */}
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={UI1}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Intuitive and User-Friendly
            </h2>
            
            <p className="mb-4">
            We make sure your product is easy to navigate and understand, reducing frustration and increasing user satisfaction.
            </p>
            
          </div>
             </div>
             <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={UI2}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Visually Appealing
            </h2>
            
            <p className="mb-4">
            We design interfaces that are not only functional but also aesthetically pleasing, leaving a lasting impression on your users.
            </p>
            
          </div>
             </div>
             <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={UI3}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Data-Driven Design
            </h2>
            
            <p className="mb-4">
            We leverage user research and analytics to ensure your UI/UX decisions are backed by real data, leading to optimal user journeys.

            </p>
            
          </div>
             </div>
            {/* <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={UI1} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Intuitive and User-Friendly
                </h2>
                <p className="leading-relaxed text-base">
                  We make sure your product is easy to navigate and understand,
                  reducing frustration and increasing user satisfaction.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={UI2} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Visually Appealing
                </h2>
                <p className="leading-relaxed text-base">
                  We design interfaces that are not only functional but also
                  aesthetically pleasing, leaving a lasting impression on your
                  users.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={UI3} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Data-Driven Design
                </h2>
                <p className="leading-relaxed text-base">
                  We leverage user research and analytics to ensure your UI/UX
                  decisions are backed by real data, leading to optimal user
                  journeys.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

     

    </div>
  )
}

export default UiHero
