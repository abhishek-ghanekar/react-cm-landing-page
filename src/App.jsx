import { useEffect, useState } from 'react'
import { Routes, BrowserRouter , Route} from 'react-router-dom'
import Home from './screens/home/Home'
import Service from './screens/Services/Service'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Careers from './screens/Careers/Careers'
import CaseStudies from './screens/Casestudies/CaseStudies'
import Roadmap from './screens/Roadmap/Roadmap'
import Blogs from './screens/Blogs/Blogs'

// Initialization for ES Users
import {
  Collapse,
  initTWE,
} from "tw-elements";

function App() {
  useEffect(() => {

    initTWE({ Collapse });
  },[])
  return (
    
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path='/team' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/casestudies' element={<CaseStudies/>}/>
          <Route path='/roadmap' element={<Roadmap/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
       </Routes>
    </BrowserRouter>
    
  )
}

export default App
