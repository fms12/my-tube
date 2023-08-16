import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/redux/chatSlice';
import MoodOutlinedIcon from "@mui/icons-material/MoodOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { logRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from './ChatMessage';
import { Avatar } from '@mui/material';

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.message);
const dispatch = useDispatch();

useEffect(() => {
  const intervalId = setInterval(async () => {
    //API POLLING
    const name = await logRandomName();
    dispatch(
      addMessage({
        name: name,
        message: makeRandomMessage(20) + "👍",
      })
    );
  }, 500);
  return () => {
    clearInterval(intervalId);
  };
}, []);

  return (
    <div className="h-[600px] bg-[#0f0f0f] mt-10 max-md:w-[100vw]">
      <div className="w-[400px] border border-black rounded-t-lg bg-[#0f0f0f] max-md:w-[100vw]">
        <h1 className="font-bold border-b-2 border-black p-4 text-white">
          Live Chat
        </h1>
        <div className="space-y-2 overflow-y-scroll p-2 flex flex-col-reverse h-[398px] max-w-[100%]">
          {chatMessages.map((c, i) => (
            <ChatMessage
              key={i}
              name={c.name}
              message={c.message}
              profile={c.profile}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full h-[128px] p-4 relative  border border-black rounded-b-lg  flex-col flex "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Mayank",
              message: liveMessage,
              profile:
                "https://yt3.ggpht.com/ytc/AGIKgqMvrx-VsRxtYBr-OdVCl4HjNPvscRJpvkEQCQ84UA=s88-c-k-c0x00ffffff-no-rj-mo",
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="flex ">
          <Avatar
            className="!w-8 !h-8 mr-4"
            sx={{
              backgroundColor: "#eb4079",
            }}
          >
            M
          </Avatar>
          <span className="text-white">Mayank singh</span>
        </div>
        <div className="flex p-1 ml-11">
          <input
            type="text"
            className="w-[100%] border-none outline-none  dark:bg-zinc-700 p-2"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
            placeholder="Write your comment here"
          />
        </div>
        <div className="flex justify-between">
          <MoodOutlinedIcon className="text-white " />

          <button type="submit" className="">
            <SendOutlinedIcon className='text-white' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default LiveChat