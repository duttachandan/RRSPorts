import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../containers";
import ManagmentNavbar from "./ManagmentNavbar";

const ManagmentLayout = () => {
  return (
    <div className="bg-all w-full overflow-hidden">
      <ManagmentNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ManagmentLayout;
