import React from 'react'

const AboutHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="gradient-text sm:text-5xl text-2xl font-medium title-font ">
            Meet the Mischief Makers!
          </h1>
          <h2 className="text-xs text-white tracking-widest font-normal title-font  mt-4">
            We offer a full toolbox of software development services to help you
            conquer the digital world.
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 flex justify-center">
            <div className="flex rounded-lg h-full   bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Mission
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  We strive to empower you through technology. Our goal is to
                  build solutions that streamline your operations, boost
                  efficiency, and equip you to achieve your strategic goals, all
                  with clear and consistent communication throughout the
                  process.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 flex justify-center">
            <div className="flex rounded-lg h-full   p-8 flex-col bg-[#F2FFA2]">
              <div className="flex items-center mb-3">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Vision
                </h2>
              </div>
              <div className="flex-grow ">
                <p className="leading-relaxed text-base">
                  To be the trusted software development partner for businesses,
                  empowering them with innovative and custom solutions that
                  unlock their full potential and drive long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
