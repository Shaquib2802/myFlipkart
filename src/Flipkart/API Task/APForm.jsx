import { useFormik } from "formik";

import React from "react";

const APForm = () => {
  
  const formik = useFormik({
    
    initialValues: {
      name: "",
      id: null,
      email: "",
      mobile: null,
      date: "",
      /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("first", values);
    },
  });
  console.log("first", formik.values?.image);
  return (
    <form action="" onSubmit={formik?.handleSubmit}>
      <div className="flex justify-center items-center w-screen h-screen bg-sky-700">
        <div className="w-[50%] h-[95%] bg-white mx-auto border flex flex-col  rounded-lg">
          <div className="text-3xl mt-3 font-bold mx-auto">Employee Form</div>
          <div className="m-2 mt-4">Name*</div>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            onChange={formik?.handleChange}
            value={formik.values?.name}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Employee ID</div>
          <input
            type="number"
            placeholder="Enter your Employee ID"
            name="id"
            value={formik.values?.id}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Email*</div>
          <input
            type="email"
            multiple={4}
            value={formik.values?.email}
            placeholder="Enter your Email"
            name="email"
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Mobile No.*</div>
          <input
            type="number"
            placeholder="Enter your Mobile No."
            name="mobile"
            value={formik.values?.mobile}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />

          <div className="m-2">Date*</div>
          <input
            type="date"
            placeholder="Enter your Date"
            name="date"
            value={formik.values?.date}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Upload Resume*</div>
          <input
            type="file"
            name="image"
            onChange={(e) => formik?.setFieldValue("image", e.target?.files[0])}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <button
            className="border-2 w-[12%] mx-auto mt-2 rounded-lg  font-bold bg-blue-800 text-white "
            type="submit"
          >
            Submit{" "}
          </button>
        </div>
      </div>
      {/* <div>{moment(formik.values?.date).format("  ")}</div> */}
    </form>
  );
};

export default APForm;
