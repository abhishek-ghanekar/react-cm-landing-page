import React from 'react'
import Navbar from '../../components/Navbar'
import BlogsListing from './BlogsListing'
const Blogs = () => {
  return (
    <div>
        <div className='bg-[#282828]'>

            <Navbar/>

        </div>

        <BlogsListing/>


        

    </div>
  )
}

export default Blogs
