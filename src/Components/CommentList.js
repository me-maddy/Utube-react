import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment comment={comment} key={index} />
            {comment.replies.length > 0 && (
              <div className="ml-10 ">
                <CommentList comments={comment.replies} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
