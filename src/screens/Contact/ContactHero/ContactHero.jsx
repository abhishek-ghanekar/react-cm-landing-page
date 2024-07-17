import React from 'react'
import Contact1 from "../../../assets/contact/contact-1.png"
const ContactHero = () => {
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-start justify-start relative">
         
      <div className="flex flex-col mb-8 lg:items-start items-center">
             
                
              
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Start Your Journey with Us
                </h2>
                <p className="leading-relaxed text-base">
                   Unlock your business's potential with Codemischief, where passion and expertise create powerful, tailored software solutions.
                </p>
              </div>
              <img src={Contact1} />
            </div>
      
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-[#282828] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4 relative">
      <div className='bg-white h-10 w-10 absolute top-0 right-0 rounded-bl-lb'>

      </div>
        {/* <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-transparent rounded   text-base outline-none text-white py-1 px-3 leading-8  duration-200 border-t-transparent border-l-transparent border-r-transparent border-b border-b-white ease-in-out focus:ring-0 focus:outline-none focus:border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-b focus:border-b-white"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
           className="w-full bg-transparent rounded   text-base outline-none text-white py-1 px-3 leading-8  duration-200 border-t-transparent border-l-transparent border-r-transparent border-b border-b-white ease-in-out focus:ring-0 focus:outline-none focus:border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-b focus:border-b-white"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
           className="w-full bg-transparent rounded   text-base outline-none text-white py-1 px-3 leading-8  duration-200 border-t-transparent border-l-transparent border-r-transparent border-b border-b-white ease-in-out focus:ring-0 focus:outline-none focus:border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-b focus:border-b-white"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Phone
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-transparent rounded   text-base outline-none text-white py-1 px-3 leading-8  duration-200 border-t-transparent border-l-transparent border-r-transparent border-b border-b-white ease-in-out focus:ring-0 focus:outline-none focus:border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-b focus:border-b-white"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            How Can We Help?
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-transparent rounded   text-base outline-none text-white py-1 px-3 leading-8  duration-200 border-t-transparent border-l-transparent border-r-transparent border-b border-b-white ease-in-out focus:ring-0 focus:outline-none focus:border-r-transparent focus:border-l-transparent focus:border-t-transparent focus:border-b focus:border-b-white"
          />
        </div>
        <button className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-[#ccea17] rounded text-lg">
          Send Message
        </button>
      </div>
    </div>
  </section>
  )
}

export default ContactHero
