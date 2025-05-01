import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`${isSidebarOpen ? "ml-72" : "ml-0"} flex-1 overflow-y-auto`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
