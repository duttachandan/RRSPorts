import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../containers";
import ManagmentNavbar from "./ManagmentNavbar";

const ManagmentLayout = () => {
  return (
    <>
      <ManagmentNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ManagmentLayout;
