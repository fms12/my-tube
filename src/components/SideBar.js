import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return
  if (!isMenuOpen) return (
  null
  );
  return (
    <div className="flex-[0.1] py-4 mt-14 bg-[#0f0f0f] sticky max-md:flex-[0]">
      <div className="w-[200px] max-sm:max-w-[2rem]">
        <Link to={"/"}>
        <SidebarRow selected Icons={HomeIcon} title="Home" />
        </Link>
        <SidebarRow Icons={WhatshotIcon} title="Trending" />
        <SidebarRow Icons={SubscriptionsIcon} title="Subscription" />
        <hr className="h-[1px] w-[200px] border-0 bg-[#222222] mt-3 mb-3" />
        <SidebarRow Icons={VideoLibraryIcon} title="Library" />
        <SidebarRow Icons={HistoryIcon} title="History" />
        <SidebarRow Icons={OndemandVideoIcon} title="Your videos" />
        <SidebarRow Icons={WatchLaterIcon} title="Watch Later" />
        <SidebarRow Icons={ThumbUpAltOutlinedIcon} title="Liked Video" />
        <SidebarRow Icons={ExpandMoreOutlinedIcon} title="Show more" />
        <hr className="h-[1px] w-[200px] border-0 bg-[#222222] mt-3 mb-3" />
        <div className="ml-16">
          <h1 className=" cursor-pointer  flex-1 text-[1rem] font-medium overflow-ellipsis overflow-hidden text-white delay-[2] max-sm:hidden">
            Subscriptions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
