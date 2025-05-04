const YOUTUBE_API_KEYS = [
  import.meta.env.VITE_YT_KEY_1,
  import.meta.env.VITE_YT_KEY_2,
  import.meta.env.VITE_YT_KEY_3,
  import.meta.env.VITE_YT_KEY_4,
];

const fetchWithKeyFallback = async (buildUrlFn) => {
  for (let i = 0; i < YOUTUBE_API_KEYS.length; i++) {
    const key = YOUTUBE_API_KEYS[i];
    const url = buildUrlFn(key);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) return data;

      if (response.status === 403 || response.status === 429) {
        console.warn(`API key #${i + 1} exhausted or restricted. Trying next`);
        continue;
      }

      throw new Error(data.error?.message || "YouTube API Error");
    } catch (err) {
      console.error(`Key #${i + 1} failed:`, err.message);
      if (i === YOUTUBE_API_KEYS.length - 1) throw err;
    }
  }
};

// Step 1: Search Videos
export const searchYouTubeVideos = async (searchQuery = "") => {
  const data = await fetchWithKeyFallback(
    (key) =>
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${encodeURIComponent(
        searchQuery
      )}&regionCode=IN&key=${key}`
  );

  const videoIds = data.items?.map((item) => item.id.videoId).join(",");
  return videoIds;
};

// Step 2: Get Full Video Details
export const getYouTubeVideoDetails = async (videoIds) => {
  const data = await fetchWithKeyFallback(
    (key) =>
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds}&key=${key}`
  );

  const nonShorts = data.items?.filter((item) => {
    const duration = item.contentDetails?.duration;
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
export const YOUTUBE_SEARCH_API = async (query) => {
  const data = await fetchWithKeyFallback(
    (key) =>
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(
        query
      )}&key=${key}`
  );
  return data.items;
};
