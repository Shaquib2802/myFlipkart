import React, { useState } from "react";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

const Post = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          toast.success("Form Submitted");
        } else {
          console.log(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          className="border"
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={handleChange}
          className="border"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {localStorage.getItem("token") ? (
          <span>LOGOUT</span>
        ) : (
          <span>LOGIN</span>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Post;
