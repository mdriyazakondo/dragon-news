import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCart from "./NewsCart";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryData(data);
      return;
    } else if (id == "1") {
      const categoris = data.filter(
        (category) => category.others.is_today_pick == true
      );
      setCategoryData(categoris);
      return;
    } else {
      const categoris = data.filter((category) => category.category_id == id);
      setCategoryData(categoris);
    }
  }, [data, id]);

  return (
    <div>
      <h3 className="text-xl font-semibold  mb-4">
        Category news ({categoryData.length})
      </h3>
      <div className="grid grid-cols-1 gap-5">
        {categoryData.map((caregory, i) => (
          <NewsCart key={i} category={caregory} />
        ))}
      </div>
    </div>
  );
};

export default Category;
