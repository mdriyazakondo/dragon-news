import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/Header/LatestNews";
import Navbar from "../shared/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="mx-5 lg:mx-0">
      <header>
        <Header />
        <section className="max-w-6xl mx-auto w-full ">
          <LatestNews />
        </section>
        <nav className="max-w-[1500px] mx-auto w-full mt-10 ">
          <Navbar />
        </nav>
      </header>
      <main className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 my-12 gap-8">
        <aside className="grid-cols-1 md:col-span-2 sticky top-0 h-fit">
          <LeftAside />
        </aside>
        <section className="main_nav grid-cols-1 md:col-span-7">
          <Outlet />
        </section>
        <aside className="grid-cols-1 md:col-span-3 sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
