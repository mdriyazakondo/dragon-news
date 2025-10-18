import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const Details = ({ newsDetails }) => {
  const { thumbnail_url, details } = newsDetails;
  console.log(newsDetails);
  return (
    <div>
      <div className="space-y-5 shadow border border-gray-300 rounded-md p-5">
        <img className="w-full " src={thumbnail_url} alt="" />
        <div>
          <p>{details}</p>
          <Link to="/category/0">
            <button className="flex items-center gap-2 mt-6 py-2 px-6 bg-red-500 text-white cursor-pointer rounded-sm text-xl font-semibold">
              <BsArrowLeft /> All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
