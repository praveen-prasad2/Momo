import React from "react";

const ContactForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };

  return (
    <div className="flex  items-center justify-center flex-col gap-4  w-1/2 bgImageBlob lg:w-[110%] p-10 ">
      <h1 className="text-[30px]  font-bold text-white">Leave a Message</h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col items-center justify-center gap-1"
        action=""
      >
        <label htmlFor="name">Full Name</label>
        <input
          className=" bg-gray-300 w-[300px] p-2 rounded-xl"
          type="text"
          name="name"
          placeholder="Your Name *"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className=" bg-gray-300 w-[300px] p-2 rounded-xl"
          type="email"
          name="email"
          placeholder="Your Email *"
          id="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          maxlength={150}
          rows={5}
          className=" bg-gray-300 resize-none  w-[300px] p-2 rounded-xl"
          type="text"
          name="message"
          placeholder="Your Message *"
          id="message"
        />
        <input className="bg-red-50 rounded-xl mt-3 px-5 py-2" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
