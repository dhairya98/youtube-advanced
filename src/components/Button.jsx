import React from "react";

const Button = ({ name, onClick, className }) => {
  return (
    <div>
      <button
        className={`px-5 py-2 m-2 cursor-pointer bg-gray-200 rounded-lg ${className}`}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
