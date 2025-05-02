import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoMeta from "./VideoMeta";
import { getYouTubeVideoDetails } from "./utils/constants";
import Head from "./Head";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);
  const fetchVideoMeta = async () => {
    const data = await getYouTubeVideoDetails(searchParams.get("v"));
    setVideoData(data);
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoMeta();
  }, []);

  const isHamburgerOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <Head />
      <div className="flex flex-col flex-1 px-5 mt-15">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="flex-1">
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${searchParams.get(
                  "v"
                )}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allowFullScreen
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
            {videoData && <VideoMeta videoData={videoData} />}

            <div className="mt-6">
              <CommentsContainer />
            </div>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <LiveChat />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
