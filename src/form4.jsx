import React, { useState } from "react";
import { Button } from "@mui/material";

const Form4 = () => {
  const [data, setData] = useState({
    name: "",
    last_name:"",
    email: "",
    country: "",
    mobile: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(() => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(data)
 /*    console.log("All Data", data);
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("country", data.country);
    localStorage.clear();
    const country = localStorage.getItem("country");
    console.log("Country", country); */
  };

  return (
    <div className="bg-sky-300 w-[100vw] h-[100vh] py-5">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-center h-[90vh] w-[40vw] bg-black bg-opacity-20 m-auto "
      >
        <div className="text-center  font-bold text-2xl text-sky-600 font-mono">
          . Registration Form .
        </div>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <input
          name="last_name"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <input
          name="country"
          type="text"
          placeholder="Country"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <input
          name="mobile"
          type="number"
          placeholder="Phone"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border-b border-black mx-14 my-5 w-[30vw] outline-none font-semibold font-mono text-x "
        />
        <Button
          type="submit"
          className="!mx-auto !w-[40%] !bg-sky-300 !text-center !my-8 !p-2 !font-bold"
        >
          {" "}
          CREATE AN ACCOUNT
        </Button>
      </form>
    </div>
  );
};

export default Form4;
