import React from 'react'
import Navbar from '../../components/Navbar'
import BlogsListing from './BlogsListing'
import Footer from '../../components/Footer/Footer'
const Blogs = () => {
  return (
    <div>
        <div className='bg-[#282828]'>

            <Navbar/>

        </div>

        <BlogsListing/>


        
        <Footer/>
    </div>
  )
}

export default Blogs
