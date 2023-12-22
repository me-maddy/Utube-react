import { useSelector } from "react-redux";
import { Dark_User_Icon, Light_User_Icon } from "../utils/constant";

const LiveChatMessage = ({ name, message }) => {
  const theme = useSelector((store) => store.app.theme);
  return (
    <div className="flex items-center my-1 lg:my-1.5 gap-x-1.5 lg:gap-x-2.5">
      <img
        src={theme === "light" ? Light_User_Icon : Dark_User_Icon}
        alt="User"
        className="h-8 cursor-pointer"
      />
      <span className="text-xs lg:text-sm font-semibold">{name}</span>
      <span className="text-sm lg:text-base font-normal ml-2 lg:ml-4">
        {message}
      </span>
    </div>
  );
};

export default LiveChatMessage;
