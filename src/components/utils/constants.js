const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

// Step 1: Search Videos
export const searchYouTubeVideos = async (searchQuery = "") => {
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
    searchQuery
  )}&regionCode=IN&key=${YOUTUBE_API_KEY}`;

  const searchResponse = await fetch(searchUrl);
  const searchData = await searchResponse.json();

  const videoIds = searchData.items.map((item) => item.id.videoId).join(",");
  return videoIds;
};

// Step 2: Get Full Video Details (snippet + statistics + contentDetails)
export const getYouTubeVideoDetails = async (videoIds) => {
  const detailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`;

  const detailsResponse = await fetch(detailsUrl);
  const detailsData = await detailsResponse.json();

  // Filter out shorts
  const nonShorts = detailsData.items.filter((item) => {
    const duration = item.contentDetails.duration;
    return !isShortVideo(duration);
  });

  return nonShorts.slice(0, 30); // LIMIT to 30 videos max
};

// Helper: Check if video is a Short
const isShortVideo = (duration) => {
  // ISO format: PT45S, PT1M2S, etc
  // if (duration?.includes("M") || duration?.includes("H")) {
  //   return false; // not a short
  // }
  return false; // only seconds => short
};

export const YOUTUBE_SEARCH_API =
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";
