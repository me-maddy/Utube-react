import { useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import useCloseMenu from "../hooks/useCloseMenu";
import useGetVideoById from "../hooks/useGetVideoById";
import VideoDetails from "./VideoDetails";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  useCloseMenu();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const { snippet, statistics } = useGetVideoById(id);
  const { likeCount, viewCount, commentCount } = statistics;
  const { publishedAt, description, title, channelTitle } = snippet;
  const descArray = description.split("\n\n");
  const publishedDate = publishedAt.split("T")[0];

  const getLikeCount = (like) => {
    let count;

    if (like < 1000) {
      count = like;
      return count;
    } else if (like < 1000000) {
      count = (like / 1000).toFixed(1) + "K";
      return count;
    } else {
      count = (like / 1000000).toFixed(1) + "M";
      return count;
    }
  };

  const likes = getLikeCount(likeCount);
  const details = {
    title,
    likes,
    viewCount,
    descArray,
    publishedDate,
    channelTitle,
  };

  return (
    <div className="w-full gap-x-7 px-8 flex py-6">
      {/* Video Watch Section */}
      <div className="w-[66%]">
        <iframe
          width="560"
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
      <div className="w-[34%] overflow-hidden">
        <ButtonList />
        <VideoContainer type="watch-page" />
      </div>
    </div>
  );
};

export default WatchPage;
