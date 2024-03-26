import React from "react";
import "../../styles/LandingPage.css";
import About from "../../components/website/About";
import NavBar from "../../components/website/Navbar";
import HeroSection from "../../components/website/Hero";


export default function LandingPage() {
  return (
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
  );
}
