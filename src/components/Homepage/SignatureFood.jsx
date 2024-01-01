import React from "react";
import SignatureFoodCard from "./SignatureFoodCard";

const SignatureFood = () => {
  return (
    <div className="flex flex-col py-5 px-10 items-center justify-center">
      <div className="flex items-center justify-center px-10 py-10">
        <h1 className="text-momo-red font-bold text-[30px]">
          Our Few Signatures
        </h1>
      </div>
      <div className="flex gap-4 items-center justify-center overflow-hidden">
        <SignatureFoodCard />
        <SignatureFoodCard />
      </div>
    </div>
  );
};

export default SignatureFood;
