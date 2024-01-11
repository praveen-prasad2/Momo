import React from "react";
import SignatureFoodCard from "./SignatureFoodCard";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "red",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SignatureFood = () => {
  return (
    <div className="flex flex-col py-1 px-10 items-center justify-center gap-10">
      <div className="flex items-center justify-center">
        <h1 className="text-momo-red font-bold  text-2xl md:text-3xl">
          Our Few Signatures
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:hidden flex items-center justify-center">
          <Carousel arrows className="w-[280px]" autoplay infinite>
            <div style={contentStyle}>
              <SignatureFoodCard />
            </div>
            <div>
              <SignatureFoodCard />
            </div>
            <div>
              <SignatureFoodCard />
            </div>
            <div>
              <SignatureFoodCard />
            </div>
          </Carousel>
        </div>

        <div className="lg:flex gap-4 items-center justify-center  flex-wrap hidden ">
          <SignatureFoodCard />
          <SignatureFoodCard />
          <SignatureFoodCard />
          <SignatureFoodCard />
        </div>
      </div>
    </div>
  );
};

export default SignatureFood;
