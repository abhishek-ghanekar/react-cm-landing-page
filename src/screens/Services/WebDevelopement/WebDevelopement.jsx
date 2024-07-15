import React from 'react'
import Web1 from "../../../assets/services/webdevelopement/web-1.png"
import Web2 from "../../../assets/services/webdevelopement/web-2.png"
import Web3 from "../../../assets/services/webdevelopement/web-3.png"
const WebDevelopement = () => {
  return (
    <div className="w-[95%] h-full bg-[#fefff5] mx-auto rounded-lg mt-8">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-col justify-space-between">
            <h1 className="sm:text-[60px] text-[60px] font-medium title-font mb-2 text-[#A0B812]">
              Web Development
            </h1>
            <p>We go beyond just coding.</p>
            <p className="mt-4">
              We partner with you to create a website that reflects your brand
              and achieves your business goals.
            </p>
            {/* <img alt="feature" class="object-cover object-center h-full w-full" src="ui_img.png"> */}
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={Web1} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Craft a Website that Converts
                </h2>
                <p className="leading-relaxed text-base">
                  Codemischief delivers high-impact web design and development
                  solutions to help your business thrive online.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={Web2} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Data-Driven Digital Marketing
                </h2>
                <p className="leading-relaxed text-base">
                  Codemischief offers a comprehensive suite of digital marketing
                  services to amplify your online presence.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-8 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <img src={Web3} />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Cutting-Edge Tech Development
                </h2>
                <p className="leading-relaxed text-base">
                  Our developers use latest technologies (HTML5, CSS3, and
                  JavaScript frameworks) for responsive website creation,
                  ensuring seamless adaptability across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopement
