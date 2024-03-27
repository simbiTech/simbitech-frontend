import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/website/LandingPage'
import LogIn from './pages/website/onboardingPage/LogIn';
import SignUp from './pages/website/onboardingPage/SignUp';
import EmailVerification from './pages/website/onboardingPage/EmailVerification';
import Forgetpwd from './pages/website/onboardingPage/Forgetpwd';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/forgetpwd' element={<Forgetpwd/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/verify' element={<EmailVerification/>}/>
    </Routes>
  )
}

export default App
