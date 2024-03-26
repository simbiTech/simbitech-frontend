import React from 'react'
import '../../styles/LandingPage.css'
import NavBar from './Components/Navbar.jsx';
import HeroSection from './Components/Hero.jsx';
import About from './Components/About.jsx';


export default function LandingPage () {
  return(
    <>
      <Header />
      <About />
    </>
  );
}

function Header() {
  return (
    <header>
      <NavBar />
      <HeroSection />
    </header>
  )
}