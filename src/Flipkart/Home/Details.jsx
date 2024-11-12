import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      <img src={data?.images} className="w-48" />
    </div>
  );
};

export default Details;
