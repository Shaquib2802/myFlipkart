import React from "react";

const Flip = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-gray-200 overflow-hidden">
        <form className=" flex w-[150vh] h-[95vh] border bg-white  m-auto my-5">
          <div className="w-[40%] bg-blue-600 flex flex-col">
            <div className="text-3xl font-semibold text-white ml-6 mt-8">
              Login
            </div>
            <div className="mt-8 ml-6 text-xl text-gray-300">
              Get access to your Orders,
            </div>
            <div className="mt- ml-6 text-xl text-gray-300">
              Wishlist and Recommendations
            </div>
            <div className="mt-48 ml-1.5 shadow-2xl w-[25vw] border border-blue-600 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavxXXpcPMo2_8MYhuDxgXC0r7704juzFBrQ&s"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="w-[60%] flex flex-col ml-5 mt-20">
            <div>
              <input
                type="text"
                placeholder="Enter Email/Mobile Number"
                className=" ml-5 border-b-2 w-[32vw]   "
              />
            </div>
            <div className="text-xs mt-9 ml-5 text-gray-500">
              By continuing, you agree to Flipkart's{" "}
              <span className="text-blue-600">Terms of Use</span> and{" "}
              <span className="text-blue-600">Privacy Policy</span>.
            </div>
            <div className="w-[32vw] h-[8vh] border rounded-sm bg-orange-500 mt-5 ml-5 text-center ">
              <div className="mt-2 text-white">Requested OTP</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Flip;
