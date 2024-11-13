import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header_sm = () => {
  return (
    <div>
      <div className="flex border h-10 gap-x-0 justify-evenly items-center shadow-lg ">
        <div className="flex gap-1 items-center text-sm font-semibold">
          Electronics
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>

        <div className="flex gap- items-center text-sm font-semibold">
          Appliances
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Men
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Women
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Baby & Kids
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Home & Furniture
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Sports, Books & More
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Flights
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Offer Zone
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <div className="flex gap-1 items-center text-sm font-semibold">
          Grocery
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Header_sm;
