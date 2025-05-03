import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Head from "./Head";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      <Head />
      <div className="flex">
        <Sidebar />
        <div
          className={`${
            isSidebarOpen ? "ml-72" : "ml-0"
          } flex-1 overflow-y-auto`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
