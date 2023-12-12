import { useEffect, useState } from "react";
import { Youtube_API } from "../utils/constant";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_API);
    const json = await data.json();
    setVideos(json.items);
  };

  if (!videos) {
    return;
  }

  return (
    <div className="py-2.5 flex gap-y-4 gap-x-2 flex-wrap">
      {videos.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCart info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
