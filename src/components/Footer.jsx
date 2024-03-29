import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-red-blob hidden lg:flex w-[500px] h-[500px] absolute bottom-[100px] -left-[350px]"></div>
      <div className="bg-yellow-blob hidden lg:flex w-[500px] h-[500px] absolute -right-[300px] top-[100px] "></div>
      <div className=" w-full flex items-center lg:px-[200px] md:px-16 px-6 h-[400px] justify-between ">
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="md:w-[200px] w-[100px]" src="momoWagonBlack.png" alt="MomoWagon" />
          <p className="w-[200px] flex-wrap text-center">
            NH 66, opp. TMM convention center, Palathara, Kottakkal,Kerala
            676501
          </p>
          <button className="bg-momo-primary px-4 py-2 hover:bg-yellow-600 rounded-2xl">
            Call Now
          </button>
          <div className="flex items-center justify-center gap-2">
            <img className="w-8" src="/twitter.svg" alt="twiiter" />
            <img className="w-8" src="/insta.svg" alt="instagram" />
            <img className="w-8" src="/facebook.svg" alt="facebook" />
            <img className="w-8" src="/whatsapp.svg" alt="whatsapp" />
          </div>
        </div>
        <div>
          <h1 className="underline">Quick Links</h1>
          <ul className="text-[15px]">
            <li>About Us</li>
            <li>Menu</li>
            <li>Team</li>
            <li>Company</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Faq</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="font-thin text-sm mb-4">
          Copyright © 2023 Momo Wagon | Powered by {""}
          <a href="www.duoph.com">Duoph</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
