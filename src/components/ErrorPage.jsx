import React from "react";
import { useRouteError } from "react-router-dom";
import errorBg from "../assets/error.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="h-[calc(100vh-70px)] w-full min-h-[300px] flex items-center justify-center bg-center bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${errorBg})`,
      }}
    ></div>
  );
};

export default ErrorPage;
