import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import defaultUserImg from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex items-center justify-between py-4 px-8 ">
      <div className="text-2xl font-bold text-primary"></div>

      <div className="flex items-center gap-6 text-accent font-medium">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Career
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={user?.photoURL || defaultUserImg}
          alt="user"
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-[0_0_10px_2px_rgba(34,197,94,0.7)] "
        />

        {user ? (
          <button
            onClick={handleLogout}
            className="py-2 px-6 bg-primary text-white font-semibold rounded-md  cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="py-2 px-6 bg-primary text-white font-semibold rounded-md  cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
