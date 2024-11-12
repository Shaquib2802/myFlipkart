import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaShoppingCart } from "react-icons/fa";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarIcon from "@mui/icons-material/Star";
import { IoMdShareAlt } from "react-icons/io";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Insider = () => {
  const [color, setColor] = useState();
  return (
    <div className=" flex relative ">
      <div className="w-[35%] items-center bg-white  flex flex-col sticky top-10 h-screen   self-start ">
        <div
          onClick={() => setColor(!color)}
          className="  p-4 border  m-5  w-[75vh] "
        >
          <div className="absolute text-white bg-[rgb(0,160,152)]  top-10 font-semibold text-sm">
            BESTSELLER
          </div>
          <FavoriteIcon
            className={`right-7 top-9 absolute text-gray-300 shadow-md !text-3xl border rounded-full p-1.5 ${color ? "text-red-600" : "text-gray-300"
            }`}
          />
          <img
            className="  mx-auto w-[55vh]"
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false 2x, https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70&crop=false 1x"
            alt=""
          />
        </div>
        <div className="flex gap-x-1.5">
          <div className=" flex border bg-orange-400 rounded-md w-52 h-14 justify-center p-1 gap-1">
            <div>
              <FaShoppingCart className="text-white mt-4" />
            </div>
            <div className="font-semibold text-white mt-3">ADD TO CART</div>
          </div>
          <div className=" flex border bg-orange-500 rounded-md w-52 h-14 justify-center p-1 gap-1 ">
            <div>
              <FlashOnIcon className="text-white !text-xl mt-4" />
            </div>
            <div className="font-semibold text-white mt-3">ADD TO CART</div>
          </div>
        </div>
      </div>
      <div className="w-[65%] bg-white flex-1     pl-5">
        <div className=" mt-5  gap-5">
          <div className="text-gray-600 text-xs  w-[70%] mt-1">
            Home <ChevronRightIcon className="!text-sm" /> Mobile & A...{" "}
            <ChevronRightIcon className="!text-sm" /> Mobiles{" "}
            <ChevronRightIcon className="!text-sm" />
            Apple Mobiles
            <ChevronRightIcon className="!text-sm" />
            Apple iPhon...
          </div>
          <div className="flex  w-[30%] gap-x-9 ">
            <div className="text-sm mt-0.5 text-gray-700   ">
              <CheckBoxOutlineBlankIcon className="text-gray-300 !text-3xl p-1.5  " />
              Compare
            </div>
            <div className="text-sm mt-1 text-gray-700   flex ">
              <IoMdShareAlt className="text-gray-300 !text-3xl p-1.5 -mt-1 " />
              Share
            </div>
          </div>
        </div>
        <div className="text-xl ">Apple iPhone 15 (Blue, 128 GB)</div>
        <div className="flex   mt-3 gap-x-4">
          <div className="flex border bg-green-700 gap-x-1 justify-around rounded-md h-5 ">
            <div className="text-white text-xs font-bold ml-1">4.6 </div>
            <div>
              <StarIcon className="text-white !text-sm -mt-3" />
            </div>
          </div>
          <div className="text-sm text-gray-500 font-bold">
            1,71,650 Ratings & 5,652 Reviews
          </div>
          <div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
              className="w-20"
            />
          </div>
        </div>
        <div className="text-green-700 font-semibold text-sm mt-3">
          Extra ₹6901 off
        </div>
        <div className="flex mt-1 gap-x-2">
          <div className="text-3xl font-semibold">₹62,999</div>
          <div className="text-gray-400 line-through font-semibold text-base mt-3">
            ₹69,900
          </div>
          <div className="text-green-700 text-base font-semibold mt-3">
            9% off
          </div>
          <div className="mt-3">
            <InfoOutlinedIcon className="text-gray-400  p-1" />
          </div>
        </div>
        <div className="text-gray-700 text-sm ">
          + ₹99 Secured Packaging Fee
        </div>
        <div className="text-base text-gray-800  mt-2 font-semibold">
          Available offers
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <div className="flex ">
            <div>
              <LocalOfferIcon className="text-green-500 !text-xl" />
            </div>
            <div className="text-sm font-semibold ">
              Bank Offer{" "}
              <span className="text-gray-600 font-normal">
                5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              </span>{" "}
              <span className="text-blue-500">T&C</span>
            </div>
          </div>

          <div className="flex ">
            <div>
              <LocalOfferIcon className="text-green-500 !text-xl" />
            </div>
            <div className="text-sm font-semibold ">
              Bank Offer{" "}
              <span className="text-gray-600 font-normal">
                Flat ₹5,000 off on DBS Credit Card Transactions on orders of
                ₹50,000 and above
              </span>{" "}
              <span className="text-blue-500">T&C</span>
            </div>
          </div>

          <div className="flex ">
            <div>
              <LocalOfferIcon className="text-green-500 !text-xl" />
            </div>
            <div className="text-sm font-semibold ">
              Bank Offer{" "}
              <span className="text-gray-600 font-normal">
                Flat ₹5,000 off on DBS Debit Card Transactions on orders of
                ₹50,000 and above
              </span>{" "}
              <span className="text-blue-500">T&C</span>
            </div>
          </div>

          <div className="flex ">
            <div>
              <LocalOfferIcon className="text-green-500 !text-xl" />
            </div>
            <div className="text-sm font-semibold ">
              Bank Offer{" "}
              <span className="text-gray-600 font-normal">
                Get extra ₹6901 off (price inclusive of cashback/coupon)
              </span>{" "}
              <span className="text-blue-500">T&C</span>
            </div>
          </div>
        </div>
        <div className="text-blue-600 font-medium text-sm mt-2">
          View 7 more offers
        </div>
        <div className="flex flex-col mt-10 w-[50%]">
          <div className="border flex  h-12 justify-between bg-blue-50">
            <div className="text-sm text-gray-700 mt-3">
              <RadioButtonCheckedIcon className="!text-2xl p-1  text-blue-500 " />{" "}
              Buy without Exchange
            </div>
            <div className="text-gray-700 text-sm font-bold mt-3">₹54,999</div>
          </div>
          <div className="grid grid-cols-2 gap-x-40 gap-y-2 border ">
            <div className="text-sm text-gray-700 mt-2 w-44 ">
              <RadioButtonUncheckedIcon className="!text-2xl p-1 " /> Buy
              without Exchange
            </div>
            <div className="text-gray-700 text-sm font-bold mt-2  w-32">
              up to ₹51,550 off
            </div>
            <div className=" ml-7 text-xs text-gray-900 w-72">
              Get extra ₹1,000 off on exchange of select models
            </div>
          </div>
        </div>
        <div className="flex  gap-x-16 mt-10">
          <div className="border w-12 pl-3 p-1">
            <img
              src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
              alt=""
              className="w-5 "
            />
          </div>
          <div className="text-sm text-gray-700">
            1 year warranty for phone and 1 year warranty for in Box
            Accessories.
            <span className="text-blue-600 text-sm font-semibold">
              {" "}
              Know More
            </span>
          </div>
        </div>
        <div className="flex mt-5 gap-3">
          <div className=" w-[40%] flex justify-between">
            <div className="text-sm font-semibold text-gray-500">Color</div>
            <div className="flex gap-3">
              <div className="border-2 border-gray-300 w-14 h-16 p-1">
                <img
                  src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ63O_DpQIIIV7HAJrE_uEFPonwdq62KFT2yiNlwQnSakCgRxcuM1V77860WCbQLlmM55Axh1RoUFw26hcsBGYDVJxVSHfiVQgqmM2Bp2g&usqp=CAc"
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="border-2 border-blue-700 w-14 h-16 p-1">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false"
                  alt=""
                  className="w-10"
                />
              </div>
              <div className="border-2 border-gray-300 w-14 h-16 p-1">
                <img
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQJaqAjYT1h_UzlrwHT3QaaaRm5x6TWik8fIwaO_BqJfJpn8vDvLcjsIfG2lrf1Q9UJfM0DzRsHoR-NMvpEu05B4tuVrZHMWcBxJmH4tIDWT8WkoSyrDs3Q8M3UxH8WA3N78SwbSQHQQ&usqp=CAc"
                  alt=""
                  className="w-10"
                />
              </div>
            </div>
          </div>
          <div className=" w-[20%] text-center text-sm font-semibold text-gray-500">
            Storage
          </div>
          <div className=" w-[40%] flex gap-3 justify-center">
            <div className="border-2 border-blue-600 w-16 h-8 text-center  text-blue-600 font-bold text-sm pt-1">
              128
            </div>
            <div className="border-2 border-gray-300 w-16 h-8 text-center  text-gray-700 font-bold text-sm pt-1">
              256
            </div>
            <div className="border-2 border-gray-300 w-16 h-8 text-center  text-gray-700 font-bold text-sm pt-1">
              512
            </div>
          </div>
        </div>
        <div className="ml-32 mt-2 text-blue-600 font-semibold text-sm">
          2 more
        </div>
      </div>
    </div>
  );
};

export default Insider;
