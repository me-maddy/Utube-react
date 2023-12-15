const VideoDetails = ({ details }) => {
  const { title, likes, descArray, publishedDate, viewCount, channelTitle } =
    details;

  return (
    <div className="mt-2.5">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="font-semibold mt-2.5 gap-x-2.5 text-base items-center flex">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="User"
          className="h-8 cursor-pointer"
        />
        <div className="mr-5">
          <h3 className="cursor-pointer">{channelTitle}</h3>
          <p className="text-xs text-gray-600">123K subscribers</p>
        </div>
        <button className="border hover:bg-gray-200 transition-all duration-200 ease-linear border-gray-200 rounded-full px-4 py-1.5">
          Join
        </button>
        <button className=" bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full px-4 py-1.5">
          Subscribe
        </button>
        <button className="flex bg-gray-100 rounded-full">
          <span className="flex px-4 py-1.5 border-r border-gray-200 border-solid gap-x-2.5 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-l-full">
            <img
              src="https://toppng.com/uploads/thumbnail/like-thumb-up-vote-comments-vote-icon-11563607354hfsitrepaa.png"
              alt="Like"
              className="h-5"
            />
            <span>{likes}</span>
          </span>
          <span className="pl-3 pr-4 py-1.5 flex hover:bg-gray-200 rounded-r-full transition-all duration-200 ease-linear">
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20661.png"
              alt="Unlike"
              className="h-6"
            />
          </span>
        </button>
        <button className=" bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full px-4 py-1.5">
          Share
        </button>
        <button className=" bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full px-4 py-1.5">
          Download
        </button>
        <button className=" bg-gray-100 hover:bg-gray-200 transition-all duration-200 ease-linear rounded-full px-4 py-1.5">
          Clip
        </button>
      </div>
      <div className="w-full bg-gray-100 mt-4 rounded-xl p-3">
        <div className="text-sm font-medium">
          <span className="mr-2.5">{viewCount} views</span>
          <span>{publishedDate}</span>
        </div>
        <div className="w-full text-[15px]">
          {descArray.map((element) => {
            if (element !== "") {
              return (
                <p key={element} className="mb-6">
                  {element}
                </p>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Comment section */}
    </div>
  );
};

export default VideoDetails;
