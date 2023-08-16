import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/apiContent';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

function VideoContainer() {
    const [videos, setVidoes] = useState([]);
    useEffect(() => {
      getVideos();
    }, []);

    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVidoes(json.items);
    };
    return (
      <div className="bg-[#0f0f0f] px-[20px] py-[40px] pb-0 mt-14 relative w-full ">
        <div className="flex flex-wrap">
          {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}
          {videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      </div>
    );
}

export default VideoContainer