import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getVideos } from "./getVideos";

export const useVideoSearch = () => {
  const selectedFilter = useSelector((state) => state.videoData.selectedFilter);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("UseEffect triggered", selectedFilter);

    const fetch = async () => {
      const data = await getVideos(selectedFilter);
      setVideos(data);
    };
    fetch();
  }, [selectedFilter]);

  return { videos, selectedFilter };
};
