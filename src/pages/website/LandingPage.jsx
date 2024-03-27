import React from "react";
import "../../styles/LandingPage.css";
import About from "../../components/website/About";
import Header from "../../components/website/Header";
import Service from "../../components/website/Services";
import SuccessStory from "../../components/website/Success";


export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Service />
      <SuccessStory />
    </>
  );
}

