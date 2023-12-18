import { useSelector } from "react-redux";
import { getMinimizedNum } from "../utils/helper";

const VideoCart = ({ info, type }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const views = getMinimizedNum(statistics?.viewCount);

  return (
    <div
      className={
        type
          ? " cursor-pointer  grid grid-flow-col gap-x-2 w-full"
          : ` cursor-pointer mr-2 my-2 ${
              isMenuOpen ? "w-[360px]" : "w-[412px]"
            } `
      }
    >
      <div className={type && "col-span-7"}>
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className={
            type
              ? "rounded-lg w-44"
              : `rounded-lg hover:scale-105 transition-transform duration-150 ease-in-out ${
                  isMenuOpen ? "w-[348px]" : "w-[400px]"
                } w-[348px] `
          }
        />
      </div>

      <ul className={type ? "col-span-4 " : "mt-2"}>
        {" "}
        <li
          className={type ? "text-base font-medium" : "text-lg font-semibold"}
        >
          {type
            ? title.length > 42
              ? title.slice(0, 40) + "..."
              : title
            : title.length > 48
            ? title.slice(0, 46) + "..."
            : title}
        </li>
        <div className="flex gap-x-1.5">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="User"
            className="h-6 cursor-pointer"
          />
          <li
            className={`text-gray-600 font-medium ${
              type ? "text-sm" : "text-base"
            }`}
          >
            {channelTitle}
          </li>
        </div>
        <li
          className={`text-gray-600 ml-[30px] font-medium ${
            type ? "text-sm" : "text-base"
          }`}
        >
          {views} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCart;
