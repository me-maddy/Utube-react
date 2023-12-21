const Comment = ({ comment }) => {
  return (
    <div className="flex bg-gray-100 rounded-xl  p-2 pb-2.5 my-3 mx-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
            src="https://toppng.com/uploads/thumbnail/like-thumb-up-vote-comments-vote-icon-11563607354hfsitrepaa.png"
            alt="Like"
            className="h-3 sm:h-4 cursor-pointer"
          />
          <span className="text-sm font-bold text-gray-500 mr-1 sm:mr-2">
            123
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/20/20661.png"
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
