import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import Slider from "@mui/material/Slider";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import Header1 from "../Flipkart/Header1";
const style = {
  position: 'absolute',
  top: '81%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',

  boxShadow: 24,

};


const Below = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
    <div >
      <Header1/>
    <div className="bg-gray-100 w-screen h-screen   top-0">
      <div className="flex border h-10 gap-x-0 justify-evenly items-center shadow-lg sticky top-0 z-40 bg-white ">
        <div onClick={handleOpen} className="flex gap-1 items-center text-sm  font-semibold">
          Electronics
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <Modal
        className="border-none outline-none"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="border-0 outline-none">
        <div className="flex border m-2 px-5 justify-between">
      <div className="flex flex-col gap-3 text-xs font-medium text-gray-400 mt-4">
        <div className="flex text-gray-700 " >
          <div>Mobiles</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Mi </div>
        <div>Realme</div>
        <div>Samsung</div>
        <div>Infinix</div>
        <div>OPPO</div>
        <div>Apple</div>
        <div>Vivo</div>
        <div>Samsung</div>
        <div>Infinix</div>
        <div>OPPO</div>
        <div>Apple</div>
        <div>Honor</div>
        <div>Vivo</div>
        <div>Asus</div>
        <div>Poco X2</div>
        <div>realme Narzo 10</div>
        <div>Infinix Hot 9</div>
        <div>iPhone SE</div>
        <div>IQOO 3</div>
        <div>Motorola razr</div>
        <div>realme Narzo 10A</div>
        <div>Motorola g8 power lite</div>
      </div>
      <div className="flex flex-col gap-3 text-xs font-medium text-gray-400 mt-4">
        <div className="flex text-gray-700 font-medium">
          <div>Mobile Accessories</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Mobile Cases</div>
        <div>Headphones & Headsets</div>
        <div>Power Banks</div>
        <div>Screenguards</div>
        <div>Memory Cards</div>
        <div>Smart Headphones</div>
        <div>Mobile Cables</div>
        <div>Mobile Chargers</div>
        <div>Mobile Holders</div>
        <div className="flex text-gray-700 ">
          <div>Smart Wearable Tech</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Smart Watches</div>
        <div>Smart Glasses (VR)</div>
        <div>Smart Bands</div>
        <div className="text-gray-800 font-semibold">
          Health Care Appliances
        </div>
        <div>Bp Monitors</div>
        <div>Weighing Scale </div>
      </div>
      <div className="flex flex-col gap-3 text-xs font-medium text-gray-400 mt-4">
        <div className="flex text-gray-700 font-medium">
          <div>Laptops</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Gaming Laptops</div>
        <div className="flex text-gray-700 ">
          <div>Desktop PC</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div className="flex text-gray-700 ">
          <div>Gaming Accessories</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div className="flex text-gray-700 ">
          <div>Computer Accessories</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Pendrives</div>
        <div>External Hard Disks</div>
        <div>Laptop Skins & Decals</div>
        <div>Laptop Bags</div>
        <div>Mouse</div>
        <div className="flex text-gray-700 ">
          <div>Computer Pheripheral</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Printers & Ink Cartridges</div>
        <div>Monitors</div>
        <div className="flex text-gray-700 ">
          <div>Tablet</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Apple iPads</div>
      </div>
      <div className="flex flex-col gap-3 text-xs font-medium text-gray-400 mt-4">
        <div className="flex text-gray-700 font-medium">
          <div>Televisions</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Speakers</div>
        <div>Home Audio Speakers</div>
        <div>Home Theatres</div>
        <div>Bluetooth Speakers</div>
        <div>DTH Set Top Box</div>
        <div>Soundbars</div>
        <div className="flex text-gray-700 font-medium">
          <div>Smart Home Automation</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Compact & Bridge Cameras</div>
        <div>Lens</div>
        <div>Camera Accessories</div>
        <div>Google Nest</div>
        <div className="flex text-gray-700 font-medium">
          <div>Camera</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>DSLR & Mirrorless</div>
        <div>Sports & Action</div>
        <div>Tripods</div>
        <div>Network Components</div>
      </div>
      <div className="flex flex-col gap-3 text-xs font-medium text-gray-400 mt-4">
        <div className="flex text-gray-700 font-medium">
          <div>Featured</div>
          <div>
            <ArrowRightIcon className="text-gray-400  -mt-1 !text-xl" />
          </div>
        </div>
        <div>Google Assistant Store </div>

        <div>Laptops on Buyback Guarantee</div>
        <div>Flipkart SmartBuy</div>
        <div>Li-Polymer Power Banks</div>
        <div>Lenovo Phab Series</div>
        <div>Apple Products</div>
        <div>Microsoft Store</div>
        <div>JBL Speakers</div>
        <div>Smartphones On Buyback Guarantee</div>
        <div>Philips</div>
        <div>Dr. Morepen</div>
        <div>Complete Mobile Protection</div>
        <div>Mobiles No Cost EMI</div>
        <div>Huawei Watch Gt 2e Smart Watch</div>
      </div>
    </div>
        </Box>
      </Modal>
        <div onClick={handleOpen1} className="flex gap- items-center text-sm font-semibold">
          Appliances
          <KeyboardArrowDownIcon className="!text-base mt-1 text-gray-400" />
        </div>
        <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
      <div>
        <div className="font-semibold text-xl mt-4 ml-2 ">Mobiles Phones</div>
        <div className="text-xs text-gray-600 ml-2 ">
          Mobile phones are no more merely a part of our lives. Whether it's to
          stay connected with friends and family or to keep abreast of important
          developments around the world, mobiles are no longer for sending a
          text or making a call. From budget to state-of-the-art smartphones;
          indigenous names to global big-wigs - a whole universe of mobiles
          await you on Flipkart. Whether you’re looking for waterdrop notch
          screens, a high screen to body ratio, AI-powered sensational cameras,
          high storage capacity, blazing quick processing engines or reflective
          glass designs, rest assured you won’t have to venture anywhere else
          for your smartphone needs. The information you are reading has been
          last updated on 09-Oct-24.
        </div>
        <div className="flex text-xs mt-1 ml-2 gap-x-1">
          <span className="text-blue-600">iPhone15</span>|
          <span className="text-blue-600">iPhone15 Plus</span>|
          <span className="text-blue-600">iPhone15 Pro</span>|
          <span className="text-blue-600">iPhone15 Pro Max</span>|
          <span className="text-blue-600">Vivo x 100</span>|
          <span className="text-blue-600">OPPO Reno 11</span>|
          <span className="text-blue-600"> Xiaomi 14 CIVI </span>|
          <span className="text-blue-600">Infinix Note 40 5G</span>|
          <span className="text-blue-600">Pixel 7a</span>|
          <span className="text-blue-600">Moto Edge 40</span>|
          <span className="text-blue-600">POCO C55</span>|
          <span className="text-blue-600">Samsung Galaxy S24 5G</span>|
          <span className="text-blue-600">Motorola g04s</span>|
        </div>
        <div className="text-xs mt-5 ml-2">
          Also Check out the{" "}
          <span className="text-blue-600">
            {" "}
            Exchange offers on Mobile Phone.
          </span>{" "}
        </div>
      </div>
      <div className="mt-2 p-2 items-center">
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e2716386de95b1c2.jpg?q=50"
          alt=""
          srcset=""
        />
      </div>
      <div className="p-2 -mt-1 relative">
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/3000/3000/image/ae31cd0f19fcca0d.jpg?q=50"
            alt=""
          />
          <div className="h-[17vh] w-[3vw] border bg-white absolute  left-5 top-16 rounded-r-md">
            <MdKeyboardArrowLeft className="top-8 left-1 absolute text-3xl text-black" />
          </div>
          <div className="h-[17vh] w-[3vw] border bg-white absolute right-5 top-16 rounded-l-md">
            <MdKeyboardArrowRight className="top-8 right-1 absolute text-3xl text-black" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[33%] p-1">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/1495d08460d39d7b.jpg?q=50"
            alt=""
          />
        </div>
        <div className="w-[33%] p-1">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/b5b9bc27e0ac6fe5.jpg?q=50"
            alt=""
          />
        </div>
        <div className="w-[33%] p-1">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/5370670d5f4673e7.jpg?q=50"
            alt=""
          />
        </div>
      </div>

      <div className="relative">
        <div>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/5000/5000/image/50b1c136093225fc.jpg?q=50"
            alt=""
          />
          <div className="h-[17vh] w-[3vw] border bg-white absolute  left-5 top-20 rounded-r-md">
            <MdKeyboardArrowLeft className="top-9 left-1 absolute text-3xl text-black" />
          </div>
          <div className="h-[17vh] w-[3vw] border bg-white absolute right-5 top-20 rounded-l-md">
            <MdKeyboardArrowRight className="top-9 right-1 absolute text-3xl text-black" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 p-2 gap-2">
        <div className="">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/1495d08460d39d7b.jpg?q=50"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/b5b9bc27e0ac6fe5.jpg?q=50"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/5370670d5f4673e7.jpg?q=50"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/5370670d5f4673e7.jpg?q=50"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/5370670d5f4673e7.jpg?q=50"
            alt=""
          />
        </div>
        <div className=" ">
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/500/500/image/5370670d5f4673e7.jpg?q=50"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/f45c909076eedbce.jpg?q=50"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="">
          <img
            className=" "
            src="https://rukminim2.flixcart.com/fk-p-flap/5000/5000/image/7573c93ee2d7dcf9.jpg?q=50"
            alt=""
          />
          <div className="h-[17vh] w-[3vw] border bg-white absolute  left-5 top-20 rounded-r-md">
            <MdKeyboardArrowLeft className="top-8 left-1 absolute text-3xl text-black" />
          </div>
          <div className="h-[17vh] w-[3vw] border bg-white absolute right-5 top-20 rounded-l-md">
            <MdKeyboardArrowRight className="top-8 right-1 absolute text-3xl text-black" />
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/5000/image/b4e5732e5e8ceaa8.jpg?q=30"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="">
          <img
            className=" "
            src="https://rukminim2.flixcart.com/fk-p-flap/2000/240/image/04ba0761b68d7cf7.jpg?q=50"
            alt=""
          />
          <div className="h-[17vh] w-[3vw] border bg-white absolute  left-5 top-20 rounded-r-md">
            <MdKeyboardArrowLeft className="top-8 left-1 absolute text-3xl text-black" />
          </div>
          <div className="h-[17vh] w-[3vw] border bg-white absolute right-5 top-20 rounded-l-md">
            <MdKeyboardArrowRight className="top-8 right-1 absolute text-3xl text-black" />
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/b1eb97052f151a1e.jpg?q=50"
          alt=""
        />
      </div>
      <div className="relative">
        <div className="">
          <img
            className=" "
            src="https://rukminim2.flixcart.com/fk-p-flap/1500/1500/image/206569b330665278.jpg?q=50"
            alt=""
          />
          <div className="h-[17vh] w-[3vw] border bg-white absolute  left-5 top-20 rounded-r-md">
            <MdKeyboardArrowLeft className="top-8 left-1 absolute text-3xl text-black" />
          </div>
          <div className="h-[17vh] w-[3vw] border bg-white absolute right-5 top-20 rounded-l-md">
            <MdKeyboardArrowRight className="top-8 right-1 absolute text-3xl text-black" />
          </div>
        </div>
      </div>
      <div className="w-[100%] border mt-1 shadow-md ">
        <div className="text-xl font-semibold m-5">Motorola Smartphones</div>
        <div className="flex border m-2">
          <div className=" w-[18%] relative">
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[18%]">
            {" "}
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[18%]  relative">
            {" "}
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" w-[18%] relative">
            {" "}
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[18%] relative">
            {" "}
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[10%] relative">
            {" "}
            <div className="flex flex-col items-center mt-5">
              <div className="">
                <FavoriteIcon className="absolute right-2 top-3 text-gray-400 p-0.5" />
                <div className="w-32">
                  <img
                    src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/l/c/-original-imah3xk892aj9gck.jpeg?q=70"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div className="text-sm text-green-700 font-semibold mt-2">
                Coming Soon
              </div>
              <div className="text-center m-4 text-sm font-semibold ">
                Motorola g45 5G (Brilliant Blue, 128GB)
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border bg-green-700  w-12 rounded-md  ">
                  <div className="text-white text-sm font-semibold ml-1 ">
                    4.4
                    <StarIcon className="!text-sm ml-2" />
                  </div>
                </div>
                <div className="text-gray-600 text-sm font-semibold ">
                  (4,927)
                </div>
              </div>
              <div className="flex justify-around gap-2">
                <div className="font-semibold">₹9,999</div>
                <div className=" line-through text-sm text-gray-500 mt-0.5">
                  ₹12,999
                </div>
                <div className="font-semibold text-sm text-green-700">
                  23% off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8  m-2">
        <div className="mt-6 text-sm ml-8 text-gray-500 font-bold">
          Mobile Phones- Buy mobile phones online at best prices in India
        </div>
        <div className="ml-8 text-xs mt-4 text-gray-400">
          Mobile phone, also called a cell phone owing to it using a cellular
          network architecture, have seen a tremendous growth in terms of
          technology and size over the years. On Flipkart, we have a diverse
          collection of iOS and Android mobiles ranging from basic mobiles,
          low-range and mid-range phones to very high-end smartphones that
        </div>
        <div className="flex text-xs mt-1 ml-8 gap-x-1">
          <span className="text-blue-600">iPhone15</span>|
          <span className="text-blue-600">iPhone15 Plus</span>|
          <span className="text-blue-600">iPhone15 Pro</span>|
          <span className="text-blue-600">iPhone15 Pro Max</span>|
          <span className="text-blue-600">Vivo x 100</span>|
          <span className="text-blue-600">OPPO Reno 11</span>|
          <span className="text-blue-600"> Xiaomi 14 CIVI </span>|
          <span className="text-blue-600">Infinix Note 40 5G</span>|
          <span className="text-blue-600">Pixel 7a</span>|
          <span className="text-blue-600">Moto Edge 40</span>|
          <span className="text-blue-600">POCO C55</span>|
          <span className="text-blue-600">Samsung Galaxy S24 5G</span>|
          <span className="text-blue-600">Motorola g04s</span>|
        </div>
      </div>
      <div className="mt-8  m-2">
        <div className="mt-6 text-sm ml-8 text-gray-500 font-bold">
          iPhone 16
        </div>
        <div className="ml-8 text-xs mt-4 text-gray-400">
          Mobile phone, also called a cell phone owing to it using a cellular
          network architecture, have seen a tremendous growth in terms of
          technology and size over the years. On Flipkart, we have a diverse
          collection of iOS and Android mobiles ranging from basic mobiles,
          low-range and mid-range phones to very high-end smartphones that
        </div>
        <div className="flex text-xs mt-1 ml-8 gap-x-1">
          <span className="text-blue-600">iPhone15</span>|
          <span className="text-blue-600">iPhone15 Plus</span>|
          <span className="text-blue-600">iPhone15 Pro</span>|
          <span className="text-blue-600">iPhone15 Pro Max</span>|
          <span className="text-blue-600">Vivo x 100</span>|
          <span className="text-blue-600">OPPO Reno 11</span>|
          <span className="text-blue-600"> Xiaomi 14 CIVI </span>|
          <span className="text-blue-600">Infinix Note 40 5G</span>|
          <span className="text-blue-600">Pixel 7a</span>|
          <span className="text-blue-600">Moto Edge 40</span>|
          <span className="text-blue-600">POCO C55</span>|
          <span className="text-blue-600">Samsung Galaxy S24 5G</span>|
          <span className="text-blue-600">Motorola g04s</span>|
        </div>
      </div>
      <div className="mt-8  m-2">
        <div className="mt-6 text-sm ml-8 text-gray-500 font-bold">
          iPhone 16
        </div>
        <div className="ml-8 text-xs mt-4 text-gray-400">
          Mobile phone, also called a cell phone owing to it using a cellular
          network architecture, have seen a tremendous growth in terms of
          technology and size over the years. On Flipkart, we have a diverse
          collection of iOS and Android mobiles ranging from basic mobiles,
          low-range and mid-range phones to very high-end smartphones that
        </div>
        <div className="flex text-xs mt-1 ml-8 gap-x-1">
          <span className="text-blue-600">iPhone15</span>|
          <span className="text-blue-600">iPhone15 Plus</span>|
          <span className="text-blue-600">iPhone15 Pro</span>|
          <span className="text-blue-600">iPhone15 Pro Max</span>|
          <span className="text-blue-600">Vivo x 100</span>|
          <span className="text-blue-600">OPPO Reno 11</span>|
          <span className="text-blue-600"> Xiaomi 14 CIVI </span>|
          <span className="text-blue-600">Infinix Note 40 5G</span>|
          <span className="text-blue-600">Pixel 7a</span>|
          <span className="text-blue-600">Moto Edge 40</span>|
          <span className="text-blue-600">POCO C55</span>|
          <span className="text-blue-600">Samsung Galaxy S24 5G</span>|
          <span className="text-blue-600">Motorola g04s</span>|
        </div>
      </div>
      <div className="mt-7">
        <div className="text-gray-500 text-sm font-semibold ml-9">
          Mobile Brands:
        </div>
        <div className="">
          <table className="table-auto ml-8 text-xs mt-5 ">
            <tbody className=" border border-gray-700">
              <tr className=" ">
                <td className="border border-black w-32 text-blue-700">
                  Asus Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Realme Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  iPhone Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Lenove Mobile
                </td>
                <td className="border border-black w-36 text-blue-700">
                  Google Pixel Mobile
                </td>
              </tr>
              <tr>
                <td className="border border-black w-32 text-blue-700">
                  Poco Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Nokia Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Samasung Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Geonee Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                 Narzo
                </td>
              </tr>
              <tr>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
              </tr>
              <tr>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Witchy Woman
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-7">
        <div className="text-gray-500 text-sm font-semibold ml-9">
        Mobiles By Screen Sizes:
        </div>
        <div className="">
          <table className="table-auto ml-8 text-xs mt-5 ">
            <tbody className=" border border-gray-700">
              <tr className=" ">
                <td className="border border-black w-32 text-blue-700">
                  Asus Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Realme Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  iPhone Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Lenove Mobile
                </td>
                <td className="border border-black w-36 text-blue-700">
                  Google Pixel Mobile
                </td>
              </tr>
              <tr>
                <td className="border border-black w-32 text-blue-700">
                  Poco Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Nokia Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Samasung Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Geonee Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                 Narzo
                </td>
              </tr>
             
             
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-7">
        <div className="text-gray-500 text-sm font-semibold ml-9">
        Mobiles By RAM:

        </div>
        <div className="">
          <table className="table-auto ml-8 text-xs mt-5 ">
            <tbody className=" border border-gray-700">
              <tr className=" ">
                <td className="border border-black w-32 text-blue-700">
                  Asus Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Realme Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  iPhone Mobile
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Lenove Mobile
                </td>
                <td className="border border-black w-36 text-blue-700">
                  Google Pixel Mobile
                </td>
              </tr>
              <tr>
                <td className="border border-black w-32 text-blue-700">
                  Poco Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Nokia Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                  Samasung Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                Geonee Mobiles
                </td>
                <td className="border border-black w-32 text-blue-700">
                 Narzo
                </td>
              </tr>
             
             
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="w-[100%] h-[100%] flex ">
        <div className="w-[15%] border border-r h-full  m-1 bg-white ">
          <div className=" flex px-3 text-xl   font-semibold mt-3">Filters</div>

          <div className="flex flex-col mt-3 border-t border-b">
            <div className="text-xs font-semibold ml-3 mt-4">CATEGORIES</div>
            <div className="text-sm text-center mt-3 text-gray-500 ">
              <ArrowBackIosIcon className="!text-xs !-mt-0.5 " />
              Mobiles & Accessories
            </div>
            <div className="text-xs font-bold mt-3 ml-3 mb-5">MOBILES</div>
          </div>
          <div className="flex flex-col border-x mt-5">
            <div className=" text-xs  ">
              <div className="ml-3 font-semibold">PRICE</div>
              <div className="text-center">
                <Slider
                  className="!w-40 !text-center "
                  // getAriaLabel={() => 'Temperature range'}
                  // value={value}
                  // onChange={handleChange}
                  // valueLabelDisplay="auto"
                  // getAriaValueText={valuetext}
                />
              </div>
            </div>
            <div className="flex">
              <div className=" grid grid-cols-3 w-[100%] mx-2">
                <div className="grid grid-cols-2 border rounded-sm justify-around  text-sm w-16 ">
                  <div>Min</div>
                  <div>
                    <ArrowDropDownIcon className="ml-2" />
                  </div>
                </div>
                <div className="text-gray-500 text-sm  text-center  text-smw-[30%] ml-1 ">
                  to
                </div>
                <div className="grid grid-cols-2 border rounded-sm text-sm w-16 mr-6 ">
                  <div className="mr-3"> ₹30000</div>
                  <div>
                    <ArrowDropDownIcon className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-[85%] border bg-yellow-200 m-1">
          <div></div>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default Below;
