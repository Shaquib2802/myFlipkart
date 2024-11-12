import React, { useState } from "react";
import { Button } from "@mui/material";
const Form3 = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    content: "",
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
    console.log(data);
  };
  return (
    <div className="bg-violet-700 w-[100vw] h-[100vh] py-5 flex">
      <form
        onSubmit={handleSubmit}
        className="h-[95vh] m-auto w-[60vw] bg-black rounded-3xl"
      >
        <div className="font-bold text-center text-white p-5 text-3xl">
          Contact Us
        </div>
        <div className="grid grid-cols-2">
          <div className="text-white font-semibold px-10 py-6 ">
            Full Name{" "}
            <div>
              <input
                type="text"
                onChange={handleChange}
                name="fname"
                className="bg-white rounded-2xl my-3 w-[20vw] py-1 pl-16"
                placeholder=" Enter First Name"
              />
            </div>
          </div>
          <div>
            <div className="text-black py-6">
              {" "}
              Last Name
              <div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="lname"
                  className="bg-white  rounded-2xl my-3 w-[20vw] mx-20 py-1 pl-16"
                  placeholder="  Enter Lastname"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="text-white px-10 font-semibold ">Email</div>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            className="bg-white w-[90%] m-auto my-3 rounded-2xl py-1 "
            placeholder="  Enter an Email"
          />
        </div>
        <div className="grid">
          <div className="text-white px-10 font-semibold my-4">
            {" "}
            Leave us a few words
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="content"
            className="bg-white w-[90%] m-auto rounded-2xl py-7 my-0.5"
            placeholder=" Write a comment"
          />
        </div>
        <Button
          type="submit"
          className=" !mx-auto !justify-center !justify-items-center !rounded-2xl !text-center !w-[20%] !my-10 !h-10 !pt-2 !bg-red-600 !text-white !font-bold"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Form3;
