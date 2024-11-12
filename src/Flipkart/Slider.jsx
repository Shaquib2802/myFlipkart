import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // For arrow icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute text-black top-[33%] bg-white z-50 w-8 h-20 rounded-r-md  hidden xl:block "
    >
      <KeyboardArrowLeftIcon />
    </button>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
    onClick={onClick}
    className="absolute text-black top-[33%] right-0 bg-white z-50 w-8 h-20 rounded-l-md hidden xl:block"
  >
    <KeyboardArrowRightIcon />
  </button>
   
  );
}

function AutoPlaySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 10000, // Autoplay speed set to 3 seconds (3000 ms)
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5448938c117980ac.jpeg?q=20"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7ed84d8076594939.jpg?q=20"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9d56fb9fb543451d.jpg?q=20"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/32185d64f83c4e3f.jpeg?q=20"
            alt=""
            srcset=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlaySlider;
