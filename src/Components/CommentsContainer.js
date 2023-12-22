import { useState } from "react";
import { comments } from "../utils/constant";
import CommentList from "./CommentList";

const CommentsContainer = ({ commentCount }) => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="mb-8">
      <h3 className=" font-bold my-2.5 sm:my-4 text-base sm:text-[22px]">
        {commentCount} Comments
      </h3>
      <button
        className="flex hover:bg-slate-200 dark:hover:bg-neutral-700 transition-all duration-150 ease-linear cursor-pointer rounded-xl font-medium text-base sm:text-lg px-3 py-1.5 w-full dark:bg-neutral-800 bg-slate-100 justify-between items-center"
        onClick={() => setShowComments(!showComments)}
      >
        <span>{showComments ? "Hide comments" : "Show comments"}</span>
        <span
          className={`h-0 w-0 relative   transition-transform duration-150 ease-linear border-[10px] border-r-transparent dark:border-r-transparent dark:border-l-transparent border-l-transparent dark:border-t-transparent border-t-transparent border-gray-600 dark:border-gray-200 ${
            showComments ? "rotate-180 -bottom-[5px]" : "bottom-[5px]"
          }`}
        ></span>
      </button>
      {showComments && <CommentList comments={comments} />}
    </div>
  );
};

export default CommentsContainer;
