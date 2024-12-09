import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Signup = () => {
  return (
    <div className="w-[100vw] bg-gray-200 overflow-hidden ">
      <form className="w-[80%] h-[95%] border-black   m-auto flex mt-3 mb-2 ">
        <div className="w-[50%] bg-white flex flex-col ">
          <div className="ml-12 w-36   h-16    overflow-hidden">
            <img
              src="https://shop.mycrofine.com/wp-content/webp-express/webp-images/uploads/2023/06/flipkart.png.webp"
              alt=""
            />
          </div>
          <div className=" text-xl flex font-semibold justify-center  mt-8 ml-12">
            Get access to your Orders, Wishlist and Recommendation.
          </div>
          <div className="text-gray-600 mt-2 ml-12 font-semibold">
            Login to your account
          </div>
          <label
            htmlFor=""
            className="text-gray-600 ml-12 font-semibold mt-8 text-sm"
          >
            Email ID/Mobile No.
          </label>
          <input type="text" className="border-b border-gray-300 w-96 ml-12 " />
          <label
            htmlFor=""
            className="text-gray-600 ml-12 font-semibold mt-6 text-sm"
          >
            Enter Password
          </label>
          <input type="text" className="border-b border-gray-300 w-96 ml-12 " />
          <div className="flex flex-row-3 mt-3">
            <div className=" ml-12">
              <CheckBoxOutlineBlankIcon className="text-gray-300" />
            </div>
            <div className="ml-2 text-sm mt-1 text-gray-500">
              {" "}
              Keep me signed in
            </div>
            <div className="text-blue-500 text-sm ml-36 mt-2 font-semibold">
              {" "}
              Forgot Password
            </div>
          </div>
          <div className="flex mt-8">
            <div className="border ml-12 w-56 text-center text-white bg-orange-600 h-10 rounded-lg text-sm font-bold ">
              {" "}
              <div className="mt-2">Login</div>
            </div>
            <div className="text-gray-500 text-sm font-semibold ml-5 mt-2">
              Or
            </div>
            <div className="text-blue-500 font-bold text-sm ml-9 mt-2">
              {" "}
              Request OTP
            </div>
          </div>
          <div className="flex">
            {" "}
            <div className="mt-5 text-gray-500 font-semibold text-sm ml-12">
              Don't have a account?{" "}
              <span className="text-blue-700">Signup</span>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-blue-600">
          <div>
            <div className="text-white ml-9 mt-8  font-medium text-xl  justify-evenly">
              India's biggest online store for Mobiles, Fashion (Clothes/Shoes),
              Electronics, Homes Appliances, Book, Home, Furniture, Grocery,
              Jewelry, Sporting goods
            </div>
          </div>
          <div className="  flex justify-center item-center ">
            <img className="w-56 mt-32"
              src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
