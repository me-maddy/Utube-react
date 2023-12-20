import { getMinimizedNum } from "../utils/helper";

const VideoCart = ({ info, type }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const views = getMinimizedNum(statistics?.viewCount);

  return (
    <div className={`w-full cursor-pointer ${type && "flex gap-x-2"}`}>
      <div className={type ? "w-48 " : "w-full"}>
        <img
          src={thumbnails?.medium?.url}
          alt="thumbnail"
          className={
            type
              ? "rounded-lg w-full"
              : `rounded-lg hover:scale-105 transition-transform duration-150 ease-in-out w-full`
          }
        />
      </div>

      <ul className={type ? "w-full " : "mt-2"}>
        {" "}
        <li
          className={
            type
              ? "text-sm xl:text-base font-medium"
              : "text-sm sm:text-base lg:text-lg font-semibold"
          }
        >
          {type
            ? title.length > 30
              ? title.slice(0, 27) + "..."
              : title
            : title.length > 48
            ? title.slice(0, 46) + "..."
            : title}
        </li>
        <div className="flex  items-center gap-x-1 sm:gap-x-1.5">
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="User"
            className={
              type ? "lg:h-6 h-5 cursor-pointer" : "h-6 cursor-pointer"
            }
          />
          <li
            className={`text-gray-600 font-medium ${
              type ? "text-xs xl:text-sm" : "sm:text-sm text-xs lg:text-base"
            }`}
          >
            {channelTitle}
          </li>
        </div>
        <li
          className={`text-gray-600  font-medium ${
            type
              ? "text-xs xl:text-sm ml-[26px] lg:ml-[30px]"
              : "sm:text-sm text-xs  lg:text-base ml-7 sm:ml-[30px] "
          }`}
        >
          {views} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCart;
