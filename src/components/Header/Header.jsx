import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-2 my-6">
      <img src={logo} alt="" />
      <p className="text-accent font-semibold ">
        Journalism Without Fear or Favour
      </p>

      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE  , MMMM  MM  yyyy")}
      </p>
    </div>
  );
};

export default Header;
