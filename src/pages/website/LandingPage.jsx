import React from 'react'
import '../../styles/LandingPage.css'
import { brandlogo } from './onboardingPage/Images';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate()
  
  return (
    <div className="h-screen ma-w-[1040px]">
      <div className=" bg-cover bg-no-repeat bg-center h-full w-full bg-hero-bg bg-purple text-white overflow-hidden">
        <div className=" flex flex-col justify-between h-[80%]">
          <div className=" flex items-center justify-between px-[5%] w-full mt-4">
            <div className="flex items-center gap-5">
              <div className="bg-lilac rounded-[50%]">
                <img src={brandlogo} alt="" />
              </div>
              <h1 id="top" className="text-2rem font-bold">
                SimbiTech
              </h1>
            </div>

            <ul className=" hidden lg:flex  justify-between items-center w-4/6 text-[1rem] font-semibold">
              <li>
                <button className=" hover:bg-black-100 hover:rounded-[4px] px-2 h-[40px]">
                  Home
                </button>
              </li>
              <li>
                <button className=" hover:bg-black-100 hover:rounded-[4px] px-2 h-[40px]">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:bg-black-100 hover:rounded-[4px] px-2 h-[40px]">
                  Road Map
                </button>
              </li>
              <li>
                <button className="hover:bg-black-100 hover:rounded-[4px] px-2 h-[40px]">
                  Sponsorship
                </button>
              </li>
              <li>
                <button
                  className=" border-buttonbg border-2 rounded-[4px] px-[12px] py-2"
                  onClick={() => navigate("/login")}
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-wrap justify-between items-center h-[40%]">
            <h1 className="text-[1.5em] lg:text-[3em] text-center">
              Learn, Build and <span>Lead</span> in Tech
            </h1>
            <h2 className="text-[1.2em] lg:text-[2.1em] text-center w-[80%]">
              Unlocking Girl-Powered Potential to Elevate Her{" "}
              <span>Future in Tech</span>
            </h2>
            <h4 className="text-[0.9em] lg:text-[1.5em]">
              To join the Tech revolution
            </h4>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/signup")}
              className="w-[30%] mds:w-[20%] h-[55px] bg-buttonbg text-[#151415] font-semibold text-[1.2rem] rounded-[4px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage