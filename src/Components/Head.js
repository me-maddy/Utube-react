import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid gap-x-4 grid-flow-col items-center shadow-md px-4 py-2.5 pb-3">
      {/* Left */}
      <div className="flex items-center col-span-1">
        <div
          className="flex gap-y-1 hover:bg-black transition-all duration-300 cursor-pointer ease-in-out hover:bg-opacity-10 px-2.5 py-3 rounded-full flex-col"
          onClick={toggleMenuHandler}
        >
          <span className="h-0.5 bg-black w-5"></span>
          <span className="h-0.5 bg-black w-5"></span>
          <span className="h-0.5 bg-black w-5"></span>
        </div>
        <img
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          alt="LOGO"
          className="w-28 bg-transparent h-12 object-cover"
        />
      </div>

      {/* Middle */}
      <div className="col-span-8 px-16">
        <div className="grid w-[65%]  grid-flow-col border rounded-full border-gray-300 border-solid items-center bg-transparent overflow-hidden shadow font-semibold  text-base">
          {" "}
          <input
            type="text"
            className="bg-transparent rounded-l-full outline-1 outline-blue-400 border-none col-span-10 px-4 py-2"
          />
          <button className="col-span-2 border-l border-solid border-gray-300 items-center justify-center flex p-0 h-full py-2 bg-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/256/3917/3917754.png"
              alt="Search"
              className="h-5"
            />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="col-span-1 items-center justify-center grid ">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User"
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;