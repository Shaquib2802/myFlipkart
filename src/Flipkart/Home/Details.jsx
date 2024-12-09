import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Details = () => {
  const { id, slug } = useParams();
  const { state, ids } = useLocation();
  console.log("hgjdfddfg", state, ids);
  const [data, setData] = useState();
  const [value, setValue] = React.useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className=" flex flex-col justify-center items-center">
      <img src={data?.images} className="w-48 h-48 " />
      <div>{slug}</div>
      {data?.reviews?.map((i) => (
        <div className="border shadow-xl p-4 w-[35%] ">
          <div className="flex ">
            <img
              src={data?.images}
              className="w-16 h-16 rounded-full bg-blue-300 border "
            />
            <div className="flex flex-col mt-2 ml-3 leading-5">
              <div className="font-semibold">{i?.reviewerName}</div>
              <div>{i?.reviewerEmail}</div>
          <div className="w-[100%] text-xs">
            {i?.date}
          </div>
              <div className="mt-1">
                <Rating name="read-only" value={i?.rating} readOnly />
              </div>
            </div>
          </div>
          <div className="w-[100%] ml-5 ">
           {i?.comment}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
