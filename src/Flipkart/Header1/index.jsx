import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import React from "react";
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
    <div className=" w-full h-full sticky top-0 z-50">
      <div className="flex h-[13vh] border gap-5 bg-white">
        <div className="flex mt-0  ml-7 w-28  ">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Error"
          />
        </div>
        <div className="ml-10 flex text-center justify-item-center relative  ">
          <input
            type="text"
            placeholder="Search for Product, Brands and More"
            className="bg-blue-50 h-10 mt-4 rounded-md w-[90vh] placeholder:text-gray-500 pl-8 outline-none"
          />
          <IoSearchSharp className="absolute top-7 left-2 text-xl text-gray-500 font-semibold  " />
        </div>
        <div className="flex ">
          <div>
            <RiAccountCircleLine className="text-2xl mt-6 ml-1 font-light" />
          </div>

          <div onClick={handleOpen} className="mt-6 ml-2">
            Login
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              "& .MuiBackdrop-root":{
                background: "transparent"
              }
            }}
          >
            <Box sx={style} className="!w-[20vw] !border-none outline-none">
              <form className=" flex w-[150vh] h-[85vh]  bg-white  m-auto ">
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
                  <div className="mt-36 ml-1.5 shadow-2xl w-[25vw] border border-blue-600 ">
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
            </Box>
          </Modal>
          <div>
            <FaAngleDown className="mt-7 ml-2 text-xs" />
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
          <div className="ml-3 mt-6 ">Become a Seller</div>
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
              <MenuItem  className="flex flex-row !text-sm gap-x-2 !ml-1 !text-gray-700 justify-between " onClick={handleVertexClose}>
                <div><MdOutlineFileDownload className="text-2xl font-light"/></div>
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
