import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-bold ">Find Us On</h3>
      <div className="w-full mt-4">
        <div className="join join-vertical w-full ">
          <button className="btn join-item w-full justify-start bg-base-100 hover:bg-base-200 text-blue-600">
            <FaFacebook className="w-5 h-5" /> Facebook
          </button>
          <button className="btn join-item w-full justify-start bg-base-100 hover:bg-base-200 text-blue-400">
            <FaTwitter className="w-5 h-5" /> Twitter
          </button>
          <button className="btn join-item w-full justify-start bg-base-100 hover:bg-base-200 ">
            <CiInstagram className="w-5 h-5 text-orange-500" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
