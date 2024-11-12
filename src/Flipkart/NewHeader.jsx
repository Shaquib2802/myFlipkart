import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { BsCart3 } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { IoSearchOutline } from "react-icons/io5";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";

const NewHeader = () => {
  return (
    <div className="flex h-20 border items-center space-x-5 md:space-x-6 lg:space-x-8 xl:space-x-12 ">
      <div className="md:hidden flex pl-2 ">
        <MenuTwoToneIcon />
      </div>
      <div className="">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg"
          alt=""
          className="h-24 w-40 "
        />
      </div>
      <div className="md:flex hidden w-[49%] items-center border-none ">
        <input
          type="text"
          placeholder="Search for Products Brand and More "
          className="w-full   py-1 pl-10 h-10 rounded-md bg-gray-100 placeholder:text-base font-semibold text-gray-500"
        />
        <IoSearchOutline className="absolute text-2xl ml-1 text-gray-600" />
      </div>
      <div className="md:hidden pl-14 flex  ">
        <SystemUpdateIcon />
      </div>
      <div className="flex items-center gap-x-2">
        <RiAccountCircleLine className="xl:text-2xl md: text-2xl " />
        <span className="text-base md:flex hidden">Login</span>
        <span className="text-base md:hidden flex">You</span>
        <div className="md:flex hidden">
          <KeyboardArrowDownTwoToneIcon />
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <BsCart3 className="md: text-xl"/>

        <span className=" xl:flex hidden">Cart</span>
      </div>
      <div className="flex items-center gap-x-2 ">
        <MdStorefront className=" md:flex hidden md: text-xl" />

        <span className="xl:flex hidden whitespace-nowrap">
          Become a seller
        </span>
      </div>
      <div className="items-center md:flex hidden  text-xl">
        <CiMenuKebab />
      </div>
    </div>
  );
};

export default NewHeader;
