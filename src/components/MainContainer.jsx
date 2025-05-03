import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useVideoSearch } from "./utils/useVideoSearch";

const MainContainer = () => {
  const { videos, selectedFilter, loading, error } = useVideoSearch();
  return (
    <div className="mt-15">
      <ButtonList selectedButton={selectedFilter} />
      <VideoContainer videos={videos} loading={loading} error={error} />
    </div>
  );
};

export default MainContainer;
