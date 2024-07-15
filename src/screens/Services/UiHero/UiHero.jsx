import React from 'react'
import UI1 from "../../../assets/services/ui/ui_1.png"
import UI2 from "../../../assets/services/ui/ui_2.png"
import UI3 from "../../../assets/services/ui/ui_3.png"
const UiHero = () => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-col justify-space-between">
            <h1 className="sm:text-[60px] text-[60px] font-medium title-font mb-2 text-[#A0B812]">
              UI/UX Design
            </h1>
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
            <div className="flex flex-col mb-8 lg:items-start items-center">
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
            </div>
          </div>
        </div>
      </section>

     

    </div>
  )
}

export default UiHero
