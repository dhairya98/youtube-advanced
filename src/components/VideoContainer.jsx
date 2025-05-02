import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ videos, watch }) => {
  return (
    <div
      className={`${
        watch
          ? "flex flex-col"
          : "grid sm:grid-cols-1 lg:grid-cols-3 gap-4 items-stretch"
      }`}
    >
      {videos.map((video) => (
        <div key={video.id} className="h-full ">
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} watch={watch} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
