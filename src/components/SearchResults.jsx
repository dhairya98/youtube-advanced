import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { changeFilter } from "./utils/videoSlice";
import VideoContainer from "./VideoContainer";
import { useVideoSearch } from "./utils/useVideoSearch";
import Head from "./Head";

const SearchResults = () => {
  const selectedFilter = useSelector((state) => state.videoData.selectedFilter);
  const { videos } = useVideoSearch();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(changeFilter(searchParams.get("v")));
  });
  return (
    <div>
      {videos && (
        <div>
          <Head />
          <VideoContainer videos={videos} />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
