import { useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import useCloseMenu from "../hooks/useCloseMenu";
import useGetVideoById from "../hooks/useGetVideoById";
import VideoDetails from "./VideoDetails";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { getMinimizedNum } from "../utils/helper";

const WatchPage = () => {
  useCloseMenu();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const videoDetails = useGetVideoById(id);
  if (!videoDetails) return;

  const { snippet, statistics } = videoDetails;
  const { likeCount, viewCount, commentCount } = statistics;
  const { publishedAt, description, title, channelTitle } = snippet;
  const descArray = description.split("\n\n");
  const publishedDate = publishedAt.split("T")[0];

  const likes = getMinimizedNum(likeCount);
  const details = {
    title,
    likes,
    viewCount,
    descArray,
    publishedDate,
    channelTitle,
  };

  return (
    <div className="w-full dark:text-white gap-x-4 lg:gap-x-7 px-5 flex-col md:flex-row lg:px-8 flex py-6">
      {/* Video Watch Section */}
      <div className=" w-full md:w-[66%]">
        <iframe
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video w-full rounded-xl"
        ></iframe>
        <VideoDetails details={details} />
        <CommentsContainer commentCount={commentCount} />
      </div>

      {/* Recommended  Section */}
      <div className="md:w-[34%] w-full overflow-hidden">
        <ButtonList />
        <LiveChat />
        <VideoContainer type="watch-page" />
      </div>
    </div>
  );
};

export default WatchPage;
