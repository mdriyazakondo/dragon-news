import React from "react";
import imag1 from "../../assets/swimming.png";
import imag2 from "../../assets/class.png";
import imag3 from "../../assets/playground.png";

const QZoon = () => {
  return (
    <div className="bg-base-300 p-4 rounded-md">
      <h4 className="text-xl font-semibold ">Q-Zone</h4>
      <div className="flex items-center justify-center w-full flex-col mt-5 space-y-5">
        <img src={imag1} alt="" className="w-full" />
        <img src={imag2} alt="" className="w-full" />
        <img src={imag3} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default QZoon;
