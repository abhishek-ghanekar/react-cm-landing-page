import React from 'react'
import ManCalling from "../../../assets/home/man-calling.png"
const WhyChooseUs = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
          <h1 className="sm:text-[60px] text-[60px] font-medium title-font mb-2 text-[#A0B812]">
            Why Choose Us
          </h1>
          <img src={ManCalling} />
        </div>
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mt-2">
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5D202] inline-flex items-center justify-center text-white relative z-10">
              01
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Long Term Collaboration
              </h2>
              <p className="leading-relaxed">
                We prioritize building strong relationships and becoming a
                trusted partner in your success..
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5D202] inline-flex items-center justify-center text-white relative z-10">
              02
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Agile &amp; Iterative Development
              </h2>
              <p className="leading-relaxed">
                Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                slow-carb health goth, vape typewriter.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5D202] inline-flex items-center justify-center text-white relative z-10">
              03
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Focus on ROI
              </h2>
              <p className="leading-relaxed">
                Coloring book nar whal glossier master cleanse umami. Salvia +1
                master cleanse blog taiyaki.
              </p>
            </div>
          </div>
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none" />
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5D202] inline-flex items-center justify-center text-white relative z-10">
              04
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Expert Team
              </h2>
              <p className="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
          <div className="flex relative">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#B5D202]  inline-flex items-center justify-center text-white relative z-10">
              05
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                Transparent Communication
              </h2>
              <p className="leading-relaxed">
                Pitchfork ugh tattooed scenester echo park gastropub whatever
                cold-pressed retro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyChooseUs