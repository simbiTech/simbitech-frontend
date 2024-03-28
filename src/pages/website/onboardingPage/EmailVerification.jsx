import React, { useEffect, useState } from "react";
import { brandlogo, envelope } from "./Images";

const EmailVerification = () => {
  const [storeData, setStoredData] = useState("");
  useEffect(() => {
    const storeItem = localStorage.getItem("email");
    if (storeItem) {
      setStoredData(storeItem);
    }
  });
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] font-source-sans-pro ">
        <div className="flex flex-col items-center gap-10 border-[1px] border-primarybase w-[90%] lg:w-[50%] p-5">
          <div className="flex items-center gap-2">
            <img src={brandlogo} alt="" />
            <p className="font-bold text-[32px]">SimbiTech</p>
          </div>
          <div>
            <p>Check your inbox to verify your email</p>
          </div>
          <div>
            <img src={envelope} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="opacity-50">We have sent a verification link to:</p>
            <p>{storeData}</p>
          </div>
          <p className="text-primarybase font-bold">Resend verification link</p>
        </div>
      </div>
    </>
  );
};

export default EmailVerification;
