import React from "react";

const GetInTouch = () => {
  return (
    <div className=" h-[300px] w-full px-10 py-3 flex flex-col md:flex-row  gap-3">
      <div className="px-10">
        <h1 className="text-[30px] font-bold  text-momo-red">Get in Touch</h1>
        <span className="text-sm font-semibold">
          "Delightful Bites Await: Reach Out and Connect with Our Momo Haven!"
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8" src="/location.svg" alt="location" />
          <div className="flex flex-col items-start justify-center">
            <p>
              MomoWagon, NH 66, opp. TMM convention center, Palathara,
              Kottakkal,Kerala 676501
            </p>
            <span className="underline font-light text-sm">View on Map</span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8" src="/whatsapp.svg" alt="location" />
          <p>+91 70122 53518</p>
        </div>
        <div className="flex items-center gap-3 justify-start">
          <img className="w-8 " src="/email.svg" alt="location" />
          <p>momowagon@gmail.com</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-bold text-[20px]">Follow Us</h1>
          <div className="flex items-center justify-center gap-2">
            <img className="w-8" src="/twitter.svg" alt="twiiter" />
            <img className="w-8" src="/insta.svg" alt="instagram" />
            <img className="w-8" src="/facebook.svg" alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
