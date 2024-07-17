import React from 'react'
import Case1 from "../../assets/home/case-study-1.png"
import { ArrowLeftOutlined , ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Blog1 from "../../assets/blogs/blog-1.svg"
import Blog2 from "../../assets/blogs/blog-2.svg"
import Blog3 from "../../assets/blogs/blog-3.svg"
import Blog4 from "../../assets/blogs/blog-4.svg"
const BlogsListing = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-12 mx-auto flex flex-col items-center">
          <div className="flex flex-col  justify-between w-[80%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             <ArrowLeftOutlined/> Blogs
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
            Uncover cutting-edge software solutions and industry trends. Dive into our library of informative articles and insightful blogs. Explore expert thought leadership and practical tips to navigate the ever-evolving software landscape. Gain valuable knowledge to optimize your business and stay ahead of the curve.

            </p>
          </div>
          <div className="flex flex-col items-center -m-4">
            <div className="xl:w-[80%] md:w-[80%] p-4">
            <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container  px-5  mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full  object-center"
            src={Blog1}
            alt="blog"
          />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            5 Essential Habits to Avoid on Your Development Journey
            </h1>
            
            <div className="flex items-center flex-wrap ">
              <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                
                2 mins read
              </span>
              
            </div>
          </div>
        </div>


        </div>
        <div class="p-4">

        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full  object-center"
            src={Blog2}
            alt="blog"
          />
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            CI/CD Pipelines: The Secret Sauce for Dev Rockstars
            </h1>
            
            <div className="flex items-center flex-wrap ">
            <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                
                 2 mins read
              </span>
              
            </div>
          </div>
        </div>
        </div>
        <div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full  object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
    The Full-Stack Security Stack: Building Impregnable Applications
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
        
       2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog4}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Unique Websites for Developers: Boost Your Workflow and Skills
    </h1>

    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
       
        2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog2}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
    CI/CD Pipelines: The Secret Sauce for Dev Rockstars
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
        
       2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       The Full-Stack Security Stack: Building Impregnable Applications
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
        
        2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog4}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       Unique Websites for Developers: Boost Your Workflow and Skills
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
      2 mins read
        
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog2}
    alt="blog"
  />
  <div className="p-6">
    
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
       CI/CD Pipelines: The Secret Sauce for Dev Rockstars
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
       
      2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
<div class="p-4">

<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
  <img
    className="lg:h-48 md:h-36 w-full object-cover object-center"
    src={Blog3}
    alt="blog"
  />
  <div className="p-6">
   
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
      The Full-Stack Security Stack: Building Impregnable Applications
    </h1>
    
    <div className="flex items-center flex-wrap ">
    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
              May 21, 2024
                
              </a>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
        
        2 mins read
      </span>
      
    </div>
  </div>
</div>
</div>
        </div>
  </div>
</section>
              
            </div>
            
            
          </div>
        </div>
        <div className='w-full flex justify-center'>

        <div className="flex flex-col items-end justify-between w-[80%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <button className="inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50">
            Next &nbsp;<ArrowRightOutlined/>
          </button>
            </h1>
            
          </div>
        </div>
      </section>
  )
}

export default BlogsListing
