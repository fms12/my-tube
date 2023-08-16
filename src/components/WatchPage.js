import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/redux/appSlice';
import CommentsContainer from './CommentsContainer';

function WatchPage() {
  const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
    useEffect(() => {
      window.scrollTo(0, 0);
    });
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },[dispatch])
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className=" basis-2/3 flex flex-col lg:px-5 py-10">
        <iframe
          className="w-full max-w-xl lg:max-w-full aspect-video m-auto"
          src={`//www.youtube.com/embed/${id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
          allowFullScreen="allowFullScreen"
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="flex felx-1 grow-0 basis-[0.00000001]">
        <LiveChat />
      </div>
    </div>
    // <div className="flex flex-row w-[100%] min-h-[100vh] p-10 bg-[#0f0f0f] justify-center items-center align-middle flex-[0.9]">
    //   <div className="m-4 p-10 flex flex-col w-[100%] h-[100%] ">
    //     <div className="w-[100%] h-[100%] ">
    //       <iframe
    //         className="max-w-[70em] object-fill m"
    //         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    //         title="YouTube video player"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       ></iframe>
    //     </div>
    //     <CommentsContainer />
    //   </div>
    //
    //   <div className="w-full pt-10"></div>
    // </div>
  );
}

export default WatchPage