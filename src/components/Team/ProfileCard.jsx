import React from "react";

const ProfileCard = () => {
  return (
    <div className="w-[250px] bg-gray-300 rounded-3xl shadow-2xl">
      <div className="bg-momo-primary rounded-3xl">
        <img src="/person.png" alt="ProfilePhoto" />
      </div>
      <div className=" flex flex-col items-center justify-start rounded-3xl  py-3 px-3">
        <h1 className="text-center font-bold text-lg">Praveen</h1>
        <span className="text-center font-semibold ">co founder</span>
        <p className="break-all">
          Discover the Faces Behind Momo Wagon: A Collective of Culinary
          Visionaries, Entrepreneurs, and Innovators. Meet the Team Committed to
          Elevating Your Dining Experience with Freshly Crafted Himalayan Momos.
          Each Member Brings a Unique Fl
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
