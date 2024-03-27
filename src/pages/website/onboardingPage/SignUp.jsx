import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";
import { Input} from "antd";
import { Ebook, brandlogo, video } from "./Images";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMassage] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  };

  const validateForm = (e) => {
    localStorage.setItem("email", value);
    e.preventDefault();
    navigate("/verify");
  };

  const handleMassageChange = () => {
    setMassage(!message);
  };

  return (
    <>
      <div className="bg-[rgb(251,231,211)] flex items-center h-[100vh]">
        <div className="bg-primarybase font-source-sans-pro flex gap-5 py-5">
          <div className="flex flex-col w-[45%] py-3 gap-16">
            <div>
              <div className="flex justify-end">
                <img src={video} alt="" className="w-[100px]" />
              </div>
              <div className=" flex items-center justify-center text-white gap-2 relative bottom-8 -mb-8">
                <img src={brandlogo} alt="" className="bg-white rounded-full" />
                <p className="text-bold text-4xl">SimbiTech</p>
              </div>
            </div>
            <div
              className="text-white italic text-[32px] w-[573px] text-center leading-tight font-normal"
              style={{ fontFamily: "sourcesans" }}
            >
              {message ? (
                <p>
                  "Unlock your tech potential and pave your own digital future
                  with Simbitech – Empowering Women in Tech!"
                </p>
              ) : (
                <p>
                  “You are one click closer to limitless opportunities in the
                  world of digital technology!”
                </p>
              )}
            </div>
            <div className="flex pl-28">
              <img src={Ebook} alt="" className="w-[104px] h-[112px]" />
            </div>
          </div>
          <div className="flex flex-col bg-greybase border-[4px] border-b-[#F9DBBD] border-r-[#F9DBBD] w-[35%] h-full rounded-xl gap-5 p-10">
            <div className="flex flex-col justify-center text-center gap-2">
              <p className="font-bold text-2xl tracking-wide">
                {" "}
                Sign Up to Create an Account
              </p>
              <p className="text-[13px]">
                Fill in your details to start your career as a woman in Tech.
              </p>
            </div>
            <form onSubmit={validateForm} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  value={value}
                  onChange={handleChange}
                  className="flex p-2 rounded-md border-[1px] border-primarybase border-opacity-[0.2] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Create password</label>
                <Input.Password
                  placeholder="Create password"
                  type="password"
                  id="Password"
                  name="pwd"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newPassword">Re-enter password</label>
                <Input.Password
                  placeholder="Re-enter password"
                  type="password"
                  name="confirmpwd"
                  id="newPassword"
                  required
                />
              </div>
              <div className="flex text-[14px] gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  onClick={handleMassageChange}
                  required
                  className="relative bottom-2 accent-primarybase border-primarybase"
                />
                <p className="leading-tight">
                  By creating an account you agree to the{" "}
                  <span className="text-primarybase">Terms of Use</span> and our{" "}
                  <span className="text-primarybase">
                    Data Processing Agreement
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {/* {error && <p className="text-[red]">{error}</p>} */}
                <button
                type="submit"
                name="submit"
                id="submit"
                  className="bg-[#FBE7D3] after:flex rounded-sm text-center w-full py-2"
                >
                  Create account
                </button>
                <p>
                  Already have an account?{" "}
                  <a href="">
                    <Link to="/login">
                      <span className="text-primarybase underline">Login</span>
                    </Link>
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-between pl-5  py-11">
            <img src={video} alt="" className="w-[100px]" />
            <img src={Ebook} alt="" className="w-[104px] h-[112px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
