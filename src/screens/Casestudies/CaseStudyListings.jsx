import React, { useEffect, useState } from 'react'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Case1 from "../../assets/home/case-study-1.png"
import Markdown from 'react-markdown'
import useFetch from '../../hooks/useFetch'
import axios from "axios"
import remarkGfm from 'remark-gfm';
const CaseStudyListings = () => {
  const [caseStudyData,setCaseStudyData] = useState([])
  const [pageNumber,setPageNumber] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const fetchCaseStudies = () => {
    // we fetch the case studies here
    axios.get(`http://localhost:1337/api/casestudies?populate=*&pagination[page]=${pageNumber}&pagination[pageSize]=3`).then(res => {
       console.log(res?.data?.meta)
       setTotalPages(res?.data?.meta?.pagination.pageCount)
       setCaseStudyData(res?.data?.data)
       console.log(res.data.data)
    }).catch(err=> console.log(err)) 
  }
  useEffect(() => {
    fetchCaseStudies()
  },[])

  return (
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
         <div className="flex flex-col  justify-between w-[90%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
             <ArrowLeftOutlined/> Case Studies
            </h1>
            <p className="w-full leading-relaxed text-gray-500">
             Witness real-world transformations fueled by our innovative software solutions. Explore how we empower businesses of all sizes to achieve their goals. Dive into success stories showcasing how we tackled specific challenges and delivered measurable results. See for yourself how Codemischief software can be your partner in achieving success.


            </p>
          </div>
          <div className="flex flex-col items-center -m-4 w-[90%]">
            {console.log(caseStudyData.length)}
            {caseStudyData?.map((item) => {
               return <div className="xl:w-[70%] md:w-[70%] p-4">
                            <section className="text-gray-600 body-font overflow-hidden ">
                  <div className="container  px-5  mx-auto">
                    <div className="w-full bg-[#282828] rounded-md p-4 mx-auto flex flex-wrap">
                      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        
                        <h1 className="text-white text-3xl title-font font-medium mb-4">
                          {console.log(item.attributes.Title)}
                          {item.attributes.Title}
                        </h1>
                        
                        <p className="leading-relaxed mb-4 text-white">
                            
                            {item.attributes.Description}
                        </p>
                        <div className="flex gap-2 mb-4">
                          <a className=" text-white font-thin py-2 px-4 bg-[#363636] rounded-md  text-base ">
                          {item.attributes.Industry}
                          </a>
                          
                        </div>
                        
                        <div className="flex">
                          <Link to={`/casestudy/${item.id}`}>
                          
                          <span className="title-font font-thin text-base text-[#CCEA17] flex items-center">
                            Read case Study <div className='p-2'><ArrowRightOutlined style={{
                              marginTop : '5px'
                            }}/> </div> 
                          </span>
                            </Link>
                          
                        </div>
                      </div>
                      <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                        src={`http://localhost:1337${item.attributes?.CoverImage?.data.attributes?.url}`}
                      />
                    </div>
                  </div>
                </section>
                 
               </div>
            })}
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
            <button className={`inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50 ${pageNumber === 1 ? "bg-slate-500" : "bg-black"}`}
              disabled={pageNumber == 1}
            onClick={() => {
              setPageNumber((prev) => prev - 1)
            }}
            // disabled={pageNumber === 1}
            >
            <ArrowLeftOutlined/>&nbsp; Prev
          </button>
            </h1>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            <button className={`inline-flex text-black items-center bg-[#373737] text-white font-thin   border-0 py-1 px-3 focus:outline-none bg-black  rounded text-base mt-4 md:mt-0 z-50 ${pageNumber === totalPages ? "bg-slate-500" : "bg-black"}`} onClick={() => {
              setPageNumber((prev) => prev + 1)
            }}
            disabled={pageNumber == totalPages}
            
            >
            Next &nbsp;<ArrowRightOutlined/>
          </button>
            </h1>
            
          </div>
        </div>
        </div>
      </section>
    
  )
}

export default CaseStudyListings
