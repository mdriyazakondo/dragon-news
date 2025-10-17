import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";

const NewsCart = ({ category }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    category;

  // Format ISO date to readable form (e.g., Apr 22, 2025)
  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="max-w-full bg-white shadow-md rounded-2xl p-5 border border-gray-300">
      {/* Header: author + share */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name || "author"}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{author?.name}</h4>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CiBookmark className="text-gray-700 text-lg cursor-pointer  w-6 h-6" />
          <FaShareAlt className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 w-6 h-6" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="rounded-xl w-full mb-3 object-cover"
      />

      {/* Details with Read More */}
      <p className="text-gray-600 text-sm mb-3">
        {details?.length > 220 ? (
          <>
            {details.slice(0, 220)}...{" "}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Tags */}
      <p className="text-xs text-gray-500 mb-3">
        <span className="font-semibold text-gray-700">Tags: </span>
        {tags?.map((t, i) => (
          <span
            key={t}
            className={`inline-block text-xs mr-2 px-2 py-1 rounded-full border ${
              i === 0 ? "bg-gray-100" : "bg-transparent"
            }`}
          >
            {t}
          </span>
        ))}
      </p>

      {/* Footer: rating & views */}
      <div className="flex items-center justify-between border-t pt-3">
        <div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center text-orange-500">
              {Array.from({ length: rating?.number || 0 }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {rating?.number}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye className="text-lg" />
          <span className="text-sm font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
