import React from "react";

const VideoCard = ({ info, watch, search }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={`transition-transform duration-200 hover:scale-105 hover:shadow-lg rounded-lg flex ${
        watch || search ? "p-2 flex-row items-start" : "p-2 m-2 flex-col"
      }`}
    >
      <img
        className={`rounded-lg ${watch ? "h-20 mr-5" : search ? "mr-5" : ""}`}
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className={`font-bold ${watch ? "p-0" : "py-2"} wrap-break-word`}>
          {title.slice(0, watch ? 20 : search ? 70 : 50) + "..."}
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border-red-900 border-2">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
