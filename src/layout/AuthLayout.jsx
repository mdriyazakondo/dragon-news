import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";

const AuthLayout = () => {
  return (
    <div className="max-w-[1500px] mx-auto my-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
