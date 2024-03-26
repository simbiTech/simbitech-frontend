import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/website/LandingPage'
import LogIn from './pages/website/onboardingPage/LogIn'
import SignUp from './pages/website/onboardingPage/SignUp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default App
