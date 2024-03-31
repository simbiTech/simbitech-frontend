import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";
import { Input, message } from "antd";
import { Ebook, brandlogo, video } from "./Images";

const SignUp = () => {
  const navigate = useNavigate();
  const [messages, setMassages] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = passwords;
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      message.error("Passwords did not match!");
      return;
    }
    const regexNumber = /[0-9]/;
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const isNumberValid = regexNumber.test(password);
    const isLowerCaseValid = regexLowercase.test(password);
    const isUpperCaseValid = regexUppercase.test(password);
    const isSpecialCharValid = regexSpecialChar.test(password);
    const isLengthValid = password.length >= 12;

    if (
      !isNumberValid||
      !isLowerCaseValid ||
      !isUpperCaseValid ||
      !isSpecialCharValid ||
      !isLengthValid
    ) {
      setPasswordError(
        "Password must have at least one lowercase, one uppercase, one number one special character, and be at least 12 characters long."
      );
      return;
    }
    message.success('Account created successfully, verify your Email to continue');
    localStorage.setItem("email", email.value);
    navigate("/verify");
  };

  const handleMassageChange = () => {
    setMassages(!messages);
  };

  return (
    <>
      <div className="bg-[rgb(251,231,211)] flex items-center h-screen md:h-[100vh] text-[16px]">
        <div className="bg-primarybase font-source-sans-pro flex gap-5 py-5 w-full">
          <div className="hidden md:flex flex-col w-[45%] py-3 gap-16">
            <div>
              <div className="flex justify-end">
                <img src={video} alt="" className="w-[100px]" />
              </div>
              <div className="flex items-center justify-center text-white gap-2 relative bottom-8 -mb-8">
                <img src={brandlogo} alt="" className="bg-white rounded-full" />
                <p className="text-bold text-[40px]">SimbiTech</p>
              </div>
            </div>
            <div
              className="text-white italic text-[32px] w-[573px] text-center leading-tight font-normal"
              style={{ fontFamily: "sourcesans" }}
            >
              {messages ? (
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
          <div className="flex flex-col bg-greybase border-[4px] border-b-[#F9DBBD] border-r-[#F9DBBD] w-[100%] mx-auto md:mx-[unset] lg:w-[35%] h-full rounded-xl gap-10 p-5 md:p-10">
            <div className="flex flex-col justify-center text-center gap-2">
              <p className="font-bold text-[32px]">
                Sign Up to Create an Account
              </p>
              <p>
                Fill in your details to start your career as a woman in Tech.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  title="Enter your Email to continue"
                  value={passwords.email}
                  onChange={handleChange}
                  className="flex p-3 rounded-md border-[1px] border-primarybase border-opacity-[0.2] outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Create password</label>
                <Input.Password
                  placeholder="Create password"
                  type="password"
                  id="Password"
                  name="password"
                  title="Password must have lowercase,uppercase, number special character, and must be 12 characters"
                  value={passwords.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="newPassword">Re-enter password</label>
                <Input.Password
                  placeholder="Re-enter password"
                  type="password"
                  id="newPassword"
                  name="confirmPassword"
                  title="Confirm your Password"
                  value={passwords.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="checkbox"
                  title="Click to accept our T&C"
                  onClick={handleMassageChange}
                  required
                  className="relative bottom-4 accent-primarybase border-primarybase"
                />
                <p className="leading-tight text-[15px]">
                  By creating an account you agree to the{" "}
                  <span className="text-primarybase">Terms of Use</span> and our{" "}
                  <span className="text-primarybase">
                    Data Processing Agreement
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
                <button
                  type="submit"
                  name="submit"
                  id="submit"
                  title="Click to Register"
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
          <div className="hidden md:flex flex-col justify-between py-11 mx-auto">
            <img src={video} alt="" className="w-[100px]" />
            <img src={Ebook} alt="" className="w-[104px] h-[112px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
