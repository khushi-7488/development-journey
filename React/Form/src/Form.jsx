import { useState } from "react";

export default function Form() {
  let [formData, setFormdata] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  //   let handleNameChange = (event) => {
  //     setFullname(event.target.value);
  //   };
  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };
  let handleInputChange = () => {
    setFormdata((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormdata({
      fullname: "",
      username: "",
      password: "",
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="fullname">fullname</label>
      <input
        type="text"
        placeholder="enter your name"
        value={formData.fullname}
        onChange={handleInputChange}
        id="fullname"
        name="fullname"
      />
      <br />
      <br />
      <br />
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="enter your name"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />

      <br />
      <br />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br /> 

      <button>submit</button>
    </form>
  );
}
