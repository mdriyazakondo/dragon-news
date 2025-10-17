import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";

const MayiLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MayiLayout;
