import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-200px)] items-center justify-center">
      <div className="w-screen bgimage h-screen brightness-50 absolute top-0 right-0  -z-30"></div>
      <div className="flex flex-col gap-5 items-center justify-center px-10">
        <div className="text-white flex flex-col items-center justify-center">
          <h1 className="text-[40px] md:text-[80px] font-bold ">Momo Wagon</h1>
          <p className="text-[20px] md:text-[25px] font-light">
            Authentic Himalayan Cuisine
          </p>
        </div>
        <div className="flex md:text-[20px] text-[15px]  text-white gap-3 items-center justify-center">
          <button className="px-4 md:px-10 text-[13px] md:text-[20px] py-3 bg-momo-primary rounded-3xl hover:bg-opacity-70 font-semibold">
            Order Now
          </button>
          <button className="px-4 md:px-10 py-3  text-[13px] md:text-[20px]  flex items-center justify-center gap-2 hover:opacity-90 hover:bg-momo-black hover:bg-opacity-[0.3] rounded-3xl font-semibold">
            <FaPlay />
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
