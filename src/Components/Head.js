import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import { useEffect, useState } from "react";
import {
  Dark_User_Icon,
  Light_User_Icon,
  Youtube_Search_Suggestion_API,
} from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);
  const cache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchSuggestions(cache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleThemeChange = () => {
    if (!isChecked) {
      dispatch(toggleTheme("dark"));
      document.body.classList.add("dark");
    } else {
      dispatch(toggleTheme("light"));
      document.body.classList.remove("dark");
    }
    setIsChecked(!isChecked);
  };

  const getSuggestions = async () => {
    try {
      const data = await fetch(Youtube_Search_Suggestion_API + searchQuery);
      const text = await data.text();
      const textItems = text.split("[");
      const mainText = textItems
        .map((element, index) => {
          if (
            !element.split('"')[1] ||
            index === 1 ||
            index === textItems.length - 1
          ) {
            return null;
          }
          return element.split('"')[1];
        })
        .filter((element) => element !== null);
      setSearchSuggestions(mainText);
      dispatch(cacheResults({ [searchQuery]: mainText }));
    } catch (error) {}
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid dark:bg-neutral-950 dark:text-white gap-x-2 min-[450px]:gap-x-4 grid-flow-col items-center shadow-md sm:px-4 pr-1.5 min-[450px]:pr-3 sm:py-2.5 py-1 min-[450px]:py-1.5 sm:pb-3">
      {/* Left */}
      <div className="flex items-center min-[450px]:col-span-2 col-span-5  min-[400px]:col-span-1">
        <div
          className=" hidden sm:flex gap-y-1 hover:bg-black dark:hover:bg-neutral-800 dark:hover:bg-opacity-100 transition-all duration-200 cursor-pointer ease-in-out hover:bg-opacity-10 px-2.5 py-3 rounded-full flex-col"
          onClick={toggleMenuHandler}
        >
          <span className="h-0.5 dark:bg-white bg-black w-5"></span>
          <span className="h-0.5 dark:bg-white bg-black w-5"></span>
          <span className="h-0.5 dark:bg-white bg-black w-5"></span>
        </div>
        <img
          src={
            theme === "light"
              ? "https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
              : "https://www.freeiconspng.com/uploads/white-youtube-logo-png-28.png"
          }
          alt="LOGO"
          className={`bg-transparent h-12 object-cover ${
            theme === "light"
              ? "w-24 min-[400px]:w-28"
              : "min-[450px]:w-20 w-[60px] ml-1  sm:w-28"
          }`}
        />
      </div>

      {/* Middle */}
      <div className="min-[450px]:col-span-7 hidden min-[380px]:inline-block col-span-3 lg:px-16  relative">
        <div className="grid sm:w-[90%] md:w-[70%] lg:w-[65%]  sm:grid-flow-col border rounded-full border-gray-300 dark:border-neutral-800 border-solid items-center bg-transparent overflow-hidden shadow font-semibold text-sm sm:text-base">
          <input
            type="text"
            className="bg-transparent rounded-l-full  rounded-r-full sm:rounded-r-none outline-1 outline-blue-400 border-none sm:col-span-9 lg:col-span-10 px-2.5 sm:px-4 py-1 min-[450px]:py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="lg:col-span-2 hidden sm:flex sm:col-span-3 border-l border-solid dark:border-neutral-800 border-gray-300 items-center justify-center p-0 h-full py-2 dark:bg-neutral-600 bg-gray-200">
            <img
              src={
                theme === "light"
                  ? "https://cdn-icons-png.flaticon.com/256/3917/3917754.png"
                  : "https://icon-library.com/images/search-icon-white-png/search-icon-white-png-18.jpg "
              }
              alt="Search"
              className="h-5"
            />
          </button>
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <div className="absolute shadow-xl border border-gray-300 border-solid rounded-xl pt-1 sm:pt-5 pb-3 sm:pb-6 bg-white dark:bg-neutral-800 dark:border-neutral-700 border-t-transparent  dark:border-t-transparent  sm:w-[77%] w-full md:w-[58%] lg:w-[49%]">
            <ul className=" ">
              {searchSuggestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex items-center py-1 px-2.5 sm:px-4 hover:bg-gray-200 cursor-default"
                >
                  <img
                    src={
                      theme === "light"
                        ? "https://cdn-icons-png.flaticon.com/256/3917/3917754.png"
                        : "https://icon-library.com/images/search-icon-white-png/search-icon-white-png-18.jpg "
                    }
                    alt="Search-icon"
                    className="mr-2.5 h-[14px]"
                  />
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right */}
      <div className=" col-span-4 min-[450px]:col-span-1 items-center justify-end grid-flow-col gap-x-2 sm:gap-x-3 grid">
        <img
          src={theme === "light" ? Light_User_Icon : Dark_User_Icon}
          alt="User"
          className="min-[450px]:h-8 h-6 cursor-pointer"
        />

        <div
          className="md:w-16 min-[450px]:w-12 h-5 w-10 min-[450px]:h-6  flex relative items-center rounded-2xl md:h-8
             bg-neutral-400 dark:bg-white
           "
        >
          <input
            type="checkbox"
            id="dark-mode"
            className="hidden"
            checked={isChecked}
            onChange={handleThemeChange}
          />
          <label
            htmlFor="dark-mode"
            className={`md:w-7 h-4 w-4 md:h-7 min-[450px]:h-5 min-[450px]:w-5 transition-all duration-300 ease-in-out cursor-pointer rounded-full absolute bg-gray-100 dark:bg-neutral-600 ${
              isChecked ? "right-[2px]" : "left-[2px]"
            }`}
          ></label>
        </div>
      </div>
    </div>
  );
};

export default Head;
