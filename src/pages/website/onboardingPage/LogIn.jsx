import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";
import { Input } from "antd";
import { brandlogo, google, line } from "./Images";

const LogIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/verify");
  };
  return (
    <>
      <div className="bg-login-bg1  bg-cover bg-center bg-no-repeat h-[100vh] font-source-sans-pro relative flex justify-center items-center">
        <div className="bg-[#800080] absolute w-full flex justify-center items-center opacity-90 inset-0"></div>
        <div className="flex flex-col bg-greybase border-[4px] border-b-[#F9DBBD] border-r-[#F9DBBD] w-[100%] md:w-[90%] lg:w-[35%] mx-auto rounded-xl p-10 gap-10 text-[16px] relative">
          <div className="flex flex-col justify-center text-cente gap-6">
            <div className="flex items-center gap-2 justify-center">
              <img src={brandlogo} alt="" className="w-[30px]" />
              <span className="font-bold text-[32px]"> SimbiTech</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-bold text-[32px]">Log In</p>
              <p className="font-normal">Welcome back, let’s thrive today</p>
            </div>
            <button className="flex items-center justify-center gap-3 bg-white w-full p-3 rounded-md border-[1px] border-primarybase border-opacity-[0.2]">
              <img src={google} alt="" className="w-[20px]" />{" "}
              <span className="text-[15px] font-normal opacity-[0.5]">
                Continue with Google
              </span>
            </button>
            <div className="flex items-center gap-3 opacity-[0.5]">
              <img src={line} alt="" className="h-[1px] w-[50%]" />
              <p>OR</p>
              <img src={line} alt="" className="h-[1px] w-[50%]" />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <Input.Password
                placeholder="Enter your email address"
                type="email"
                required
                className=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="pwd">Password</label>
              <Input.Password
                placeholder="Enter your password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="accent-primarybase"
                />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <p>
                <Link to="/forgot-password">
                  {" "}
                  <span className="text-primarybase underline">
                    Forget password?
                  </span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                type="submit"
                name="submit"
                className="bg-[#FBE7D3] after:flex rounded-sm text-center w-full py-2 font-bold"
              >
                Log In
              </button>
              <p>
                Don't have an account?
                <a href="">
                  <Link to="/signup">
                    <span className="text-primarybase underline">sign up</span>
                  </Link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
