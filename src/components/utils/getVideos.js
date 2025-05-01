import { getYouTubeVideoDetails, searchYouTubeVideos } from "./constants";

export const getVideos = async (search = "") => {
  const videoIds = await searchYouTubeVideos(search);
  const videosWithStats = await getYouTubeVideoDetails(videoIds);
  return videosWithStats;
};
