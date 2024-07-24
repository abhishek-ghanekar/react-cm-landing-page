import React from 'react'
import CoreIcon from "../../../assets/about/core-1.png"
import Team1 from "../../../assets/about/team1.png"
import Team2 from "../../../assets/about/team2.png"
import Team3 from "../../../assets/about/team3.png"
import Team4 from "../../../assets/about/team4.png"
import Team5 from "../../../assets/about/team5.png"
import FadeUpBounce from '../../../animations/FadeUpBounce'
const MeetTheTeam = () => {
  return (
    <section className="text-gray-600 body-font ">
    <div className="container px-5 py-8 mx-auto">
      <div className="flex flex-wrap w-full mb-9">
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Meet The Team
          </h1>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">

        
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex justify-center w-full">
          

          
          <div className=" p-6 rounded-lg relative flex flex-col items-center md:w-[60%] w-full  border-[0.8px] border-black">
         
        
            <img
              className="h-full w-full rounded object-center mb-6"
              src={Team1}
              alt="content"
            />
            
            <div className='absolute w-[70%] rounded-tr-md rounded-bl-md h-8  left-0 bottom-0 text-xs border-t-[0.8px] border-t-black border-r-[0.8px] border-r-black border-b-[0.8px] border-b-white border-l-[0.8px] border-l-white' style={{
                outline: '1px solid transparent',
                outlineOffset: '1.2px',
                boxShadow: '0 1.2px 0 1.2px #ffffff'
            }}
>  
<div className='text-[12px] mt-[3px]'>

<h1 className='text-[14px] font-medium'>Ramakrishna Adiyodi</h1>

<p>Managing Director</p>
</div>
              
            </div>
      
          </div>
          
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex justify-center w-full">
      <div className="border-[0.8px] border-black p-6 rounded-lg md:w-[60%] w-full relative flex flex-col items-center">
     
          <img
              className="h-full w-full rounded object-center mb-6"
              src={Team2}
              alt="content"
            />
            
            <div className='absolute w-[70%] rounded-tr-md rounded-bl-md h-8  left-0 bottom-0 text-xs border-t-[0.8px] border-t-black border-r-[0.8px] border-r-black border-b-[0.8px] border-b-white border-l-[0.8px] border-l-white' style={{
                outline: '1px solid transparent',
                outlineOffset: '1.2px',
                boxShadow: '0 1.2px 0 1.2px #ffffff'
            }}
>  
<div className='text-[12px] mt-[3px]'>

<h1 className='text-[14px] font-medium'>Prashant Adiyodi</h1>

<p>Chief Mentor</p>
</div>
              
            </div>
          </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex justify-center w-full">
      <div className="border-[0.8px] border-black p-6 rounded-lg md:w-[60%] w-full relative flex flex-col items-center">
      
         <img
              className="h-full w-full rounded object-center mb-6"
              src={Team3}
              alt="content"
            />
            
            <div className='absolute w-[70%] rounded-tr-md rounded-bl-md h-8  left-0 bottom-0 text-xs border-t-[0.8px] border-t-black border-r-[0.8px] border-r-black border-b-[0.8px] border-b-white border-l-[0.8px] border-l-white' style={{
                outline: '1px solid transparent',
                outlineOffset: '1.2px',
                boxShadow: '0 1.2px 0 1.2px #ffffff'
            }}
> 
             <div className='text-[12px] mt-[3px]'>
              <h1 className='text-[14px] font-medium'>Priyanka Nambiar</h1>

              <p>Advisor - Admin and HR</p>
              </div>
            </div>
          </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex justify-center w-full">
      <div className="border-[0.8px] border-black p-6 rounded-lg md:w-[60%] w-full relative flex flex-col items-center">
      
          <img
              className="h-full w-full rounded object-center mb-6"
              src={Team4}
              alt="content"
            />
            
            <div className='absolute w-[70%] rounded-tr-md rounded-bl-md h-8  left-0 bottom-0 text-xs border-t-[0.8px] border-t-black border-r-[0.8px] border-r-black border-b-[0.8px] border-b-white border-l-[0.8px] border-l-white' style={{
                outline: '1px solid transparent',
                outlineOffset: '1.2px',
                boxShadow: '0 1.2px 0 1.2px #ffffff'
            }}
> 
            <div className='text-[12px] mt-[3px]'>
                <h1 className='text-[13px] font-medium'>Mayuri Pawar</h1>
                <p>Product Manager</p>
            </div>
            </div>
          </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4 flex justify-center w-full">
          <div className="border-[0.8px] border-black p-6 rounded-lg md:w-[60%] w-full relative flex flex-col items-center">
      
          <img
              className="h-full w-full rounded object-center mb-6"
              src={Team5}
              alt="content"
            />
           
            <div className='absolute w-[70%] rounded-tr-md rounded-bl-md h-8  left-0 bottom-0 text-xs border-t-[0.8px] border-t-black border-r-[0.8px] border-r-black border-b-[0.8px] border-b-white border-l-[0.8px] border-l-white' style={{
                outline: '1px solid transparent',
                outlineOffset: '1.2px',
                boxShadow: '0 1.2px 0 1.2px #ffffff'
            }}
> 
            <div className='text-[12px] mt-[3px]'>
              <h1 className='text-[14px] font-medium'>Pareena Mathur</h1>

              <p>Sales And Marketing Manager</p>
              </div>
            </div>
          </div>
      </div>
      
    </div>
    </div>
  </section>
  )
}

export default MeetTheTeam
