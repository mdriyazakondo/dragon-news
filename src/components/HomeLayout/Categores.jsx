import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/demo-data/categories.json").then((res) =>
  res.json()
);

const Categores = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h4 className=" font-semibold text-xl">
        All Cetegores ({categories.length})
      </h4>
      <div className="flex flex-col space-y-1 mt-4">
        {categories?.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={`btn bg-base-100 hover:bg-base-200 border-none font-semibold`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categores;
