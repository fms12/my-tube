import React, { useState } from "react";
import { useEffect } from "react";
import {  useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/apiContent";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchResult() {
  const [searchQuery, setSearchQuery] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    fetchSearchResultData();
  }, []);

  async function fetchSearchResultData() {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=${process.env.REACT_APP_API_KEY}`
    );
    const json = await data.json();
    setSearchQuery(json?.items);
  }
    const uniqueResults = {};
    searchQuery.forEach((result) => {
      const key = `${result.id.kind}-${
        result.id.videoId || result.id.channelId
      }`;
      uniqueResults[key] = result;
    });

    const resultsToRender = Object.values(uniqueResults);

  return (
    <div className="flex-[0.8] px-[20px] py-[20px] ">
      <div className="flex items-center text-white !text-xs">
        <h2 className="ml-[10px]">FILTER</h2>
        <TuneOutlinedIcon />
      </div>

      {/* <hr className="h-[1px] border-0 bg-gray-300 mt-[10px] mb-[10px]" /> */}

      {resultsToRender.map((result) => (
        <React.Fragment key={result.id.kind + "-" + result.id.videoId}>
          {result.id.kind === "youtube#video" && <VideoRow data={result} />}
          {result.id.kind === "youtube#channel" && <ChannelRow data={result} />}
        </React.Fragment>
      ))}
    </div>
  );
}


export default SearchResult