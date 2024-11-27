import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { AiOutlineMore } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { PiStorefront } from "react-icons/pi";
import { RiAccountCircleLine, RiCustomerServiceLine } from "react-icons/ri";

const style = {
  position: "absolute",
  top: "50%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: 50,
  bgcolor: "background.paper",
};
function Header1() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    fetch("'https://dummyjson.com/auth/login'", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          console.log("Form Submitted");
        } else {
          console.log(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openVertex = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleVertexClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-[100%]  sticky top-0 z-50">
      <div className="flex h-[13vh] border gap-5 bg-white ">
        <div className=" mt-3 ml-7   w-40  ">
          <img className="object-contain"
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Error"
          />
        </div>
        <div className=" ml-5 text-center  relative  ">
          <input
            type="text"
            placeholder="Search for Product, Brands and More"
            className="bg-blue-50 h-10 mt-4 rounded-md w-[90vh] placeholder:text-gray-500 pl-10 outline-none text-lg"
          />
          <IoSearchSharp className="absolute top-6 left-2 text-2xl text-gray-500   " />
        </div>
        <div className="flex ">
          <div>
            <RiAccountCircleLine className="text-2xl mt-6 ml-1 font-light" />
          </div>

          <div onClick={handleOpen} className="mt-6 ml-2">
            <div>
              {localStorage.getItem("token") ? (
                <span>LOGOUT</span>
              ) : (
                <span>Login</span>
              )}
            </div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              "& .MuiBackdrop-root": {
                background: "transparent",
              },
            }}
          >
            <Box
              sx={style}
              className="!w-[50%] h-[50%] mx-80 mt-4 !border-none outline-none "
            >
              <form
                onSubmit={handleSubmit}
                className="w-[100%]    -mt-32  flex  border border-gray-600  "
              >
                <div className="w-[60%] bg-white flex flex-col  ">
                  <div className="ml-5 w-32  h-20   overflow-hidden">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXexD5GzPZ6KQRfyHqlETIPSgRazKX-lPHYVWfRAQnFyO-k5OoAsaOO7qyiFuiw2eokvs&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className=" text-xl flex font-semibold justify-center  mt-5 ml-5">
                    Get access to your Orders, Wishlist and Recommendation.
                  </div>
                  <div className="text-gray-600 mt-2 ml-5 font-semibold mb-5">
                    Login to your account
                  </div>
                  <form onSubmit={handleSubmit}>
                    <label className="text-gray-600 ml-5 font-semibold  text-sm">
                      Email ID/Mobile No.
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={data.username}
                      onChange={handleChange}
                      className="border-b border-gray-300 w-80 ml-5 "
                    />
                    <label
                      htmlFor=""
                      className="text-gray-600 ml-5 font-semibold mt-6 text-sm"
                    >
                      Enter Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className="border-b border-gray-300 w-80 ml-5 "
                    />
                    <div className="flex flex-row-3 mt-3">
                      <div className=" ml-5">
                        <CheckBoxOutlineBlankIcon className="text-gray-300" />
                      </div>
                      <div className="ml-2 text-sm mt-1 text-gray-500 text-wrap truncate w-16">
                        {" "}
                        Keep me signed in
                      </div>
                      <div className="text-blue-500 text-sm ml-32 mt-2 font-semibold">
                        {" "}
                        Forgot Password
                      </div>
                    </div>

                    <div className="border mt-6 mx-auto  w-44 text-center text-white bg-orange-600 h-10 rounded-lg text-sm font-bold ">
                      {" "}
                      <button type="submit" className="mt-2 mx-auto">
                        Login
                      </button>
                    </div>
                  </form>

                  <div className="flex">
                    {" "}
                    <div className="mt-2 text-gray-500 font-semibold text-sm ml-5">
                      Don't have a account?{" "}
                      <span className="text-blue-700">Signup</span>
                    </div>
                  </div>
                </div>
                <div className="w-[40%] bg-blue-600  ">
                  <div>
                    <div className="text-white ml-5 mt-8  font-medium text-lg font-serif  justify-evenly">
                      India's biggest online store for Mobiles, Fashion
                      (Clothes/Shoes), Electronics, Homes Appliances, Book,
                      Home, Furniture, Grocery, Jewelry, Sporting goods
                    </div>
                  </div>
                  <div className="mt-14 ml-4">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </form>
            </Box>
          </Modal>
          <div>
            <FaAngleDown className="mt-8 ml-2 text-xs" />
          </div>
        </div>
        <div className="flex">
          <div>
            <BsCart3 className="ml-7 mt-6 text-2xl" />
          </div>
          <div className="mt-6 ml-3">Cart</div>
        </div>
        <div className="flex">
          <div>
            <PiStorefront className="mt-6 ml-7 text-2xl" />
          </div>
          <div className="ml-3 mt-6 font-normal">Become a Seller</div>
        </div>
        <div className="">
          <div>
            <AiOutlineMore
              className="ml-7 text-2xl mt-6"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openVertex}
              onClose={handleVertexClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                className="flex flex-row !text-sm gap-x-1 !text-gray-700 justify-between"
                onClick={handleVertexClose}
              >
                <div>
                  <NotificationsNoneIcon />{" "}
                </div>
                <div>Notification Prefernces</div>
              </MenuItem>
              <MenuItem
                className="flex flex-row !text-sm gap-x-2 !ml-1 !text-gray-700 justify-between "
                onClick={handleVertexClose}
              >
                <div>
                  <RiCustomerServiceLine className="!text-xl" />
                </div>
                <div>24/7 Customer Care</div>
              </MenuItem>
              <MenuItem
                className="flex flex-row !text-sm gap-x-2 !ml-1 !text-gray-700 justify-between "
                onClick={handleVertexClose}
              >
                <div>
                  <TrendingUpIcon />
                </div>
                <div>Advertise</div>
              </MenuItem>
              <MenuItem
                className="flex flex-row !text-sm gap-x-2 !ml-1 !text-gray-700 justify-between "
                onClick={handleVertexClose}
              >
                <div>
                  <MdOutlineFileDownload className="text-2xl font-light" />
                </div>
                <div>Download App</div>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header1;
