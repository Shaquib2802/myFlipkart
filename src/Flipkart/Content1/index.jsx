import React, { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import AutoPlaySlider from "../Slider";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MapSLider from "../MapSLider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Content1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("Data aaa gya:", data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <Slider
        {...settings}
        className="flex flex-initial h-[20%] border  w-[98vw] m-auto mt-2 px-auto bg-white gap-1 shadow-lg"
      >
        <div className="flex-col w-15   ml-1">
          <div
            onClick={() => navigate("Offer")}
            className="ml-5 w-16 mt-5 cursor-pointer"
          >
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/698ba0cebe456aaf.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-5 mt-2 text-sm ">Top Offers</div>
        </div>
        <div
          onClick={() => navigate("Below")}
          className="flex-col w-24 cursor-pointer  ml-7 "
        >
          <div onClick={() => navigate("/below")} className="ml-3 w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/44e10b16e649b691.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">
            Mobiles and Tablets
          </div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div className="ml-3 w-16  mt-5 cursor-pointer">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/717b5077a5e25324.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">
            TV's & Appliances
          </div>
        </div>
        <div className="flex-col w-24  ml-7 ">
          <div
            onClick={() => navigate("Elect")}
            className="ml-3 w-16 mt-5 cursor-pointer"
          >
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/4da1d0d19350cc84.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">Electronics</div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div
            onClick={() => navigate("Fashion")}
            className="ml-3 w-16 mt-5 cursor-pointer"
          >
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/9d4e9c605fc1d2d3.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-4 mt-2 text-sm ">Fashion</div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div className="ml-3 w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/a5e656672d0548dd.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">Beauty</div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div className="ml-3 w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/5b813b64a3179898.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">
            Home and Kitchen
          </div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div className="ml-3 w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/7a5e96c10ada8a56.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">Furniture</div>
        </div>
        <div className="flex-col w-24   ml-7 ">
          <div className="ml-3 w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/57fe1ffe54569c41.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">Travel</div>
        </div>
        <div className="flex-col w-24  ml-7 ">
          <div className=" w-16 mt-5">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/25f400c36bc3487d.jpg?q=100"
              alt=""
              srcset=""
            />
          </div>
          <div className="font-semibold ml-3 mt-2 text-sm ">Grocery</div>
        </div>
      </Slider>

      <div className="h-[20%] border mt-4 mx-3 relative">
        <div>
          <AutoPlaySlider />
        </div>
        {/* <div className="h-[15vh] w-[3vw] border bg-white absolute left-0 top-16 rounded-r-md">
          <MdKeyboardArrowLeft className="top-7 left-2 absolute text-2xl text-gray-400" />
        </div>
        <div className="h-[15vh] w-[3vw] border bg-white absolute right-0 top-16 rounded-l-md">
          <MdKeyboardArrowRight className="top-7 right-2 absolute text-2xl text-gray-400" />
        </div> */}
      </div>
      <div className=" overflow-hidden block  md:hidden border bg-white mt-3 ">
        <div className="flex mt-3 justify-between w-[100%]">
          <div className="font-semibold text-xl ml-2 mt-1 ">
            Best of Electronics
          </div>
          <div className="mr-2">
            <IoIosArrowDroprightCircle className="text-2xl mt-1 text-blue-700" />
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-24">
                <img
                  src="https://media.croma.com/image/upload/v1682595370/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/258999_0_fvxajb.png"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm">OnePlus Buds</div>
                <div className="text-sm text-gray-500 font-semibold">
                  From ₹799
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-24 justify-items-center">
                <img
                  src="https://rukminim2.flixcart.com/image/100/100/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm">JBL</div>
                <div className="text-sm text-gray-500 font-semibold">
                  {" "}
                  From ₹1,099
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-24">
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0DB5yIow6e2Z_Y1aPIi3egUyr4hBtsjNtkiqMlNfauoMAufHRs6eyTwZd8TE2iVpwPp8nSZdsCbE_QRu2xzk43tXlrRmy-0OmeJl4GVAP45fyr-IJtT9r6Feg&usqp=CAE"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm">Noise Smartwatch</div>
                <div className="text-sm text-gray-500 font-semibold">
                  From ₹999
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-28">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoHk1J76QM71oDsBbZ3-vSxk9h3nesFLRgA&s"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm">Printers</div>
                <div className="text-sm text-gray-500 font-semibold">
                  From ₹10.500
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden hidden md:flex lg:flex xl:flex">
        <div className=" border  mt-14   lg:mx-3 md:mx-1 bg-white xl:w-[80%] md:w-[70%] md:mt-8  md:overflow-hidden">
          <div className="xl:mt-6 lg:mt-6  text-xl font-semi-bold ml-4">
            Best of Electronics
          </div>
          <div className=" grid xl:grid-cols-4 lg:grid-cols-4  md:grid-cols-3 md:gap-x-1 md:mx-2 md:pb-2 ">
            <div className="h-60 xl:w-56 lg:52 md:48  border rounded mt-7 ">
              <div className=" ">
                <img
                  className="h-48 "
                  src="https://media.croma.com/image/upload/v1682595370/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/258999_0_fvxajb.png"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-xs ml-3 mt-3">
                Best True Wireless Headph...
              </div>
              <div className="text-sm  text-center font-semibold">Grab Now</div>
            </div>

            <div className="h-60 xl:w-56 lg:52 md:48 border rounded mt-7   ">
              <div>
                <img
                  className="h-48"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0DB5yIow6e2Z_Y1aPIi3egUyr4hBtsjNtkiqMlNfauoMAufHRs6eyTwZd8TE2iVpwPp8nSZdsCbE_QRu2xzk43tXlrRmy-0OmeJl4GVAP45fyr-IJtT9r6Feg&usqp=CAE"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-xs ml-3 text-center ">Noise Smartwatch</div>
              <div className="text-sm  text-center font-semibold">
                {" "}
                From ₹1,099
              </div>
            </div>

            <div className=" h-60 xl:w-56 lg:52 md:48 border rounded mt-7  ">
              <div className=" ">
                <img
                  className="h-44 m-auto mt-5 "
                  src="https://rukminim2.flixcart.com/image/400/400/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=70"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-xs ml-3 ">
                Best Selling Mobile Speaker...
              </div>
              <div className="text-sm  text-center font-semibold">
                From ₹499
              </div>
            </div>

            <div className="w-52 h-60 xl:w-56 lg:w-48 border rounded mt-7 mr-10 xl:block lg:block md:hidden   ">
              <div className=" ">
                <img
                  className="h-48"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoHk1J76QM71oDsBbZ3-vSxk9h3nesFLRgA&s"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="text-xs ml-3 text-center"> Printers</div>
              <div className="text-sm  text-center font-semibold">
                From ₹10190
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]  mr-2  xl:mt-8 lg:mt-14 md:mt-9 bg-white  h-[48vh]    ">
          <div className="xl:w-56 lg:w-56 md:w-52  mx-auto ">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/0f7e1ecd1fbd24ad.jpeg?q=20"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 w-[100%]  border mt-3 ml-3 bg-white gap-x-2 overflow-hidden   ">
        <div className=" border   ml-1 mt-1">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/df23a8e09905e0cb.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border  mt-1">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/74ed629ef8a41d23.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200  mt-1">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/95b8732abe61efcb.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200  ml-1">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/9d5662b1d27b3c34.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200 ">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/18d7291257bce4bd.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200 ">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/bc755bb204167602.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200 ">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ff6cc03d8812e50f.jpg?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200 ">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/4cc0e5613cf42a62.png?q=20"
            alt=""
          />
        </div>
        <div className=" border bg-blue-200 ">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/350f0428fef2f660.jpg?q=20"
            alt=""
          />
        </div>
      </div>
      <MapSLider />
      <div className=" ml-3 overflow-hidden block xl:hidden lg:hidden md:hidden border bg-white mt-3 ">
        <div className="flex mt-3 justify-between w-[100%]">
          <div className="font-semibold text-xl ml-2 mt-1 ">
            Deals On Smartphones
          </div>
          <div className="mr-2">
            <IoIosArrowDroprightCircle className="text-2xl mt-1 text-blue-700" />
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-20 ml-2">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm"> Moto G85 5G</div>
                <div className="text-sm text-gray-500 font-semibold">
                  From ₹15,999
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-20 ml-3 justify-items-center">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm">
                  {" "}
                  Moto edge 50 Fusion
                </div>
                <div className="text-sm text-gray-500 font-semibold">
                  {" "}
                  From ₹20,500
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-20 ml-1">
                <img
                  src="data:image/webp;base64,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"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm ml-1"> CMF Phone 1</div>
                <div className="text-sm text-gray-500 font-semibold ml-1">
                  From ₹9999
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-[100%] justify-between mt-4">
          <div className="flex justify-between ">
            <div className="flex ">
              <div className="w-28">
                <img
                  src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bzkdins/gallery/in-galaxy-a14-5g-sm-a146-sm-a146bzkdins-thumb-534857035"
                  alt=""
                />
              </div>
              <div className="flex-col mt-6">
                <div className="font-semibold text-sm"> Samsung S23 Ultra</div>
                <div className="text-sm text-gray-500 font-semibold">
                  From ₹45,000
                </div>
              </div>
            </div>
            <div className="my-auto mr-3">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>

      <div className=" border bg-white  mt-3 m-3 w-[100%] hidden md:block">
        <div className="text-xl ml-3 mt-5 font-semibold ">
          Deals On Smartphones
        </div>
        <div className="ml-3 w-[100%] grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 gap-2 pb-5 mt-4 ">
          <div className="  border  rounded-md ">
            <img
              className="w-40 m-auto  mt-2"
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70"
              alt=""
            />
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                Moto G85 5G
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                50 MP OIS Cam| 6000mAh
              </div>
            </div>
          </div>
          <div className="  border  rounded-md ">
            <img
              className="w-40 m-auto  mt-2"
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70"
              alt=""
            />
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                Moto edge 50 Fusion
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                144 Hz Curve Display
              </div>
            </div>
          </div>
          <div className="   border  rounded-md  hidden xl:block lg:block">
            <img
              className="w-40 m-auto  mt-2"
              src="data:image/webp;base64,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"
              alt=""
            />
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                CMF Phone 1
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                Display 17.02 cm
              </div>
            </div>
          </div>
          <div className="   border  rounded-md  ">
            <img
              className="w-48  m-auto  mt-3"
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a146bzkdins/gallery/in-galaxy-a14-5g-sm-a146-sm-a146bzkdins-thumb-534857035"
              alt=""
            />
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                Samsung A14
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                AnTutu Score435+10k
              </div>
            </div>
          </div>
          <div className="   border  rounded-md ">
            <img
              className="w-40 m-auto  mt-2"
              src="https://i.gadgets360cdn.com/products/large/realme-p1-5g-realme-db-648x800-1713170000.jpg?downsize=*:180"
              alt=""
            />
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                realme P1 5G
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                Dimensity5070 5G
              </div>
            </div>
          </div>
          <div className="   border  rounded-md overflow-hidden relative  hidden xl:block lg:block">
            <img
              className="w-56 m-auto  mt-2"
              src="https://media.croma.com/image/upload/v1715785237/Croma%20Assets/Communication/Mobiles/Images/301868_0_olamlc.png"
              alt=""
            />
            <div className="h-[15vh] w-[3vw] border bg-white absolute right-3 top-16 rounded-l-md">
              <MdKeyboardArrowRight className="top-7 right-2 absolute text-2xl text-gray-400" />
            </div>
            <div flex flex-col>
              <div className="text-center text-sm text-gray-900">
                Samsung S23 FE
              </div>
              <div className="text-center text-sm text-gray-900 font-semibold">
                Pre Lock Amount
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
