import React from "react";

const GetInTouch = () => {
  return (
    <div className="bg-green-400 h-[300px] w-full px-10 py-3 flex flex-col md:flex-row\ gap-3">
      <div>
        <h1 className="text-[30px] ">Get in Touch</h1>
        <span className="text-sm">
          "Delightful Bites Await: Reach Out and Connect with Our Momo Haven!"
        </span>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <img className="w-10" src="/gps.svg" alt="location" />
          <div>
            <p>
              MomoWagon, NH 66, opp. TMM convention center, Palathara,
              Kottakkal,Kerala 676501
            </p>
            <span></span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default GetInTouch;
