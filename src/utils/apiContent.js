// import { configDotenv } from "dotenv";


export const YOUTUBE_VIDEOS_API =
  "https://proxy.cors.sh/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://proxy.cors.sh/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT =10;
