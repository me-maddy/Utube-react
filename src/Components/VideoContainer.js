import { useSelector } from "react-redux";
import usePopularVideos from "../hooks/usePopularVideos";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = ({ type }) => {
  const popularVideos = useSelector((store) => store.video.popularVideos);
  usePopularVideos();

  if (popularVideos.length === 0 || !popularVideos) {
    return;
  }

  return (
    <div
      className={
        type
          ? " w-full  py-1 gap-y-2.5 flex flex-wrap"
          : "py-2.5 w-full flex gap-y-4 gap-x-2 flex-wrap"
      }
    >
      {popularVideos.map((video) => (
        <Link
          className={type && "w-full"}
          key={video?.id}
          to={"/watch?v=" + video.id}
        >
          <VideoCart info={video} type={type} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
