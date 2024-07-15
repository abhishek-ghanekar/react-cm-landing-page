import { useState } from 'react'
import { Routes, BrowserRouter , Route} from 'react-router-dom'
import Home from './screens/home/Home'
import Service from './screens/Services/Service'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Careers from './screens/Careers/Careers'

function App() {
  

  return (
    
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='careers' element={<Careers/>}/>
       </Routes>
    </BrowserRouter>
    
  )
}

export default App
