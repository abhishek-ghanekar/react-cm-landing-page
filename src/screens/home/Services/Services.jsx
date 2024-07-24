import React from 'react'
import ServiceUiLogo from "../../../assets/home/service-ui.png"
import ServiceWebLogo from "../../../assets/home/service-web.png"
import ServiceStartupLogo from "../../../assets/home/service-startup.png"
import ServiceEnterpriseLogo from "../../../assets/home/service-enterprise.png"
import { Link } from 'react-router-dom'
import FadeUpBounce from '../../../animations/FadeUpBounce'
const Services = () => {
  return (
    <section className="text-gray-600 body-font mb-4">
    <div className="container px-5 py-16 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Our Services
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          We go beyond code. CodeMischief becomes your software partner, guiding
          you from concept to launch with innovative solutions. Our expertise in
          lean startups and MVPs gets your software to market fast. Let's build
          something amazing together.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/2 md:w-1/2 p-4 ">
        <FadeUpBounce>
          <div className="border border-gray-200 p-6 rounded-lg bg-[#f2ffa2] h-[280px]">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
              <img src={ServiceUiLogo} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              UI/UX Design
            </h2>
            <p className="leading-relaxed text-base">
              We create user experiences that are as intuitive as they are
              beautiful.
            </p>
            <Link to="/services#ui"><p className="font-normal mt-4">Read More..</p></Link>
            
          </div>
        </FadeUpBounce>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
        <FadeUpBounce>
          <div className="border border-gray-200 p-6 rounded-lg bg-[#f2ffa2] h-[280px]">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
              <img src={ServiceWebLogo} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Web Develpoment
            </h2>
            <p className="leading-relaxed text-base">
              We build high-performance websites that connect you with your
              audience and crush your digital goals.
            </p>
            <Link to="/services#web">
            <p className="font-normal mt-4">Read More..</p>
            </Link>
          </div>
        </FadeUpBounce>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
        <FadeUpBounce>
          <div className="border border-gray-200 p-6 rounded-lg bg-[#f2ffa2] h-[280px]">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
              <img src={ServiceStartupLogo} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Software For Startups
            </h2>
            <p className="leading-relaxed text-base">
              &nbsp;We understand the startup hustle and offer tailored
              solutions to help your business launch and soar.
            </p>
            <Link to="/services#startup">
            <p className="font-normal mt-4">Read More..</p></Link>
          </div>
        </FadeUpBounce>
        </div>
        <div className="xl:w-1/2 md:w-1/2 p-4">
        <FadeUpBounce>
          <div className="border border-gray-200 p-6 rounded-lg bg-[#f2ffa2] h-[280px]">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-4">
              <img src={ServiceEnterpriseLogo} />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Enterprise Solutions
            </h2>
            <p className="leading-relaxed text-base">
              Launch Faster, Grow Stronger:&nbsp; Software Solutions Built for
              Startups by CodeMischief
            </p>
            <Link to="/services#enterprise">
            <p className="font-normal mt-4">Read More..</p></Link>
          </div>
        </FadeUpBounce>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
