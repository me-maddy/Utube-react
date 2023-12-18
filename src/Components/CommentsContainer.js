import { comments } from "../utils/constant";
import CommentList from "./CommentList";

const CommentsContainer = ({ commentCount }) => {
  return (
    <div>
      <h3 className="mt-4 font-bold mb-4 text-[22px]">
        {commentCount} Comments
      </h3>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentsContainer;
