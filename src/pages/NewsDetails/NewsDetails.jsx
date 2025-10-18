import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../../shared/Navbar";
import RightAside from "../../components/HomeLayout/RightAside";
import Details from "./Details";
import Header from "../../components/Header/Header";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState({});
  const newsDetails = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const news = newsDetails.find((item) => item.id === id);
    setNewsData(news);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-12 mt-8 gap-8">
        <section className=" grid-cols-1 md:col-span-8">
          <h2 className="text-xl font-bold text-gray-600 mb-4">Dragon News </h2>
          <Suspense fallback={<h4>Loading</h4>}>
            <Details newsDetails={newsData} />
          </Suspense>
        </section>
        <aside className="grid-cols-1 md:col-span-4 sticky">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
