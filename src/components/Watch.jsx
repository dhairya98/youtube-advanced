import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  console.log("Url search params", searchParams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });
  return <div>Watch Page</div>;
};

export default Watch;
