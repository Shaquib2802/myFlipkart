import React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Modal from "@mui/material/Modal";

import { MdOutlineFileDownload } from "react-icons/md";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { BsCart3 } from "react-icons/bs";
import { RiAccountCircleLine, RiCustomerServiceLine } from "react-icons/ri";
import Drawer from "@mui/material/Drawer";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { IoLanguage } from "react-icons/io5";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { MdStorefront } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { IoSearchOutline } from "react-icons/io5";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

const style = {
  position: "absolute",
  top: "50%",
  left: "25%",
  transform: "translate(-50%, -50%)",
  width: 50,
  bgcolor: "background.paper",
};
const HeaderUP = () => {
  const [open1, setOpen1] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen1(newOpen);
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
  const DrawerList = (
    <Box
      className="w-[250px] "
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List className="bg-blue-600 ">
        {["Login & Signup"].map((text, index) => (
          <ListItem className="text-white" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <PersonIcon className="text-white" />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["SuperCoin Zone ", "Flipkart Plus Zone"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <OfflineBoltRoundedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All Categories", "More on Flipkart"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <OfflineBoltRoundedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText className="!text-sm" primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Choose Language"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <IoLanguage /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="flex h-20 border items-center space-x-5 md:space-x-6 lg:space-x-8 xl:space-x-12 ">
      <div onClick={toggleDrawer(true)} className="md:hidden flex pl-2  ">
        <MenuTwoToneIcon />
      </div>
      <Drawer open={open1} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
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
      <div
        className="flex items-center gap-x-2 cursor-pointer"
        onClick={handleOpen}
      >
        <RiAccountCircleLine className="xl:text-2xl md: text-2xl " />
        <span className="text-base md:flex hidden">Login</span>
        <span className="text-base md:hidden flex">You</span>
        <div className="md:flex hidden">
          <KeyboardArrowDownTwoToneIcon />
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
          className="!w-[70%]  md:h-fit mx-[25%] mt-1 md:mt-10 lg:mt-2 rounded-md border-none outline-none "
        >
          <form className=" w-[100%]   grid grid-cols-1 lg:grid-cols-2 border   mb-2 ">
            <div className=" bg-white flex flex-col  ">
              <div className="ml-12 w-[50%] md:w-[30%] lg:w-[40%]   h-16    overflow-hidden">
                <img
                  src="https://shop.mycrofine.com/wp-content/webp-express/webp-images/uploads/2023/06/flipkart.png.webp"
                  alt=""
                />
              </div>
              <div className=" md:text-xl w-[80%] font-semibold   lg:mt-8 ml-12">
                Get access to your Orders, Wishlist and Recommendation.
              </div>
              <div className="text-gray-600 mt-2 truncate w-[90%] ml-12 font-semibold">
                Login to your account
              </div>
              <label
                htmlFor=""
                className="text-gray-600 ml-12 font-semibold mt-3 md:mt-8 text-sm"
              >
                Email ID/Mobile No.
              </label>
              <input
                type="text"
                className="border-b border-gray-300 w-96 ml-12 "
              />
              <label
                htmlFor=""
                className="text-gray-600 ml-12 font-semibold mt-6 text-sm"
              >
                Enter Password
              </label>
              <input
                type="text"
                className="border-b border-gray-300 w-96 ml-12 "
              />
              <div className="flex flex-row-3 mt-3">
                <div className=" ml-12">
                  <CheckBoxOutlineBlankIcon className="text-gray-300" />
                </div>
                <div className="ml-2 text-xs  md:text-sm mt-1 text-gray-500">
                  {" "}
                  Keep me signed in
                </div>
                <div className="text-blue-600 text-sm ml-12 md:ml-32 mt-2  font-semibold">
                  {" "}
                  Forgot Password
                </div>
              </div>
              <div className="flex mt-2 md:mt-8">
                <div className="border ml-12 w-56 text-center text-white bg-orange-600 h-10 rounded-lg text-sm font-bold ">
                  {" "}
                  <div className="mt-2 ">Login</div>
                </div>
                <div className="text-gray-500 text-sm font-semibold ml-5 mt-2 hidden md:block">
                  Or
                </div>
                <div className="text-blue-500 font-bold text-sm ml-9 mt-2 hidden md:block">
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
            <div className="  bg-blue-600 hidden lg:block">
              <div>
                <div className="text-white ml-7 mt-8  font-medium text-xl  ">
                  India's biggest online store for Mobiles, Fashion
                  (Clothes/Shoes), Electronics, Homes Appliances, Book, Home,
                  Furniture, Grocery, Jewelry, Sporting goods
                </div>
              </div>
              <div className="  flex justify-center item-center ">
                <img
                  className="w-56 mt-32"
                  src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
                  alt=""
                />
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <div className="flex items-center gap-x-2">
        <BsCart3 className="md: text-xl" />

        <span className=" xl:flex hidden">Cart</span>
      </div>
      <div className="flex items-center gap-x-2 ">
        <MdStorefront className=" md:flex hidden md: text-xl" />

        <span className="xl:flex hidden whitespace-nowrap">
          Become a seller
        </span>
      </div>
      <div className="items-center md:flex hidden  text-xl">
        <CiMenuKebab
          className="mr-2"
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
  );
};

export default HeaderUP;
