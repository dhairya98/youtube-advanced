import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "./utils/videoSlice";
const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Comedy",
  "Valentines",
  "Badminton",
  "Wrestling",
];

const ButtonList = ({ selectedButton }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    const value = item === "All" ? "hindi" : item;
    if (selectedButton !== value) {
      dispatch(changeFilter(value));
    }
  };
  return (
    <div className="relative w-full">
      <div className="flex overflow-x-auto scrollbar-hide">
        {list.map((item, idx) => {
          const isSelected = selectedButton === (item === "All" ? "" : item);
          return (
            <button
              key={idx}
              className={`px-5 py-2 m-2 cursor-pointer bg-gray-200 rounded-lg ${
                isSelected ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default ButtonList;
