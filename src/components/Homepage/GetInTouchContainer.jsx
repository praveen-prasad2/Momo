import React from "react";
import ContactForm from "./ContactForm";
import GetInTouch from "./GetInTouch";

const GetInTouchContainer = () => {
  return (
    <div
      id="#contact"
      className="flex flex-col lg:flex-row items-center justify-center gap-20 md:gap-0"
    >
      <GetInTouch />
      <ContactForm />
    </div>
  );
};

export default GetInTouchContainer;
