import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { changeFilter } from "./utils/videoSlice";

const Sidebar = () => {
  const isHamburgerOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isHamburgerOpen) return null;

  return (
    <div className="p-4 fixed top-17 left-0 h-screen w-full lg:w-64 shadow-lg bg-white flex-shrink-0 text-gray-800 space-y-6 z-50">
      <div className="space-y-2">
        <SidebarItem to="/" label="Home" />
        <SidebarItem label="Shorts" />
        <SidebarItem label="Videos" />
        <SidebarItem label="Live" />
      </div>

      <hr className="border-gray-200" />
      <div>
        <h2 className="font-semibold text-sm mb-2">Subscriptions</h2>
        <div className="space-y-1 text-sm text-gray-700">
          <SidebarItem label="Music" />
          <SidebarItem label="Sports" />
          <SidebarItem label="Gaming" />
          <SidebarItem label="Movies" />
        </div>
      </div>

      <hr className="border-gray-200" />

      <div>
        <h2 className="font-semibold text-sm mb-2">Watch Later</h2>
        <div className="space-y-1 text-sm text-gray-700">
          <SidebarItem label="Kids" />
          <SidebarItem label="Motivation" />
          <SidebarItem label="Grooming" />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, label }) => {
  const selectedFilter = useSelector((state) => state.videoData.selectedFilter);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    const value = item === "All" ? "" : item;
    if (selectedFilter !== value) {
      dispatch(changeFilter(value));
    }
  };
  const isSelected = selectedFilter === label;
  const content = (
    <div
      className={`px-2 py-1 rounded hover:bg-gray-100 cursor-pointer 
      ${isSelected ? "bg-gray-100" : ""} ${to ? "mb-2" : ""}`}
      onClick={() => handleClick(label)}
    >
      {label}
    </div>
  );
  return to ? <Link to={to}>{content}</Link> : content;
};

export default Sidebar;
