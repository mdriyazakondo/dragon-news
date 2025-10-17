import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary py-2 px-3">latest</p>
      <Marquee className="" pauseOnHover={true}>
        <p className="font-semibold text-gray-600 cursor-pointer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          incidunt dolore odio aut blanditiis sint rerum non, debitis veritatis
          dignissimos?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
