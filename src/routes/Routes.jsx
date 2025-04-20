import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";
import SignUP from "../pages/SignUP";
import SignIN from "../pages/SignIN";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listed",
        Component: ListedBooks,
      },
      {
        path: "read",
        Component: PageToRead,
      },
      {
        path: "signUp",
        Component: SignUP,
      },
      {
        path: "signin",
        Component: SignIN,
      },
    ],
  },
]);

export default router;
