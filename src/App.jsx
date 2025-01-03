import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Marquee from 'react-fast-marquee'
import Logo from './assets/Logo.png'
const App = () => {
  return (
    <>

    <Marquee className='string text-xl' direction='left' >This is Marquee</Marquee>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <FloatingWhatsApp accountName='Indrayani Hospital' phoneNumber='+91 8424006872' statusMessage='Always available for you' avatar={Logo} buttonStyle={{background:'green'}} />
      </Router>
    </>
  )
}

export default App
