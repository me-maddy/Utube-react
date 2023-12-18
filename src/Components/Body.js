import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
