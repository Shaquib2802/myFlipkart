import React from "react";

import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // For arrow icons
// Custom Left Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px", // Adjust left positioning
        zIndex: "10", // Ensure z-index is higher than other content
        top: "40%", // Center the button vertically
        transform: "translateY(-50%)", // Adjust vertical alignment
      }}
      onClick={onClick}
    >
      {" "}
      <IoIosArrowBack className=" text-white rounded-lg text-2xl bg-black" />{" "}
      {/* Custom icon */}
    </div>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px", // Adjust right positioning
        zIndex: "10", // Ensure z-index is higher than other content
        top: "40%", // Center the button vertically
        transform: "translateY(-50%)", // Adjust vertical alignment
      }}
      onClick={onClick}
    >
      {" "}
      <IoIosArrowForward className="text-white rounded-lg text-2xl bg-black" />{" "}
      {/* Custom icon */}
    </div>
  );
}

const Insider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 10000, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div className="mt-5 shadow-md ">
      <div className="font-semibold text-xl mt-4">Similar Products</div>
      <Slider {...settings}>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/i/7/-original-imahfu766ybd5h4z.jpeg?q=70&crop=false"
              alt=""
              className="w-44  p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
        <div className=" flex flex-col ml-4 ">
          <div className="w-48   mt-8 m-6 relative">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70&crop=false"
              alt=""
              className="w-36 p-1"
            />
            <div className="text-sm">
              Apple iPhone 16 (Black, 128 GB){" "}
              <FavoriteIcon className="     absolute top-0 right-1 !text-xl text-gray-400" />
            </div>
            <div className="flex gap-2 mt-2">
              <div className="text-white border bg-green-700 text-xs font-semibold pl-1 rounded-md">
                4.6
                <StarIcon className=" p-1" />{" "}
              </div>
              <div className="text-gray-500 text-sm font-semibold">(1,260)</div>
              <div className="w-20">
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                  alt=""
                />
              </div>
            </div>
            <div className="font-medium mt-2">₹79,900</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Insider1;
