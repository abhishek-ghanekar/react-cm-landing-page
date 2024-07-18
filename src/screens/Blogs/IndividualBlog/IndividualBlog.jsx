import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Markdown from 'react-markdown'
const IndividualBlog = () => {

    const {id} = useParams();
    console.log(id)
    const item = {}
    const [blogData,setBlogdData] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:1337/api/blogs/${id}?populate=*`).then(result => {
            setBlogdData(result.data.data)
            console.log(result.data.data)
           }).catch(err=> {
            console.log(err)
           }) 
    },[])
  return (
    <div>
      {/* here we have an individual blog */}
      <div className='bg-[#282828]'>

        <Navbar/>
      </div>
      <div className='w-full flex flex-col items-center '>
      <div className='w-[80%]'>
      <img   src={`http://localhost:1337${blogData?.attributes?.CoverImage?.data?.attributes?.formats?.large?.url}`} className='w-full'/>

      </div>
       <div className='flex w-[80%] flex-col-reverse md:flex-row'>
         <div className='w-[20%] h-[200px] '>
             <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0  rounded-md  pl-3 py-1 relative  transition ease-in-out ">
                    <p className="  leading-relaxed text-base text-[#8A8A8A]">
                       Published
                    </p>
                    <h2 className=" text-lg title-font font-medium ">
                      {blogData?.attributes?.published}
                    </h2>
        
             </div>
             <div className="group flex flex-col w-full sm:text-left text-center mt-6 sm:mt-0  rounded-md   pl-3 py-1 relative  transition ease-in-out ">
                    <p className="  leading-relaxed text-base text-[#8A8A8A]">
                       Author
                    </p>
                    <h2 className=" text-lg title-font font-medium ">
                      {blogData?.attributes?.author}
                    </h2>
        
             </div>
        
         </div>
         <div className='w-[80%] h-full  markdown-text'>
           <Markdown className="w-full">
            {blogData?.attributes?.Content}
           </Markdown>
         </div>
       </div>
        


        {/* up next  */}
        <div className='w-[80%]'>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            
                <div class="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-fill  object-center"
                    src={`http://localhost:1337${blogData?.attributes?.CoverImage?.data?.attributes?.formats?.large?.url}`}
                    alt="blog"
                />
                <div className="p-6">
                    
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item?.attributes?.Title}
                    </h1>
                    
                    <div className="flex items-center flex-wrap ">
                    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
                    {item?.attributes?.published}
                        
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        
                    {item?.attributes?.TimeToRead}
                    </span>
                    
                    </div>
                </div>
                </div>
    
    
                </div>
                <div class="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-fill  object-center"
                    src="http://localhost:1337/uploads/large_blog_cover_113e372c9a.png"
                    alt="blog"
                />
                <div className="p-6">
                    
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item?.attributes?.Title}
                    </h1>
                    
                    <div className="flex items-center flex-wrap ">
                    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
                    {item?.attributes?.published}
                        
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        
                    {item?.attributes?.TimeToRead}
                    </span>
                    
                    </div>
                </div>
                </div>
    
    
                </div>
                <div class="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-fill  object-center"
                    src="http://localhost:1337/uploads/large_blog_cover_113e372c9a.png"
                    alt="blog"
                />
                <div className="p-6">
                    
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item?.attributes?.Title}
                    </h1>
                    
                    <div className="flex items-center flex-wrap ">
                    <a className="text-[#8A8A8A] text-[17px] inline-flex items-center md:mb-2 lg:mb-0">
                    {item?.attributes?.published}
                        
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        
                    {item?.attributes?.TimeToRead}
                    </span>
                    
                    </div>
                </div>
                </div>
    
    
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default IndividualBlog
