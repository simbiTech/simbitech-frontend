import React from "react";
import "../../styles/LandingPage.css";
import About from "../../components/website/About";
import NavBar from "../../components/website/Navbar";
import HeroSection from "../../components/website/Hero";
import Service from "../../components/website/Services";


export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Service />
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
