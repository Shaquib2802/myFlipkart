import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <div>
      {" "}
      <div class="flex h-24 bg-white overflow-hidden">
        <div class="flex-initial w-[15%] mr-7 -mt-10 border  border-gray-200 ">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAnFBMVEX////4y0Yxhhb4yDX4yj/4xy775q/4zEn4zU787sn502j4yTr++/T99OAAeAD73ZT98dX613zQ4MsAbwD4xR8VfQCQt46zza374J/4wxHf6t0AcwD++u/+9+fl7eO91Lcuhwzx9fD62oT51XCEsHb86rv63Iz5z1j75KcAaAAAWwCryKR5qXVuo19ypmrF2cBCjjNem1cthSGKtIIUgizzAAAEoElEQVR4nO2cbXeiOBiGoUkEJCpOcSsVbJFBbLt9me3//28bXhKC0uIRcM7O3tenEBPMRSDPEzytERt/DH+QCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8n+EzCv2gRyQZRs9yBbOm1nje+lzQP+/3lssMCvyDw2htwWzbYGeGuLncw8/3vznv3NC/YPBeHL/NNcXj7Vw8VIWObJWzW3oBPadmALgy+IFZetMi+67yRVfay/FaZh/lNyaY4vKuOVteVKcvny5iQuRDIQKbBw/yx5PfJGGFUEXadt0Mmvt+WlHHmt8icT4fMEePI8HQ/tbPkUJs1ZHhYwZtlMfh1kmXJQo28RUZ1CMNGBnB/v32RMn/3ygMaMtEyYMSl1GWB7fBTGZEBVIhnJpHlBTccGhT9SOA6X8nMLNkhWBvvz5uSZyMWxdWNtMnrbl/7y/BJ4JoS6ifeiUydAYhZWrpV+RDtfCrHbvrLsFUmTNyqyhX2P+RqdmvEsqhY/ewrQ5ydb+qwzGmRqRoXMnJsiav3I0nYIsP3spG7E5+PLGPKQSvcwqZTxqRHHemen8jwg2zlJnnGPbbMsYsY8jQ8R+YYaqUnMo4tz5IVx2PLtFxmtjhbRu9HxNQ0ZWZZ1Zja5QJxBRnXJ5nts3pcLDpPhrHM9NVxfvWbMlP1wEyME5mn4VezfOsx9UQMiFJLDUukLWfIUJaKft6SKLe0KaM+UWmQJmNst7EWZ/K0oHecMa3gICsTNSz/nAXArDbR8lOTTRoyB7lMulP5DbqMMXwGUDwgEnVbBLNumTosJlVTsua1zMwLpAtVXzC2jKW/eZDXkh2MzjizVFnnwpUy9cywtJ7B+htGlmETvXpXjdrdd8qQhRrjxDqVMZWLraWyI8s0s1unmhqadMusv5eRED3rHntmGluAmbzPssFkTKpdrqvKRPKhHVCmXsvGv80aMp68zabDyeSryZVkRKDTWLPqau4GlNFmf2QZN9GXZhX+updm1i1TL2hXkjF9p649MFnpdQbNbhkiF3qx97mSjOmrV/uO2qYF3elMlwz1Q65yaup8L/O2HUjG9NOQcx5G8oHJo3t/GVc8jKk8I53y72RuHl/iOP4xhIzp24v1eklYXeH1limWsLDOqNdtMu8fj3JuXj9fny61OdqcEUa0bQpZnrE565Apl3zv651mzv2vekcjeBtGpgHNY3ZvmfIdwFqtAUVeeiRjfCqZnH/6ylgt7wDy3HMYGbE9aGw2j2XeP3SZm/eeMm5qN99QUFIE7IFkjFRerSJ7PpZpTs3jhfeZlptFFtOCg1tt1ztlvs8A6p8BVbAhO34qY7xpNpvPC2VcVpL/kLoO5MsMEkyr1INnftnA3xvhvioXr2dlWZMhVdWCR/p5Czzbl1UT4736gXb+rEby+VTqrDarC+8yI5pUHIr94iQT6xlhdFGnnalsIZZp51A1FrHPkR3rzH5WV3F13joUT1Qdj+8eSu7qocSfH8Ju9etSlTZ4948v4xHjX5gDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwH+Zfo8p/UHg9unwAAAAASUVORK5CYII="
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="flex  flex-col border border-inherit w-[25%] text-center -ml-7 pt-4 ">
          <div className="font-extrabold font-sans text-xl">
            Delivery in 10 minutes
          </div>
          <div className="font-sans">280/22,Blunt Square,Mawaiya...</div>
        </div>
        <div class="flex-initial" className="w-[33%] border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search... "
              className=" mt-6 ml-6 border border-gray-200 h-12 w-full rounded-2xl pl-10  bg-gray-100"
            />
            <SearchIcon className="!text-gray-600 !text-2xl absolute top-[50%] left-8" />
          </div>
        </div>
        <div class=" flex-none" className="w-[15%] border-b border-grey-200">
          <div className="text-center pt-9 text-xl font-thin ">Login</div>
        </div>
        <div className="w-[12%] flex justify-start items-center">
          <div className=" bg-green-700 rounded-lg h-12 my-auto  p-3 text-white  gap-2 flex justify-center items-center border-b border-grey-200">
            <ShoppingCartOutlinedIcon />
            <div className="font-semibold text-xs text-center ">My Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
