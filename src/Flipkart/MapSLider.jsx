import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TemporaryDrawer from "./Drawer";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-gray-500  border top-[33%] bg-white z-50 w-7 h-20 rounded-r-md   "
    >
      <KeyboardArrowLeftIcon />
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute border text-gray-500 top-[33%] right-0 bg-white z-50 w-7 h-20 rounded-l-md  "
    >
      <KeyboardArrowRightIcon />
    </button>
  );
}

const MapSLider = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("Data aaa gya:", data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
  const a = 19;
  return (
    <div className="border m-3">
      <div className="text-2xl ml-4 font-semibold mt-5 ">
        Beauty & Cosmetics
      </div>
      <div className="     mt-5  ">
        <div className="slider-container ">
          <Slider {...settings}>
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col  items-center    rounded-md   h-56    "
              >
                <img
                  onClick={() =>
                    navigate(`/detail/${item.id}/${item?.title}`)
                  }
                  src={item.images}
                  className="h-48 w-48  mx-auto  border rounded-lg  "
                />
                <h1 className="mx-auto whitespace-nowrap truncate w-40 ">
                  {item.title}
                </h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MapSLider;
