import { useState } from "react";

export default function CommentsForm({addNewComment}) {
  let [formData, setFormdata] = useState({
    username: "",
    remarks: "",
    rating: 5,  
  });

  let handleInputChange = () => {
    setFormdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = () => {
    console.log(formData);
    addNewComment(formData)
    event.preventDefault();
    setFormdata({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>give a comment</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">remarks</label>
        <textarea
          name="remarks"
          id=""
          placeholder="remarks"
          value={formData.remarks}
          onChange={handleInputChange}
        >
          comment here
        </textarea>
        <br />
        <br />
        <label htmlFor="rating">rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}
