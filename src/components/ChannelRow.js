import { Avatar } from '@mui/material'
import React from 'react'

function ChannelRow({data}) {
    const { snippet, id } = data;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex items-center w-[70%] mb-20 mt-[20px] border border-white border-t-0 border-l-0 border-r-0 p-4 max-sm:w-[100%] max-w-[]">
      <Avatar
        className="!h-[138px] !w-[128px] my-[10px] mx-[60px] max-sm:my-0  max-sm:mx-0 max-sm:mr-3"
        alt={title}
        src={thumbnails?.high?.url}
      />
      <div className="flex flex-col">
        <h4 className="flex items-center justify-between text-lg text-white font-extrabold" >{channelTitle}</h4>
        <p className="!text-sm text-[#606060]">{}</p>
        <p className="!text-sm text-[#606060]">{snippet.description}</p>
      </div>
    </div>
  );
}

export default ChannelRow