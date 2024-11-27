import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import { BsCart3 } from "react-icons/bs";
import { MdStorefront } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { IoSearchOutline } from "react-icons/io5";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import Box from "@mui/material/Box";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { IoLanguage } from "react-icons/io5";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const NewHeader = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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

      <Drawer open={open} onClose={toggleDrawer(false)}>
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
      <div className="md:flex hidden w-[49%] items-center border-none ">
        <input
          type="text"
          placeholder="Search for Products Brand and More "
          className="w-full   py-1 pl-10 h-10 rounded-md bg-gray-100 placeholder:text-base font-semibold text-gray-500"
        />
        <IoSearchOutline className="absolute text-2xl ml-1 text-gray-600" />
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
        <CiMenuKebab />
      </div>
    </div>
  );
};

export default NewHeader;
