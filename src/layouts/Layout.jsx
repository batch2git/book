import React from "react";
import { Outlet } from "react-router";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
