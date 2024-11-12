import React from "react";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import CopyrightRounded from "@mui/icons-material/CopyrightRounded";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import { FaThreads } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import { BsFillThreadsFill } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import XIcon from "@mui/icons-material/X";
import { BsLinkedin } from "react-icons/bs";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";
import { BiLogoTwitter } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex mt-19 overflow-hidden">
          <div className="flex w-[40%]">
            <div>
              <div className="font-semibold mt-16 ml-5 text-xl mb-10 ">
                Useful Link
              </div>
              <div className="grid grid-cols-3  gap gap-x-20 ml-3 font-normal gap-2 text-slate-400 ">
                <div>About</div>
                <div>Privacy</div>
                <div>Partner</div>
                <div>Career</div>
                <div>Terms</div>
                <div>Franchise</div>
                <div>Blog</div>
                <div>FAQ's</div>
                <div>Seller</div>
                <div>Press</div>
                <div>Security</div>
                <div>Warehouse</div>
                <div>Lead</div>
                <div>Mobile</div>
                <div>Deliver</div>
                <div>Value</div>
                <div>Contact</div>
                <div>Resource</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[60%]">
              <div>
                <div className="grid grid-cols-2">
                  <div className="font-semibold text-xl ml-4 mt-16">
                    Categories
                  </div>
                  <div className="font-semibold text-sm text-green-700 mt-16 pt-1">
                    see all
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-16 mt-12 font-normal gap-2 text-slate-400  ">
              <div>Vegetable and Fruit </div>
              <div>Dairy and Breakfast </div>
              <div>Munchies </div>
              <div>Cold Drink and Juices</div>
              <div>Instant and Frozen Juices</div>
              <div>Tea, Coffee & Health Drinks</div>
              <div>Bakery & Biscuits</div>
              <div>Sweet Tooth</div>
              <div>Atta, Rice & Dal</div>
              <div>Dry Fruits, Masala & Oil</div>
              <div>Sauces & Spreads</div>
              <div>Chicken, Meat & Fish</div>
              <div>Paan Corner</div>
              <div>Organic & Premium</div>
              <div>Organic & Premium</div>
              <div>Pharma & Wellness</div>
              <div>Cleaning Essentials</div>
              <div>Home & Offices</div>
              <div>Ice Creams & Frozen Dessert</div>
              <div>Personal Care</div>
              <div>Pet Care</div>
              <div>Beauty & Cosmetics</div>
              <div>Books</div>
              <div>Pet Care</div>
              <div>Beauty & Cosmetics</div>
              <div>Pet Care</div>
              <div>Toys & Games</div>
              <div>Print Store</div>
              <div>Navratri Specials</div>
            </div>
          </div>
        </div>

        <div className="w-full flex ">
          <div className="flex justify-center w-[40%]">
            <div className="flex grid-cols-2 justify-center text-xs mt-16 items-center">
              <div>
                <CopyrightRounded className="text-gray-400 font-thin !text-xs mb-1 " />
              </div>
              <div className="text-slate-400 ml-1">
                Blink Commerce Private Limited, 2016-2024
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-row mt-14 space-x-6 items-center">
            <div className="text-center font-semibold text-sm text-slate-500">
              Download App
            </div>
            <div>
              <img
                className="h-7 "
                src="https://blinkit.com/d61019073b700ca49d22.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                className="h-7"
                src="https://blinkit.com/8ed033800ea38f24c4f0.png"
                alt=""
                srcset=""
              />
            </div>
            <div className=" rounded-full h-10 w-10 bg-black text-white p-2 ">
              <FaFacebookF className="!text-2xl" />
            </div>
            <div className="bg-black h-10 w-10 rounded-full p-2">
              <BiLogoTwitter className="text-2xl  !items-center text-center !text-white" />
            </div>
            <div className="h-10 w-10 bg-black rounded-full text-white p-2">
              <FaLinkedinIn className="text-2xl" />
            </div>
            <div className="h-10 w-10 bg-black text-white rounded-full p-2">
              <FaInstagram className="text-2xl" />
            </div>
            <div className="h-10 w-10 bg-black text-white p-2 rounded-full">
              <FaThreads className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="text-slate-500 text-sm mt-7 px-4">“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</div>
      </div>
    </div>
  );
};

export default Footer;
