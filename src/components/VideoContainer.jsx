import React, { useEffect, useState } from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { getYouTubeVideoDetails, searchYouTubeVideos } from "./utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const videoIds = await searchYouTubeVideos("");
    const videosWithStats = await getYouTubeVideoDetails(videoIds);
    setVideos(videosWithStats);
  };
  return (
    <div className="flex flex-wrap">
      {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
