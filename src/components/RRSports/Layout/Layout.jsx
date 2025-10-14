import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../../../containers/Footer";

const Layout = () => {
  return (
    <div className="bg-all w-full overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
