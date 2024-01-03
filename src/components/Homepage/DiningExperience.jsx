import React from "react";
import { Carousel } from "@material-tailwind/react";

const DiningExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center px-10 py-10">
        <h1 className="text-momo-red font-bold text-3xl">Dining Experience</h1>
      </div>
      <div className="flex items-center justify-center px-10 h-[500px]">
        <Carousel
          transition={{ duration: 1 }}
          autoplay
          autoplayDelay={2000}
          className="rounded-xl"
        >
          <img
            src="/image-truck.png"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default DiningExperience;
