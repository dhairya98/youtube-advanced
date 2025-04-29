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
  return (
    <div>
      <iframe
        width="1200"
        height="600"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?&autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        auto
      ></iframe>
    </div>
  );
};

export default Watch;
