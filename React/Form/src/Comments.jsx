import { useState } from "react";
import "./Comments.css"
export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "khushi",
      remarks: "great",
      rating: 4,
    },
  ]);

  return (
    <div>
      <h3>all comments</h3>
      <div className="comment">
        <span>{comments[0].username}</span>
        <br />
        <span>{comments[0].remarks}</span>
       <br />
        <span>{comments[0].rating}</span>
      </div>
    </div>
  );
}
