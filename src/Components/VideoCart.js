import { useSelector } from "react-redux";

const VideoCart = ({ info, type }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={
        type
          ? " cursor-pointer  grid grid-flow-col gap-x-2 w-full"
          : `py-3 cursor-pointer hover:shadow transition-shadow duration-150 ease-in-out px-3 m-2 shadow-lg ${
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
        <li
          className={`text-gray-600 font-medium ${
            type ? "text-sm" : "text-base"
          }`}
        >
          {channelTitle}
        </li>
        <li
          className={`text-gray-600 font-medium ${
            type ? "text-sm" : "text-base"
          }`}
        >
          {statistics?.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCart;
