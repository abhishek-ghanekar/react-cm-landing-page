import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import Footer from '../../components/Footer/Footer'
const CaseStudy = () => {
    const {id} = useParams()
    const [caseStudy,setCaseStudy] = useState({})
    const fetchData = () => {
        axios.get(`http://localhost:1337/api/casestudies/${id}?populate=*`).then(result => {
            console.log(result.data.data)
            setCaseStudy(result.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
useEffect(() => {
   fetchData()
  },[])
  return (
    <>
    
    <Navbar/>
    <div className='bg-white'>

    
    <section className="text-white body-font overflow-hidden w-full ">
  <div className="container px-5 py-8 mx-auto flex justify-center">
    <div className="lg:w-4/5 bg-[#282828] rounded-lg mx-auto flex flex-wrap justify-center">
    <div className="lg:w-1/2 px-4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        
        <h1 className="text-white text-3xl title-font font-medium mb-4">
        {caseStudy?.attributes?.Title} : {caseStudy?.attributes?.Description}
        </h1>
        <div className='w-full   flex flex-col'>
          <div className='flex h-1/2 border-b-2 border-white py-4'>
             <div className='w-1/2 flex flex-col'>
                 <p>Location</p>
                 <p>{caseStudy?.attributes?.Location}</p>
             </div>
             <div className='w-1/2'>
                 <p>Industry</p>
               <p>{caseStudy?.attributes?.Industry}</p>
             </div>
          </div>  
          <div className='flex h-1/2 py-4'>
             <div className='w-full flex flex-col gap-4'>
                 <p>ROI for {caseStudy?.attributes?.Title}</p>
                 <div className='flex gap-4'>
                    <div className='flex flex-col '>
                      <p>{caseStudy?.attributes?.TeamSize}</p>
                      <p>Team members</p>

                    </div>
                    <div className='flex flex-col'>
                      <p>{caseStudy?.attributes?.FundingSecured}</p>
                      <p>Funding Secured</p>

                    </div>
                 </div>
             </div>
          </div>  

        </div>   
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64  object-center rounded"
        src={`http://localhost:1337${caseStudy?.attributes?.CoverImage?.data.attributes?.url}`}
      />
    </div>
    
  </div>
  <div className="w-full px-12  mx-auto flex flex-col items-center">
  
         <div className="flex flex-col  justify-between w-[90%] mb-12 text-left">
         {caseStudy?.attributes?.Testimonial?.map((testimonial) => {
    return <>
        <p className="lg:w-[80%] w-full leading-relaxed text-black">
            
                {testimonial.TestimonialDescription}
        </p>
        <p className="lg:w-[80%] w-full leading-relaxed text-gray-500">
        
        {testimonial.ClientName}
      </p>
</>
   })}
          </div>
  </div>
  <div className="w-full px-12  mx-auto flex flex-col items-center">
         <div className="flex flex-col  justify-between w-[90%] mb-12 text-left text-black">
          
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
             About
            </h1>
            <p>
              {console.log(caseStudy?.attributes?.About)}
            {caseStudy?.attributes?.About}
            </p>
          </div>
  </div>
  <div className="w-full px-12  mx-auto flex flex-col items-center">
         <div className="flex flex-col  justify-between w-[90%] mb-12 text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
             Challenges
            </h1>
            <ul className='list-disc text-black'>
              {caseStudy?.attributes?.Challenges?.map((challenge) => {
                return <li>{challenge?.ChallengesDescription}</li>
              })}
            </ul>
            
          </div>
          
  </div>

  <div className='w-full px-12 bg-[#282828]'>
  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-12 sm:flex-row flex-col sm:justify-between ">
            <div className='relative'>
            
            <h1 className="sm:text-text-[41px]  text-[41px] font-medium title-font mb-2 text-[#CCEA17]">
                CodeMischief's Solution
            </h1>
            </div>
            
          </div>
          <div className="flex flex-wrap -m-4">
          {caseStudy?.attributes?.Solutions?.map((solution) => {
         return <div className="xl:w-1/2 md:w-1/2 p-4 border-[1px] border-white text-white">
         <div className="h-full flex flex-row  items-center sm:justify-start justify-center text-center sm:text-left">
      
       <div className="flex-grow ">
         <p className="mb-4">
          {solution?.Solution}
         </p>
         
       </div>
          </div>
           
         </div>
      })}
          </div>
        </div>
      </section>
  </div>
  <div className='w-full px-12'>
  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-12 sm:flex-row flex-col sm:justify-between ">
            <div className='relative'>
            
            <h1 className="sm:text-text-[41px]  text-[41px] font-medium title-font mb-2 text-[#363636]">
              Benefits
            </h1>
            </div>
            
          </div>
          <div className="flex flex-wrap -m-4">
          {caseStudy?.attributes?.Benefits?.map((benefit) => {
         return <div className="xl:w-1/2 md:w-1/2 p-4">
         <div className="h-full flex flex-row items-center sm:justify-start justify-center text-center sm:text-left">
         <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
<path d="M17.0508 29.8848C24.0924 29.8848 29.8008 24.1764 29.8008 17.1348C29.8008 10.0931 24.0924 4.38477 17.0508 4.38477C10.0092 4.38477 4.30078 10.0931 4.30078 17.1348C4.30078 24.1764 10.0092 29.8848 17.0508 29.8848Z" stroke="#363636"/>
<path d="M11.3842 17.1348L15.6342 21.3848L22.7175 12.8848" stroke="#363636"/>
</svg>
       <div className="flex-grow sm:pl-8 w-[90%]">
         <p className="mb-4">
          {benefit?.BenefitsDescription}
         </p>
         
       </div>
          </div>
           
         </div>
      })}
          </div>
        </div>
      </section>
  </div>
  <div className='w-full bg-[#363636] py-10'>

  
      <div className="flex flex-col gap-3 text-center w-[80%] items-center mx-auto ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font  gradient-text">
        {caseStudy?.attributes?.HowItHelped}
          {/* From <span className='bg-[#f2ffa2] p-[0.5px]'>Idea To Impact</span>: The Codemischief Methodology */}
        </h1>
      
      </div>
      </div>
</section>
</div>
<Footer/>
</>
  )
}

export default CaseStudy
