import React from "react";
import { Outlet } from "react-router";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-100px)]">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
