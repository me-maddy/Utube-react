import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex w-full dark:bg-neutral-950">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
