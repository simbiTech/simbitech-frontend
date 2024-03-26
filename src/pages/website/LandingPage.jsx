import React from 'react'
import '../../styles/LandingPage.css'


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
    <div>
      <h1>LandingPage</h1>
    </div>
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