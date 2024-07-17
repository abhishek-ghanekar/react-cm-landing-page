import React from 'react'
import Web1 from "../../../assets/services/webdevelopement/web-1.png"
import Web2 from "../../../assets/services/webdevelopement/web-2.png"
import Web3 from "../../../assets/services/webdevelopement/web-3.png"
const WebDevelopement = ({webRef}) => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg mt-8" ref={webRef}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg  flex flex-col justify-space-between">
          <div className='relative'>


          <h1 className='font-bold absolute text-[80px] top-[-55px] text-[#363636] opacity-10	'>03</h1>
            <h1 className="sm:text-[41px] text-[41px] font-medium title-font mb-2 text-[#363636]">
              Web Development
            </h1>
          </div>
            <p>We go beyond just coding.</p>
            <p className="mt-4">
              We partner with you to create a website that reflects your brand
              and achieves your business goals.
            </p>
            {/* <img alt="feature" class="object-cover object-center h-full w-full" src="ui_img.png"> */}
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={Web1}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
               Craft a Website that Converts
            </h2>
            
            <p className="mb-4">
            Codemischief delivers high-impact web design and development solutions to help your business thrive online.
            </p>
            
          </div>
             </div>
             <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={Web2}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Data-Driven Digital Marketing
            </h2>
            
            <p className="mb-4">
            Codemischief offers a comprehensive suite of digital marketing services to amplify your online presence.
            </p>
            
          </div>
             </div>
             <div className=" flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
            src={Web3}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">
            Cutting-Edge Tech Development
            </h2>
            
            <p className="mb-4">
            Our developers use latest technologies (HTML5, CSS3, and JavaScript frameworks) for responsive website creation, ensuring seamless adaptability across all devices.

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

export default WebDevelopement
