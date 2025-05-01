import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { getYouTubeVideoDetails, searchYouTubeVideos } from "./utils/constants";
import { Link } from "react-router-dom";
import { getVideos } from "./utils/getVideos";

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
