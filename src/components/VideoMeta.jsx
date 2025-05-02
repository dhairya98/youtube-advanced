import React from "react";

const ActionButton = ({ icon, label }) => {
  return (
    <button className="flex items-center px-3 py-1 border border-gray-300 cursor-pointer rounded-full text-sm hover:bg-gray-100 transition">
      <span>{icon}</span>
      {label && <span className="ml-1">{label}</span>}
    </button>
  );
};

const VideoMeta = () => {
  return (
    <div className="px-5 mt-4">
      <h1 className="text-xl font-semibold mb-2">
        How to Extend or Limit the YouTube Quota Usage (YouTube Data API V3)
      </h1>

      <div className="flex justify-between flex-wrap items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
            alt="channel"
            className="rounded-full w-12 h-12"
          />
          <div>
            <div className="font-semibold">Nirman Sonawane</div>
            <div className="text-sm text-gray-600">6 subscribers</div>
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
          <ActionButton icon="👍" label="42" />
          <ActionButton icon="👎" />
          <ActionButton icon="🔗" label="Share" />
          <ActionButton icon="⬇️" label="Download" />
          <ActionButton icon="🔖" label="Save" />
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">7.3K views • 5 years ago</div>

      <div className="mt-2 bg-gray-100 p-3 rounded text-sm">
        How to guide created from MyGuide-Creator Application ...
      </div>
    </div>
  );
};

export default VideoMeta;
