import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 shadow-lg px-2 pb-4">
      <ul className="flex flex-col gap-y-2  p-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr />
      <ul className="flex flex-col gap-y-2  p-4">
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Downloads</li>
        <li>Show More</li>
      </ul>
      <hr />
      <h1 className="pt-4 pb-2 px-2.5 font-bold">Subscriptions</h1>
      <ul className="flex flex-col gap-y-2  px-4">
        <li>Chai and code</li>
        <li>Nitish Rajput</li>
        <li>Code with harry</li>
        <li>Physics Wallah</li>
        <li>Harsh Vashisht</li>
        <li>Akshay Saini</li>
      </ul>
    </div>
  );
};

export default SideBar;
