import React from "react";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { MdPlayArrow } from "react-icons/md";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Product = () => {
  return (
    <div className=" w-screen h-full flex overflow-hidden">
      {/* left */}

      <div className="w-[55%] h-full bg-white  ">
        <div className="w-[96vh]  mx-auto  ">
          <img
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/assets/products/sliding_images/jpeg/9af76d7d-b97e-4035-b1ba-2ad3aab66619.jpg?ts=1721651343"
            alt=""
            srcset=""
          />
        </div>
        <div className="grid grid-cols-8  gap-3 pl-12  ">
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/9af76d7d-b97e-4035-b1ba-2ad3aab66619.jpg?ts=1721651343"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/9af76d7d-b97e-4035-b1ba-2ad3aab66619.jpg?ts=1721651343"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/99b4a284-c346-4960-85fe-0f0b49482c2e.jpg?ts=1721648073"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/59ee72d8-42f3-4820-8555-a00a7fe4e082.jpg?ts=1721648073"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/12ad2c57-91a5-41d6-a4bc-fcfe5c16ae90.jpg?ts=1721648073"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/assets/products/sliding_images/jpeg/f6e4da81-5385-461d-8180-d6dedb002a0b.jpg?ts=1721648073"
              alt=""
              srcset=""
            />
          </div>
          <div className="border border-slate-200 rounded-lg bg-white p-2">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/sliding_image/436777g.jpg?ts=1721648073"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <KeyboardArrowRight className="mt-7 rounded-full bg-slate-100 text-2xl" />
          </div>
        </div>
        <div className="text-2xl font-semibold  mt-5 ml-1">Product Details</div>

        <div className="font-semibold text-sm mt-4 ml-1 ">Limey Minty</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">Flavour</div>
        <div className="font-semibold text-sm ml-1 mt-2">FSSAI License</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">10013022001539</div>
        <div className="font-semibold text-sm ml-1 mt-2">Type</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">Soft Drink</div>
        <div className="font-semibold text-sm ml-1 mt-2">Shelf Life</div>
        <div className="text-slate-500 text-sm ml-1 mt-2 ">6 months</div>
        <div className="font-semibold text-sm ml-1 mt-2">
          Manufacturer Details
        </div>
        <div className="text-slate-500 text-sm ml-1 mt-2">
          Bisleri International Pvt. Ltd.
        </div>
        <div className="text-slate-500 text-sm  ml-1 mt-0">
          29/33 Udayagiri Village, Devanahali Taluk, Banglore-562110.
        </div>
        <div className="font-semibold text-sm ml-1 mt-2">Marketed By</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">
          Bisleri International Pvt. Ltd.
        </div>
        <div className="text-slate-500 text-sm ml-1 mt-0">
          19/1 A, Sahibabad Industrial Area Site-4, Ghaziabad
        </div>
        <div className="font-semibold text-sm ml-1 mt-2">Country of Origin</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">India</div>
        <div className="font-semibold text-sm">Customer Care Details</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">
          Email: info@blinkit.com
        </div>
        <div className="font-semibold text-sm ml-1 mt-2">Return Policy</div>
        <div className="text-slate-500 text-sm text-balance ml-1 mt-2">
          This Item is non-returnable. For a damaged, defective, incorrect or
          expired item, you can request a replacement within 72 hours of
          delivery. In case of an incorrect item, you may raise a replacement or
          return request only if the item is sealed/ unopened/ unused and in
          original condition.
        </div>
        <div className="font-semibold text-sm ml-1 mt-2">Packaging Type</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">Bottle</div>
        <div className="font-semibold text-sm ml-1 mt-2">Unit</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">600ml</div>
        <div className="font-semibold text-sm ml-1 mt-2">Seller</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">STOREASY LLP</div>
        <div className="font-semibold text-sm ml-1 mt-2">Seller FSSAI</div>
        <div className="text-slate-500 text-sm ml-1 mt-2">12722066003063</div>
        <div className="font-semibold text-sm ml-1 mt-2">Description</div>
        <div className="text-slate-500 text-sm text-balance ml-1 mt-2">
          Stirring drink with the zingy taste of lime. It trips you with its
          tang and dunks you straight into a poll of chill. Kick back and escape
          into your very own paradise in a bottle.
        </div>
        <div className="font-semibold text-sm ml-1 mt-2">Disclaimer</div>
        <div className="text-slate-500 text-sm text-balance ml-1 mt-2">
          Every effort is made to maintain the accuracy of all information.
          However, actual product packaging and materials may contain more
          and/or different information. It is recommended not to solely rely on
          the information presented.
        </div>
      </div>

      {/* right */}
      <div className="w-[45%] h-full  ">
        <div className="text-xs  mt-12 ml-10 font-semibold ">
          Home / Soft Drinks /{" "}
          <span className="text-slate-500">
            Bisleri Limonata Limey Minty Cooler Lime Soft Drink{" "}
          </span>
        </div>
        <div className="ml-10 mt-5 text-2xl font-bold non-italic">
          Bisleri Limonata Limey Minty Cooler Lime Soft Drink
        </div>
        <div className="flex h-5 w-24 border gap-x-0 border-gray-400 rounded-md bg-gray-100 mt-5 ml-10 px-2">
          <TimerOutlinedIcon className="p-1  -mt-0.5 ml-1 " />

          <div className="text-xs font-semibold text-center  mt-0.5">
            9 MINS
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0.5  ml-5 mt-5 w-[60vh]">
          <div className="font-semibold text-lg text-green-700 ml-5">
            View all by Bisleri
          </div>
          <div>
            <MdPlayArrow className="mt-2 justify-item-start text-green-700 " />
          </div>
        </div>
        <div className="mt-3 w-[95%] ml-10">
          <hr />
        </div>
        <div className="grid grid-cols-2 gap-96 mt-4 ml-10">
          <div className="text-sm font-semi-bold text-gray-800">600 ml</div>
          <div className=" mt-1 border border-green-700 text-center justify-items-center ml-2 rounded-md text-green-700 font-bold  py-1 w-16 text-xs h-7 ">
            Add
          </div>
        </div>
        <div className="grid grid-cols-4 ml-2 g  px-6 gap-1  w-[30vh]  text-center">
          <div className="text-sm font-bold mt-0">₹22</div>
          <div className="text-xs font-bold text-gray-400 mr-10 mt-1 ">MRP</div>
          <div className="text-xs font-bold text-white mt-1 bg-blue-400 line-through ">
            ₹40
          </div>
          <div className="bg-blue-400 text-white text-xs rounded-md px-1  h-4 w-16 mt-1 text-center justify-item-center ">
            45% OFF
          </div>
        </div>
        <div className="ml-8 text-xs font-light text-gray-500">
          (Inclusive of all taxes)
        </div>
        <div className="mt-5 ml-8 font-bold">Why shop from blinkit?</div>
        <div className="flex mt-4 ">
          <div className="ml-6 w-16 h-16 ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="grid grid-rows-2 ml-3 text-xs ">
            <div className="text-gray-600">Superfast Delivery</div>
            <div className="-mt-3 text-gray-400 font-normal ">
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="ml-6 w-16 h-16 ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="grid grid-rows-2 ml-3 text-xs ">
            <div className="text-gray-600">Best Prices & Offers</div>
            <div className="-mt-3 text-gray-400 ">
              Best price destination with offers directly from the
              manufacturers.
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="ml-6 w-16 h-16 ">
            <img
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="grid grid-rows-2 ml-3 text-xs ">
            <div className="text-gray-600">Wide Assortment</div>
            <div className="-mt-3 text-gray-400 ">
              Choose from 5000+ products across food, personal care, household &
              other categories
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
