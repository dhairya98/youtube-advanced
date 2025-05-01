import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ videos }) => {
  return (
    <div className="grid grid-cols-3 gap-4 items-stretch">
      {videos.map((video) => (
        <div key={video.id} className="h-full ">
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
