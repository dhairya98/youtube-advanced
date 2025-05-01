import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useVideoSearch } from "./utils/useVideoSearch";

const MainContainer = () => {
  const { videos, selectedFilter } = useVideoSearch();
  return (
    <div>
      <ButtonList selectedButton={selectedFilter} />
      <VideoContainer videos={videos} />
    </div>
  );
};

export default MainContainer;
