import React from 'react'
import CountUp from 'react-countup';
const Hero = () => {
  return (
    <section
      className=" body-font bg-[#373737] text-white "
      style={{
        background:
          "radial-gradient(circle at center, rgba(160, 184, 18, 0.2) 10%,rgba(55, 55, 55,0.8) 60%)"
      }}
    >
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium">
            Your <span className="text-[#B5D202]">Vision</span>, Our  
            <span className="text-[#B5D202]"> Expertise</span>
          </h1>
          <p className="mb-8 leading-relaxed font-thin">
            We go beyond code. CodeMischief becomes your software partner,
            guiding you from concept to launch with innovative solutions. Our
            expertise in lean startups and MVPs gets your software to market
            fast. Let's build something amazing together.
          </p>
          <div className="flex justify-center mb-2">
            <button className="inline-flex text-black font-[400] text-[17px] bg-white border-0 py-4 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer">
              Start Your Project Today
            </button>
          </div>



       <section class="text-white body-font font-[400]">
          <div class="container px-5 py-4 mx-auto">

            <div class="flex flex-wrap -m-4 items-center justify-center">
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class=" p-6 rounded-lg">
                  <div className='mb-4'>

                  <CountUp className='text-lg text-white font-[400] title-font mb-4' start={0} end={90} duration={3} delay={0}/>
                  </div>
                  {/* <h2 class="text-lg text-white font-[400] title-font mb-4">90</h2> */}
                  <p class="leading-relaxed text-base">Years of combined work experience</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class=" p-6 rounded-lg">
                 
                  <div className='mb-4'>

                  <CountUp className='text-lg text-white font-[400] title-font mb-4' start={0} end={28460} duration={3} delay={0}/>
                  </div>
                  {/* <h2 class="text-lg text-white font-[400] title-font mb-4">28460</h2> */}
                  <p class="leading-relaxed text-base">Lines of Code written and countiing</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class=" p-6 rounded-lg">
                  
                <div className='mb-4'>

<CountUp className='text-lg text-white font-[400] title-font mb-4' start={0} end={96.8} duration={3} delay={0}/> %
</div>
                  {/* <h2 class="text-lg text-white  title-font mb-4 font-[400]">96.8%</h2> */}
                  <p class="leading-relaxed text-base">Average on time delivery</p>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class=" p-6 rounded-lg">
                  
                <div className='mb-4'>

<CountUp className='text-lg text-white font-[400] title-font mb-4' start={0} end={100} duration={3} delay={0} /> %
</div>
                  {/* <h2 class="text-lg text-white  title-font mb-4 font-[400]">100%</h2> */}
                  <p class="leading-relaxed text-base">Happy and Satisfied Customer</p>
                </div>
              </div>
            </div>
          </div>
       </section>
        </div>
      </div>
    </section>
  )
}

export default Hero
