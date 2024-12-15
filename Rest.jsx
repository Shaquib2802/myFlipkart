import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Slider from "react-slick";
const data1 = [
  {
    id: "1",
    name: "Google Pixel 6 Pro",
    data: { color: "Cloudy White", capacity: "128 GB" },
  },
  { id: "2", name: "Apple iPhone 12 Mini, 256GB, Blue", data: null },
  {
    id: "3",
    name: "Apple iPhone 12 Pro Max",
    data: { color: "Cloudy White", "capacity GB": 512 },
  },
  {
    id: "4",
    name: "Apple iPhone 11, 64GB",
    data: { price: 389.99, color: "Purple" },
  },
  {
    id: "5",
    name: "Samsung Galaxy Z Fold2",
    data: { price: 689.99, color: "Brown" },
  },
  { id: "6", name: "Apple AirPods", data: { generation: "3rd", price: 120 } },
  {
    id: "7",
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  },
  {
    id: "8",
    name: "Apple Watch Series 8",
    data: { "Strap Colour": "Elderberry", "Case Size": "41mm" },
  },
  {
    id: "9",
    name: "Beats Studio3 Wireless",
    data: {
      Color: "Red",
      Description: "High-performance wireless noise cancelling headphones",
    },
  },
  {
    id: "10",
    name: "Apple iPad Mini 5th Gen",
    data: { Capacity: "64 GB", "Screen size": 7.9 },
  },
  {
    id: "11",
    name: "Apple iPad Mini 5th Gen",
    data: { Capacity: "254 GB", "Screen size": 7.9 },
  },
  {
    id: "12",
    name: "Apple iPad Air",
    data: { Generation: "4th", Price: "419.99", Capacity: "64 GB" },
  },
  {
    id: "13",
    name: "Apple iPad Air",
    data: { Generation: "4th", Price: "519.99", Capacity: "256 GB" },
  },
];

const Rest = () => {
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: "Delete",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => {
        console.log(e);
      });
  };
  console.log("Data aa gaya", data);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-screen">
      <div className="!flex !justify-end  ">
        <Button
          onClick={() => navigate("/try1")}
          className="!font-bold !text-xl !text-white mr-5 !m-2 !bg-black"
        >
          ADD
        </Button>
      </div>
      <div className="  slider-container m-5 grid grid-cols-5 gap-3">
        {data.map((items) => (
          <div
            key={items.id}
            className="border p-3 rounded-md  flex flex-col justify-between min-h-32 bg-white text-center"
          >
            <div className="flex flex-col">
              <div>{items.name}</div>
              <div>{items.data?.capacity}</div>
              <div>{items.data?.color}</div>
              <div>{items.data?.generation}</div>
              <div>{items.data?.price}</div>
            </div>
            <div className=" block lg:flex justify-between">
              <Button
                variant="contained"
                onClick={() => navigate("/try1", { state: items })}
              >
                Update
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleDelete(items?.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rest;
