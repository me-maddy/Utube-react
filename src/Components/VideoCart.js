import { useSelector } from "react-redux";

const VideoCart = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={`py-3 cursor-pointer hover:shadow transition-shadow duration-150 ease-in-out px-3 m-2 shadow-lg ${
        isMenuOpen ? "w-[360px]" : "w-[412px]"
      } `}
    >
      <div>
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className={`rounded-lg hover:scale-105 transition-transform duration-150 ease-in-out ${
            isMenuOpen ? "w-[348px]" : "w-[400px]"
          } w-[348px] `}
        />
      </div>

      <ul className="mt-2">
        {" "}
        <li className="text-lg font-semibold">
          {title.length > 48 ? title.slice(0, 46) + "..." : title}
        </li>
        <li className="text-gray-600 font-medium">{channelTitle}</li>
        <li className="text-gray-600 font-medium">
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCart;
