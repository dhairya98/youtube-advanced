import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { changeFilter } from "./utils/videoSlice";
import VideoContainer from "./VideoContainer";
import { useVideoSearch } from "./utils/useVideoSearch";
import Head from "./Head";

const SearchResults = () => {
  const selectedFilter = useSelector((state) => state.videoData.selectedFilter);
  const { videos, loading, error } = useVideoSearch();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(changeFilter(searchParams.get("v")));
  }, [searchParams]);
  return (
    <div className="mt-14">
      {videos && (
        <div>
          {/* <Head /> */}
          <VideoContainer
            videos={videos}
            search={true}
            loading={loading}
            error={error}
          />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
