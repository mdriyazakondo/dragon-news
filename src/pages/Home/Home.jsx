import React from "react";
import { Navigate } from "react-router";

const Home = () => {
  return <Navigate to={"/category/1"} />;
};

export default Home;
