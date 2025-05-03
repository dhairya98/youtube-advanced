const YOUTUBE_API_KEY = "AIzaSyAM8wrfe3xo4m_TZR46XDw4qycQpbYpsCo";
const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

// Step 1: Search Videos
export const searchYouTubeVideos = async (searchQuery = "") => {
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
    searchQuery
  )}&regionCode=IN&key=${YOUTUBE_API_KEY}`;

  const proxiedUrl = `${CORS_PROXY}${searchUrl}`;

  const searchResponse = await fetch(proxiedUrl);
  const searchData = await searchResponse.json();

  const videoIds = searchData.items.map((item) => item.id.videoId).join(",");
  return videoIds;
};

// Step 2: Get Full Video Details
export const getYouTubeVideoDetails = async (videoIds) => {
  const detailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${YOUTUBE_API_KEY}`;
  const proxiedUrl = `${CORS_PROXY}${detailsUrl}`;

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
  `${CORS_PROXY}${encodeURIComponent(
    `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${query}`
  )}`;
