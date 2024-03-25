import React from 'react'
import '../../styles/LandingPage.css'
import NavBar from './Navbar.jsx';
import HeroSection from './Hero.jsx';


export default function LandingPage () {
  return(
    <>
      <Header />
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