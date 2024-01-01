import React from "react";

const SignatureFoodCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-momo-orange rounded-2xl px-5 py-5 w-[300px] h-[600px]">
      <div className="flex items-center justify-center">
        <h1 className="text-[30px] font-bold text-white">Schezwan momos</h1>
      </div>
      <div>
        <img
          src={"/momos-in-plate-1.png"}
          alt="Momo Wagon"
          height={250}
          width={250}
        />
      </div>
      <p>
        Indulge in our menu's highlight, Schezwan Momos, a culinary masterpiece.
        Immerse yourself in the fusion of freshly sourced ingredients and
        premium imported sauces, delivering a tantalizing dining experience
        beyond compare.
      </p>
    </div>
  );
};

export default SignatureFoodCard;
