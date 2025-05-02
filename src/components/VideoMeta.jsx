import React from "react";

const ActionButton = ({ icon, label }) => {
  return (
    <button className="flex items-center px-3 py-1 border border-gray-300 cursor-pointer rounded-full text-sm hover:bg-gray-100 transition">
      <span>{icon}</span>
      {label && <span className="ml-1">{label}</span>}
    </button>
  );
};

const VideoMeta = ({ videoData }) => {
  const { channelTitle, description, thumbnails, title, publishedAt } =
    videoData[0]?.snippet || {};
  const { likeCount, viewCount, commentCount } = videoData[0]?.statistics || {};

  return (
    <div className="px-5 mt-4">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>

      <div className="flex justify-between flex-wrap items-center">
        <div className="flex items-center space-x-4">
          <img
            src={thumbnails?.default?.url}
            alt="channel"
            className="rounded-full w-12 h-12"
          />
          <div>
            <div className="font-semibold">{channelTitle}</div>
            <div className="text-sm text-gray-600">
              {commentCount} subscribers
            </div>
          </div>
          <button className="ml-4 bg-black text-white px-4 py-1 rounded-full flex items-center space-x-2">
            <span>Subscribe</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4M5 17h5"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
          <ActionButton icon="👍" label={likeCount} />
          <ActionButton icon="👎" />
          <ActionButton icon="🔗" label="Share" />
          <ActionButton icon="⬇️" label="Download" />
          <ActionButton icon="🔖" label="Save" />
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        {viewCount / 1000}k views • Posted on{" "}
        {new Date(publishedAt).toLocaleDateString()}
      </div>

      <div className="mt-2 bg-gray-100 p-3 rounded text-sm">
        {description.slice(0, 100) + "..."}
      </div>
    </div>
  );
};

export default VideoMeta;
