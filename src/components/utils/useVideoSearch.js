import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getVideos } from "./getVideos";

export const useVideoSearch = () => {
  const selectedFilter = useSelector((state) => state.videoData.selectedFilter);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getVideos(selectedFilter);
        setVideos(data);
      } catch (err) {
        console.error("Video fetch failed:", err);
        setError("Failed to load videos. Please try again later.");
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [selectedFilter]);

  return { videos, selectedFilter, loading, error };
};
