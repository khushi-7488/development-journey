import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";
export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "khushi",
      remarks: "great",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>all comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.username}</span>
            <br />
            <span>{comment.remarks}</span>
            <br />
            <span>{comment.rating}</span>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
