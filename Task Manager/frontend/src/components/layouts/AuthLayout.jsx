import React from "react";
import LoginSvg from "../../assets/Login.svg";

function AuthLayout({ children }) {
  return (
    <div className="flex justify-between">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-[calc(100vh-1rem)] items-center justify-center bg-blue-100 rounded-2xl my-2">
        <img src={LoginSvg} alt="Login Illustration" />
      </div>
    </div>
  );
}

export default AuthLayout;
