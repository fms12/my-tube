import { Avatar } from '@mui/material';
import moment from "moment";
import numeral from "numeral";
import React from 'react'


function VideoCard({info}) {

 const { snippet, statistics, contentDetails } = info;
 const { channelTitle, title, thumbnails,publishedAt } = snippet;
 return (
   <div className="w-full shadow-lg mb-[40px] p-4">
     <img
       className="max-h-[239px] min-w-[394px] aspect-video object-cover rounded-xl hover:rounded-none max-sm:min-w-[0] max-md:min-w-[0] max-[1024px]:min-w-[0]"
       src={thumbnails.medium.url}
       alt="Thumbnail Not Found"
     />
     <div className="flex mt-[10px] pr-[30px] max-w-[20rem] ">
       <Avatar className="!h-[40px] !w-[40px]" />
       <div className="ml-[12px]  p-2">
         <h3 className="mb-[5px] text-white font-bold text-sm tracking-[0rem]">
           {title}
         </h3>
         <p className=" text-xs text-[#717171] font-bold whitespace-nowrap ">
           {channelTitle.length > 20
             ? channelTitle.substring(0, 20) + "..."
             : channelTitle}
         </p>
         <p className="text-xs text-[#757474] font-medium ">
           {numeral(statistics?.viewCount).format("0.a")} views .{" "}
           {moment(publishedAt).fromNow()}
         </p>
       </div>
     </div>
   </div>
 );
}

export default VideoCard