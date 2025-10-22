import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "user cannot be empty";
  }

  return errors;
};

export default function CommentsForm({ addNewComment }) {
  //   let [formData, setFormdata] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "5",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let [isValid, setIsValid] = useState(true);

  //   let handleInputChange = () => {
  //     setFormdata((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let handleSubmit = () => {
  //     if (!formData.username) {
  //       console.log("username is null");
  //       setIsValid(false);
  //       event.preventDefault();
  //       return;
  //     }
  //     addNewComment(formData);
  //     event.preventDefault();
  //     setFormdata({
  //       username: "",
  //       remarks: "",
  //       rating: 5,
  //     });
  //   };

  return (
    <div>
      <h4>give a comment</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
         {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
        <br />
        <br />
        <label htmlFor="remarks">remarks</label>
        <textarea
          name="remarks"
          id=""
          placeholder="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
