import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Category from "../pages/Category/Category";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: () => fetch(`../demo-data/news.json`),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news",
    element: <h4>News</h4>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
