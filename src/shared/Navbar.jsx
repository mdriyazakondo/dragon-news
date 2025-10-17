import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-6 text-accent font-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <img src={user} alt="" />
        <button className="py-2 px-6 bg-primary text-white font-semibold cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
