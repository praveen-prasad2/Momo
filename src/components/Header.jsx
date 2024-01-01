import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex h-[100px] items-center justify-between px-5">
      <img src={"/MomoWagonWhite.png"} height={130} width={130} alt="Logo" />
      <div className="text-white hidden lg:flex font-semibold text-[20px] lg:text-[25px] px-10">
        <ul className="flex items-center justify-center gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="text-white flex items-center justify-center lg:hidden">
        {!isMenuOpen ? <IoMenu size={50} /> : <IoMdClose size={50} />}
      </div>
    </div>
  );
};

export default Header;
