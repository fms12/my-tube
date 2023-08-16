import { Avatar } from "@mui/material";
import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div>
      <div className="flex items-center p-1 shadow-md rounded-md min-w-[25rem] w-[100%]">
        <Avatar className="!w-8 !h-8 ">{name[0]}</Avatar>
        <span className="font-bold px-2  text-[#686868]">{name}</span>
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
