import React from "react";

const SignatureFoodCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-momo-orange rounded-2xl px-4 py-5 lg:w-[300px] w-[280px] h-[500px]">
      <div className="flex items-center justify-center">
        <h1 className=" text-2xl lg:text-3xl font-bold text-white">
          Schezwan momos
        </h1>
      </div>
      <div>
        <img
          src={"/momos-in-plate-1.png"}
          alt="Momo Wagon"
          height={250}
          width={250}
        />
      </div>
      <p className="break-all px-2">
        Indulge in our menu's highlight, Schezwan Momos, a culinary masterpiece.
        Immerse yourself in the fusion of freshly sourced ingredients and
        premium imported sauces, delivering a tantalizing dining experience
        beyond compare.
      </p>
    </div>
  );
};

export default SignatureFoodCard;
