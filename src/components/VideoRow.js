import React from 'react'
import { Link } from 'react-router-dom';

function VideoRow({data}) {
  const {snippet,id} = data;
   const { channelTitle, title, thumbnails } = snippet;
  return (
    <Link to={`/watch?v=${id.videoId}`}>
      <div className="flex mb-[30px] max-w-[1000px] max-sm:min-w-[300px] ">
        <img
          className=" w-[351px] h-[251px] rounded-xl object-contain max-sm:min-w-[180px] max-sm:min-h-[200px] "
          src={thumbnails?.high?.url}
          alt={snippet?.title}
        />
        <div className="ml-[14px] max-w-[623px] max-sm:min-w-[150px] ">
          <h3 className="text-white text-[20px] max-sm:text-[10px] max-sm:mt-12  font-extrabold">
            {snippet?.title}
          </h3>
          <p className="text-[#7d7d7d] text-[12px] max-sm:text-[1px] ">
            {snippet?.ChannelTitle}.
            {/* <span className="p-[2px]">
            <span className="font-bold ">subs</span> Subscribe
            </span>
          234k views . 2min ago */}
          </p>
          <p className="mt-[20px] text-[12px] text-[white]">
            {snippet?.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoRow