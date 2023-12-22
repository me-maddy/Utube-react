import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const List = ({ title, children }) => {
  return (
    <li className="pl-4 py-1.5  dark:hover:bg-neutral-800 cursor-pointer transition-all duration-150 rounded-lg ease-linear hover:bg-gray-200">
      {children ? children : title}
    </li>
  );
};

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  if (!isMenuOpen) return null;
  return (
    <div
      className={`w-48 hidden  sm:inline-block dark:bg-neutral-950 dark:text-white shadow-lg pt-2.5 px-3  pb-4 ${
        id && "absolute bg-white  min-h-screen pb-[100rem] h-max"
      }`}
    >
      <ul className="flex flex-col py-2 gap-y-2">
        <List>
          <Link to="/">Home</Link>
        </List>
        <List title={"Shorts"} />
        <List title={"Subscriptions"} />
      </ul>
      <hr className="dark:border-neutral-700" />
      <ul className="flex flex-col py-2 gap-y-2 ">
        <List title={"Your channel"} />
        <List title={"History"} />
        <List title={"Your videos"} />
        <List title={"Watch later"} />
        <List title={"Downloads"} />
        <List title={"Show More"} />
      </ul>
      <hr className="dark:border-neutral-700" />
      <h1 className="pt-4 px-2.5  font-bold">Subscriptions</h1>
      <ul className="flex flex-col py-2 gap-y-2 ">
        <List title={"Chai aur code"} />
        <List title={"Nitish Rajput"} />
        <List title={"Code with harry"} />
        <List title={"Physics Wallah"} />
        <List title={"Harsh Vashisth"} />
        <List title={"Akshay Saini"} />
      </ul>
    </div>
  );
};

export default SideBar;
