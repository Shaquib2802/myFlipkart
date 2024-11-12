import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { MdStorefront } from "react-icons/md";
import { PiShootingStar } from "react-icons/pi";
import { MdOutlineStorefront } from "react-icons/md";

function Bottom() {
  return (
    <div>
      <div className="hidden lg:block">
        {" "}
        <div className=" flex h-[50vh] bg-slate-900 w-[100%] ">
          <div className=" flex w-[55%] gap-x-8 ml-16  ">
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">
                ABOUT
              </div>
              <div className="flex flex-col text-white text-xs mt-4 font-semibold">
                <div>Contact Us</div>
                <div>About Us</div>
                <div>Career</div>
                <div>Flipkart Stories</div>
                <div>Press</div>
                <div>Corporate Information</div>
              </div>
            </div>
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">
                GROUP OF COMPANIES
              </div>
              <div className="flex flex-col text-white text-xs mt-4 font-semibold">
                <div>Myntra</div>
                <div>Cleartrip</div>
                <div>Shopsy</div>
              </div>
            </div>
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">HELP</div>
              <div className="flex flex-col text-white text-xs mt-4 font-semibold">
                <div>Payment</div>
                <div>Shipping</div>
                <div>Cancellation &</div>
                <div>Return</div>
                <div>FAQ</div>
                <div>Report Infringement</div>
              </div>
            </div>
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">
                CONSUMER POLICY
              </div>
              <div className="flex flex-col text-white text-xs mt-4 font-semibold">
                <div>Cancellation &</div>
                <div>Returns</div>
                <div>Term of Use</div>
                <div>Security</div>
                <div>Privacy</div>
                <div>Sitemap</div>
                <div>Grievance Redressal</div>
                <div>EPR Compliance</div>
              </div>
            </div>
            <div className="w-px h-56 bg-gray-700 mx-4 mt-7"></div>
          </div>
          <div className="grid grid-cols-2 w-[45%]">
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">
                Mail Us:
              </div>
              <div className="flex flex-col text-white text-xs mt-4 gap-y-1 ">
                <div>Flipkart Internet Private Limited.</div>
                <div>Building Alyssa, Begonia&</div>
                <div>Clove Embassy Texh Village,</div>
                <div>Outer Ring Road, Devarabeesanahalli Village,</div>
                <div>Bengaluru, 560103,</div>
                <div>Karnatak, India</div>
                <div>
                  <div className="text-gray-400  text-xs font-normal mt-5">
                    Social:
                  </div>
                  <div className="flex gap-3 text-white">
                    <div>
                      <CiFacebook className=" text-2xl font-semibold mt-2" />
                    </div>
                    <div>
                      <FaXTwitter className=" text-2xl mt-2 font-light p-0.5" />
                    </div>
                    <div>
                      <FiYoutube className="text-2xl mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-gray-400 mt-9 text-xs font-normal">
                Registered Office Address:
              </div>
              <div className="flex flex-col text-white text-xs mt-4 gap-y-1 ">
                <div>Flipkart Internet Private Limited.</div>
                <div>Building Alyssa, Begonia&</div>
                <div>Clove Embassy Texh Village,</div>
                <div>Outer Ring Road, Devarabeesanahalli Village,</div>
                <div>Bengaluru, 560103,</div>
                <div>Karnatak, India</div>
                <div>CIN : U51109KA2012PTC066107</div>
                <div>
                  Telephone: <span className="text-blue-600">044-45614700</span>{" "}
                  / <span className="text-blue-600">044-45614800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[13vh] bg-gray-900 text-white border-t border-gray-500 flex gap-0  ">
          <div className="w-28 text-center  h-4 mt-8 ml-12 flex flex-row gap-2  ">
            <div>
              <MdStorefront className="text-xs text-yellow-400 mt-0.5" />
            </div>
            <div className="text-xs font-semibold">Become a Seller</div>
          </div>
          <div className=" item-center w-20  h-4 mt-8 ml-14 flex flex-row gap-2">
            <div>
              <PiShootingStar className="text-xs text-yellow-400 mt-0.5" />
            </div>
            <div className="text-xs font-semibold">Advertise</div>
          </div>
          <div className="w-20  h-4 mt-8 ml-14 flex flex-row gap-2">
            <div>
              <IoGiftOutline className="text-xs text-yellow-400 mt-0.5" />
            </div>
            <div className="text-xs font-semibold">Gift Cards</div>
          </div>
          <div className="w-24  h-4 mt-8 ml-14 flex flex-row gap-2">
            <div>
              <IoIosHelpCircleOutline className="text-xs text-yellow-400 mt-0.5" />
            </div>
            <div className="text-xs font-semibold">Help Center</div>
          </div>
          <div className="w-40 items-center  h-4 mt-8 ml-14 flex flex-row gap-2">
            <div>
              <FaRegCopyright className="text-xs text-white mt-0.5" />
            </div>
            <div className="text-xs font-semibold">2007-2024 Flipkart.com</div>
          </div>
          <div className="w-96  h-4 mt-8 gap-2 ml-9 flex">
            <div className="w-96  h-3  ml-2 bg-black">
              <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(10,19,39)] border hidden lg:hidden md:block">
        <div className="grid grid-cols-3 mt-6 ml-4 ">
          <div className="text-gray-400 text-xs">
            ABOUT
            <div className="flex flex-col">
              <div className="text-white text-xs font-bold mt-3">
                Contact Us
              </div>
              <div className="text-white text-xs font-semibold">About Us</div>
              <div className="text-white text-xs font-semibold">Career</div>
              <div className="text-white text-xs font-semibold">
                Flipkart Stories
              </div>
              <div className="text-white text-xs font-semisemibold">Press</div>
              <div className="text-white text-xs font-semibold">
                Corporate Information
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            GROUP OF COMPANIES
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold mt-3">Myntra</div>
              <div className="text-white text-xs font-semibold">Cleartrip</div>
              <div className="text-white text-xs font-semibold">Shopsy</div>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            HELP
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold mt-3">Payment</div>
              <div className="text-white text-xs font-semibold">Shipping</div>
              <div className="text-white text-xs font-semibold">Cancellation & Return</div>
            </div>
          </div>
          <div className="text-gray-400 text-xs mt-5">
            CONSUMER POLICY
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold mt-3">Cancellation & Return</div>
              <div className="text-white text-xs font-semibold">Term of Use</div>
              <div className="text-white text-xs font-semibold">Privacy</div>
              <div className="text-white text-xs font-semibold">Security</div>
              <div className="text-white text-xs font-semibold">Sitemap</div>
              <div className="text-white text-xs font-semibold">Grievance Redressal</div>
              <div className="text-white text-xs font-semibold">EPR Compliance</div>
            </div>
          </div>
          <div className="">
           <div className="text-gray-400 text-xs mt-5"> CONSUMER POLICY</div>
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold mt-3">Cancellation & Return</div>
              <div className="text-white text-xs font-semibold">Term of Use</div>
              <div className="text-white text-xs font-semibold">Privacy</div>
              <div className="text-white text-xs font-semibold">Security</div>
              <div className="text-white text-xs font-semibold">Sitemap</div>
              <div className="text-white text-xs font-semibold">Grievance Redressal</div>
              <div className="text-white text-xs font-semibold">EPR Compliance</div>
              <div className="  mt-5  ">
                <div className=" text-gray-400 text-xs">Social:</div>
                <div className="flex gap-x-4">
                  <div ><CiFacebook className="text-white font-semibold text-xl mt-1"/></div>
                  <div><FaXTwitter className="text-white mt-1.5"/></div>
                  <div><FiYoutube className="text-white mt-1.5"/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-400 text-xs mt-5">
            CONSUMER POLICY
            <div className="flex flex-col">
              <div className="text-white text-xs font-semibold mt-3">Cancellation & Return</div>
              <div className="text-white text-xs font-semibold">Term of Use</div>
              <div className="text-white text-xs font-semibold">Privacy</div>
              <div className="text-white text-xs font-semibold">Security</div>
              <div className="text-white text-xs font-semibold">Sitemap</div>
              <div className="text-white text-xs font-semibold">Grievance Redressal</div>
              <div className="text-white text-xs font-semibold">EPR Compliance</div>
            </div>
          </div>
          
        
       
        </div>
      <div className="border-b tex-white mt-7"></div>
      <div className="flex gap-x-3 mt-5">
        <div className="flex">
          <div className="text-yellow-500 ml-3"><MdOutlineStorefront className="text-xs mt-0.5"/></div>
          <div className="text-white text-xs">Become a Seller</div>
        </div>
        <div className="flex">
          <div>< PiShootingStar className="text-yellow-500"/></div>
          <div className="text-white text-xs">Advertise</div>
        </div>
        <div className="flex">
          <div><IoGiftOutline className="text-yellow-500"/></div>
          <div className="text-white text-xs">Gift Card</div>
        </div>
        <div className="flex">
          <div><IoIosHelpCircleOutline  className="text-yellow-500"/></div>
          <div className="text-white text-xs">Help Center</div>
        </div>
        <div className="flex">
          <div><FaRegCopyright  className="text-white p-1"/></div>
          <div className="text-white text-xs">2007-24 Flipkart.com</div>
        </div>
        <div className="w-64 mt-1">
          <img src="	https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Bottom;
