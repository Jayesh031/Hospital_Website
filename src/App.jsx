import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
const App = () => {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
