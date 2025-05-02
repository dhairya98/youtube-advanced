import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoMeta from "./VideoMeta";
import { getYouTubeVideoDetails } from "./utils/constants";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);
  const fetchVideoMeta = async () => {
    const data = await getYouTubeVideoDetails(searchParams.get("v"));
    console.log("Data", data);
    setVideoData(data);
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoMeta();
  }, []);

  const isHamburgerOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex flex-col flex-1">
      <div className="px-5 flex">
        <div>
          <iframe
            width={isHamburgerOpen ? "800" : "1050"}
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
            className="rounded-lg"
            auto
          ></iframe>
          {videoData && <VideoMeta videoData={videoData} />}
        </div>
        <div className="">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
