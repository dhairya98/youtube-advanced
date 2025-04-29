import React from "react";
import Button from "./Button";

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

const ButtonList = () => {
  return (
    <div className="relative w-full">
      <div className="flex overflow-x-auto scrollbar-hide">
        {list.map((item, idx) => (
          <Button key={idx} name={item} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default ButtonList;
