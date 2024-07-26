import React, { useEffect } from 'react'
import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_STRAPI_URL
const Openings = () => {
  const fetchJobOpenings = () => {
     axios.get(`${BACKEND_URL}/api/job-openings?populate=*`).then(result => {
        console.log('hey')
        console.log(result.data.data)
     })
  }
  useEffect(() => {
    fetchJobOpenings()
  },[])
  return (
    <section className="text-gray-600 body-font ">
  <div className="container px-5 pt-24 pb-8 mx-auto flex justify-center">
    <div className='lg:w-4/5 bg-[#282828] px-12 py-24 flex flex-col items-center'>
    <div className='lg:w-3/5 flex justify-start'>
    <h1 className='text-[41px] font-bold text-[#CCEA17]'>Open Positions</h1>

    </div>
    <div className="flex items-center justify-between lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-40 sm:h-32 h-20 w-32 sm:mr-10 inline-flex items-center justify-center   text-white flex-shrink-0">
        <h1 className='text-[30px]'>Engineering</h1>
      </div>
      <div className='flex flex-col md:w-2/5 items-start gap-2 justify-center'>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
          Full Stack Developer
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Remote | Entry Level
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
          Devops Engineer
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Hybrid | Senior
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      </div>
     
    </div>
    <div className="flex items-center justify-between lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-40 sm:h-32 h-20 w-32 sm:mr-10 inline-flex items-center justify-start   text-white flex-shrink-0">
        <h1 className='text-[30px]'>Design</h1>
      </div>
      <div className='flex flex-col md:w-2/5 items-start gap-2 justify-center'>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
            UI/UX Designer
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Hybrid | Entry Level
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
           Graphic Designer
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Remote | Mid-level
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      </div>
     
    </div>
    <div className="flex items-center justify-between lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-40 sm:h-32 h-20 w-32 sm:mr-10 inline-flex items-center justify-start   text-white flex-shrink-0">
        <h1 className='text-[30px]'>Marketing</h1>
      </div>
      <div className='flex flex-col md:w-2/5 items-start gap-2 justify-center'>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
           Digital Marketing Specialist
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Hyrbid | Senior
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0 hover:bg-white rounded-md hover:text-black text-white pl-3 py-1 relative cursor-pointer transition ease-in-out ">
        <h2 className=" text-lg title-font font-medium ">
           Marketing Manager
        </h2>
        <p className="  leading-relaxed text-base text-[#8A8A8A]">
          Remote | Mid-level
        </p>
        <div className="w-5 h-5  items-center justify-center rounded-full bg-[#f2ffa2] text-indigo-500 mb-4 absolute right-3 top-2 hidden group-hover:inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5672 0.434136L10.568 7.11365L9.48245 7.11442L9.48245 2.28602L0.819104 10.9494L0.051961 10.1822L8.71531 1.51888L3.88768 1.51964L3.88768 0.433368L10.5672 0.434136Z" fill="#282828"/>
</svg>
          </div>
      </div>
      </div>
     
    </div>
    </div>
    
  </div>
</section>

  )
}

export default Openings
