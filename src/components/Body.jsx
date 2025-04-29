import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Watch from "./Watch";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
