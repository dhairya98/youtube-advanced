const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

// Step 1: Search Videos
export const searchYouTubeVideos = async (searchQuery = "") => {
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
    searchQuery
  )}&regionCode=IN&key=${YOUTUBE_API_KEY}`;

  const proxiedUrl = `${searchUrl}`;

  const searchResponse = await fetch(proxiedUrl);
  const searchData = await searchResponse.json();

  const videoIds = searchData.items.map((item) => item.id.videoId).join(",");
  return videoIds;
};

// Step 2: Get Full Video Details
export const getYouTubeVideoDetails = async (videoIds) => {
  const detailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
  const proxiedUrl = `${detailsUrl}`;
  console.log("Proxy", proxiedUrl);
  const detailsResponse = await fetch(proxiedUrl);
  const detailsData = await detailsResponse.json();

  const nonShorts = detailsData.items.filter((item) => {
    const duration = item.contentDetails.duration;
    return !isShortVideo(duration);
  });

  return nonShorts.slice(0, 30);
};

// Check if a video is a shorts
const isShortVideo = (duration) => {
  // v2 work
  return false;
};

// Autocomplete suggestions
export const YOUTUBE_SEARCH_API = (query) =>
  `https://thingproxy.freeboard.io/fetch/https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${encodeURIComponent(
    query
  )}`;
