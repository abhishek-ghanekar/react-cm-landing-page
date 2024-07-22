import { useEffect, useState } from 'react'
import { Routes, BrowserRouter , Route, useLocation} from 'react-router-dom'
import Home from './screens/home/Home'
import Service from './screens/Services/Service'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Careers from './screens/Careers/Careers'
import CaseStudies from './screens/Casestudies/CaseStudies'
import Roadmap from './screens/Roadmap/Roadmap'
import Blogs from './screens/Blogs/Blogs'
import useScrollToTop from './hooks/scrollToTop'
// Initialization for ES Users
import {
  Collapse,
  initTWE,
} from "tw-elements";
import useFetch from './hooks/useFetch'
import IndividualBlog from './screens/Blogs/IndividualBlog/IndividualBlog'
import CaseStudy from './screens/Casestudies/CaseStudy'
import ScrollToTop from './utils/ScrollToTop'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimatedRoutes from './AnimatedRoutes'

function App() {
  
  useEffect(() => {
    initTWE({ Collapse });
  },[])
  return (
    <>
    <BrowserRouter>
    {/* <ScrollToTop/> */}
      <AnimatedRoutes/>
    </BrowserRouter>
    </>
    
  )
}

export default App
