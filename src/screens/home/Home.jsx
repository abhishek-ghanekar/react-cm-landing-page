import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero/Hero'
import WorkWithUs from './WorkWithUs/WorkWithUs'
import Services from './Services/Services'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
  <div className="bg-[#373737] grid-overlay">
    <Navbar/>
    {/* hero section */}
    <Hero/>
  </div>
    <WorkWithUs/>
  <Services/>
  <div
    id="controls-carousel"
    className="relative w-full mb-24 h-96"
    data-carousel="slide"
  >
    {/* Carousel wrapper */}
    <div className="relative h-96 rounded-lg md:h-96 overflow-hidden">
      {/* Item 1 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/5 mx-auto flex  flex-wrap bg-[#282828] rounded-xl">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                src="case_study.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  EasyAspataal
                </h1>
                <p className="leading-relaxed text-white font-thin">
                  Streamlining Hospital Admissions with Innovative Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Item 2 */}
      <div
        className="hidden duration-700 ease-in-out"
        data-carousel-item="active"
      >
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/5 mx-auto flex flex-wrap bg-[#282828] rounded-xl">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                src="case_study.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  EasyAspataal
                </h1>
                <p className="leading-relaxed text-white font-thin">
                  Streamlining Hospital Admissions with Innovative Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Item 3 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/5 mx-auto flex flex-wrap bg-[#282828] rounded-xl">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                src="case_study.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  EasyAspataal
                </h1>
                <p className="leading-relaxed text-white font-thin">
                  Streamlining Hospital Admissions with Innovative Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Item 4 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/5 mx-auto flex flex-wrap bg-[#282828] rounded-xl">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                src="case_study.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  EasyAspataal
                </h1>
                <p className="leading-relaxed text-white font-thin">
                  Streamlining Hospital Admissions with Innovative Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Item 5 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/5 mx-auto flex flex-wrap bg-[#282828] rounded-xl">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
                src="case_study.png"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  EasyAspataal
                </h1>
                <p className="leading-relaxed text-white font-thin">
                  Streamlining Hospital Admissions with Innovative Technology
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* Slider controls */}
    <button
      type="button"
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev=""
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next=""
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  <Footer/>
</>

  )
}

export default Home
