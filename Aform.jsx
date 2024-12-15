import { TextField } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
// import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";

const Aform = () => {
  const { state } = useLocation();
  console.log("state aaya", state);
  const formik = useFormik({
    initialValues: {
      name: state?.name || "",
      year: state?.year || "",
      price: state?.price || "",
      CPU_model: null,
      Hard_disk_size: null,
      /*       date: moment(state?.date).format("YYYY-MM-DD"),
    comment: state?.comment,
      /*  date: moment("12-11-2024").format("YYYY-MM-DD"), */
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("first", values);
      const Form = {
        name: values?.name,
        data: {
          year: values?.year,
          price: values?.price,
          CPU_model: values?.CPU_model,
          Hard_disk_size: values?.Hard_disk_size,
        },
      };

      /*  fetch.post("Url", {
        Headers: {},
        body: Form,
      }); */
      state?.id
        ? fetch(`https://api.restful-api.dev/objects/${state?.id}`, {
            method: "PUT",
            headers: {},
            body: JSON.stringify(Form),
          })
        : fetch("https://api.restful-api.dev/objects", {
            method: "POST",
            headers: {},
            body: JSON.stringify(Form),
          });
    },
  });
  console.log("first", formik.values?.image);
  return (
    <form action="" onSubmit={formik?.handleSubmit}>
      <div className="flex justify-center items-center w-screen h-screen bg-sky-700">
        <div className="w-[50%] h-[95%] bg-white mx-auto border flex flex-col  rounded-lg">
          <div className="text-3xl mt-3 font-bold mx-auto">API</div>
          <div className="m-2 mt-4">Name*</div>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            onChange={formik?.handleChange}
            value={formik.values?.name}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Year</div>
          <input
            type="number"
            placeholder="Enter your Employee ID"
            name="year"
            value={formik.values?.year}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Price*</div>
          <input
            type="number"
            multiple={4}
            value={formik.values?.price}
            placeholder="Enter your Price"
            name="price"
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Model*</div>
          <input
            type="number"
            placeholder="Enter your Model."
            name="CPU_model"
            value={formik.values?.CPU_model}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />
          <div className="m-2">Storage*</div>
          <input
            type="number"
            placeholder="Enter your Storage"
            name="Hard_disk_size"
            value={formik.values?.Hard_disk_size}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          />

          {/* <div className="m-2">Date*</div>
          <input
            type="date"
            placeholder="Enter your Date"
            name="date"
            value={formik.values?.date}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          /> */}
          {/*   <div className="m-2">Comment*</div>
          <TextField
            multiline
            rows={4}
            placeholder="White Comment"
            name="comment"
            value={formik.values?.comment}
            onChange={formik?.handleChange}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          /> */}
          {/*     <div className="m-2">Upload Resume*</div>
          <input
            type="file"
            name="image"
            onChange={(e) => formik?.setFieldValue("image", e.target?.files[0])}
            className="border-2 rounded-md w-[90%] mx-2 placeholder:"
          /> */}
          <button
            className="border-2 w-[12%] mx-auto mt-2 rounded-lg  font-bold bg-blue-800 text-white "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      {/* <div>{moment(formik.values?.date).format("  ")}</div> */}
    </form>
  );
};

export default Aform;
