import React, { useState } from 'react'
import Case1 from "../../assets/home/case-study-1.png"
import { ArrowLeftOutlined , ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Blog1 from "../../assets/blogs/blog-1.svg"
import Blog2 from "../../assets/blogs/blog-2.svg"
import Blog3 from "../../assets/blogs/blog-3.svg"
import Blog4 from "../../assets/blogs/blog-4.svg"
import axios from 'axios'
import { useEffect } from 'react'
import formatDate from '../../utils/ConvertDate'
const BlogsListing = () => {
  const [pageNumber,setPageNumber] = useState(1);
  const [blogs,setBlogs] = useState([])
  const handlePageChange = () => {
    setPageNumber((prev) => prev + 1)
  }
  useEffect(() => {
    axios.get(`http://localhost:1337/api/blogs?populate=*&pagination[page]=${pageNumber}&pagination[pageSize]=9`).then(result => {
     console.log(result)
     setBlogs(result?.data?.data)
     console.log(result?.data?.data)
    }).catch(err=> {
     console.log(err)
    }) 
   },[pageNumber])
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
          {blogs.map((item,index) => {
            return <Link to={`/blog/${item.id}`}>
             <div class="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-fill  object-center"
                src={`http://localhost:1337${item?.attributes?.CoverImage?.data?.attributes?.formats?.medium?.url}`}
                alt="blog"
              />
              <div className="p-6">
                
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {item.attributes.Title}
                </h1>
                
                <div className="flex items-center flex-wrap ">
                  <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
                  {formatDate(item.attributes.published)}
                    
                  </a>
                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                    
                  {item.attributes.TimeToRead}
                  </span>
                  
                </div>
              </div>
            </div>
  
  
            </div>
                          
            </Link>
          })}
          
          
        </div>
  </div>
</section>
              
            </div>
            
            
          </div>
        </div>
        <div className='w-full flex justify-center'>
        {/* <div className="flex flex-col items-start justify-between w-[80%] mb-12 text-left">
            
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <button className="inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50">
            Next &nbsp;<ArrowRightOutlined/>
          </button>
            </h1>
            
          </div> */}
        <div className="flex justify-between w-[80%] mb-12 text-left px-4 py-4">
           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <button className={`inline-flex  items-center  text-white font-thin   border-0 py-1 px-3 focus:outline-none ${pageNumber === 1 ? "bg-slate-500" : "bg-black"} rounded text-base mt-4 md:mt-0 z-50`} onClick={() => {
              setPageNumber((prev) => prev - 1)
            }}
            disabled={pageNumber === 1}
            >
            <ArrowLeftOutlined/>&nbsp; Prev
          </button>
            </h1>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <button className="inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50" onClick={() => {
              setPageNumber((prev) => prev + 1)
            }}>
            Next &nbsp;<ArrowRightOutlined/>
          </button>
            </h1>
            
          </div>
        </div>
      </section>
  )
}

export default BlogsListing
