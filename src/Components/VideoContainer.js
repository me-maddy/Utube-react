import { useSelector } from "react-redux";
import usePopularVideos from "../hooks/usePopularVideos";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const VideoContainer = ({ type }) => {
  usePopularVideos();
  const popularVideos = useSelector((store) => store.video.popularVideos);

  if (popularVideos?.length < 1 || !popularVideos) {
    return <ShimmerUI />;
  }

  return (
    <div
      className={
        type
          ? " w-full  py-1 gap-y-2.5 flex flex-wrap"
          : "py-2.5 w-full grid gap-y-6 gap-x-4 lg:gap-x-5 mt-2.5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4"
      }
    >
      {popularVideos?.map((video) => (
        <Link
          className={type && " w-full"}
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
