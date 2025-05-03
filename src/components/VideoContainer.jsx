import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";

const VideoContainer = ({ videos, watch, search, loading, error }) => {
  const layoutClass = watch
    ? "flex flex-col"
    : search
    ? "grid grid-cols-1"
    : "grid sm:grid-cols-1 lg:grid-cols-3 gap-4 items-stretch";

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error"
          className="w-24 h-24 mb-4 opacity-80"
        />
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Something went wrong!
        </h2>
        <p className="text-gray-600 text-sm">
          We've hit our quota limit for the YouTube API.
          <br />
          Please try again after some time.
        </p>
      </div>
    );
  }

  return (
    <div className={layoutClass}>
      {loading
        ? Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="p-3">
              <ShimmerCard watch={watch} search={search} />
            </div>
          ))
        : videos.map((video) => (
            <div key={video.id} className={`h-full ${search ? "w-full" : ""}`}>
              <Link to={"/watch?v=" + video.id}>
                <VideoCard info={video} watch={watch} search={search} />
              </Link>
            </div>
          ))}
    </div>
  );
};

export default VideoContainer;
