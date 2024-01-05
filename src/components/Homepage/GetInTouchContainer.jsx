import React from "react";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const GetInTouchContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      <GetInTouch />
      <ContactForm />
    </div>
  );
};

export default GetInTouchContainer;
