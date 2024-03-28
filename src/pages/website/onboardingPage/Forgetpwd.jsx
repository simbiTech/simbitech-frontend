import React from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";
import { Input } from "antd";

const Forgetpwd = () => {
  const navigate = useNavigate();

  const validateForm = (e) => {
    navigate("/login");
  };
  return (
    <>
      <div className="bg-login-bg1 bg-cover bg-center bg-no-repeat h-[100vh] font-source-sans-pro relative flex justify-center items-center text-[16px]">
        <div className="bg-primarybase absolute w-full flex justify-center items-center opacity-80 inset-0"></div>
        <div className="flex flex-col bg-greybase border-[4px] border-b-[#F9DBBD] border-r-[#F9DBBD] w-[unset] md:w-[35%] rounded-xl gap-10 p-10 relative">
          <div className="flex flex-col justify-center text-center gap-2">
            <p className="font-bold text-[32px] tracking-wide">
              {" "}
              Reset your password
            </p>
            <p>
              Fill in your details to Reset your password.
            </p>
          </div>
          <form onSubmit={validateForm} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                required
                className="flex p-2 rounded-md border-[1px] border-primarybase border-opacity-[0.2] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">New password</label>
              <Input.Password
                placeholder="New password"
                type="password"
                id="Password"
                name="pwd"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="newPassword">Confirm password</label>
              <Input.Password
                placeholder="Confirm password"
                type="password"
                name="confirmpwd"
                id="newPassword"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              {/* {error && <p className="text-[red]">{error}</p>} */}
              <button
                type="submit"
                name="submit"
                id="submit"
                className="bg-[#FBE7D3] after:flex rounded-sm text-center w-full py-2"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgetpwd;
