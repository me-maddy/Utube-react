import { useSelector } from "react-redux";
import {
  Dark_Like_Thumb,
  Dark_Unlike_Thumb,
  Dark_User_Icon,
  Light_Like_Thumb,
  Light_Unlike_Thumb,
  Light_User_Icon,
} from "../utils/constant";

const Comment = ({ comment }) => {
  const theme = useSelector((store) => store.app.theme);
  return (
    <div className="flex bg-gray-100 dark:bg-neutral-900 rounded-xl  p-2 pb-2.5 my-3 mx-2">
      <img
        src={theme === "light" ? Light_User_Icon : Dark_User_Icon}
        alt="User"
        className="sm:h-10 h-7 mr-2 sm:mr-4 cursor-pointer"
      />
      <div className="">
        <p className="sm:pt-1 font-extrabold sm:font-bold text-xs sm:text-sm">
          {comment.name}
        </p>
        <p className="text-sm sm:text-base">{comment.text}</p>
        <div className="mt-1 sm:mt-2 items-center flex gap-x-2">
          <img
            src={theme === "light" ? Light_Like_Thumb : Dark_Like_Thumb}
            alt="Like"
            className="h-3 sm:h-4 cursor-pointer"
          />
          <span className="text-sm font-bold dark:text-gray-300 text-gray-500 mr-1 sm:mr-2">
            123
          </span>
          <img
            src={theme === "light" ? Light_Unlike_Thumb : Dark_Unlike_Thumb}
            alt="Unlike"
            className="h-3 sm:h-4 cursor-pointer"
          />
          <span className="text-xs sm:text-sm font-bold ml-3 sm:ml-6 cursor-pointer">
            Reply
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
