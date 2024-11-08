import { contactData } from "@/data/Data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8 ">
        <div className="text-white w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center bg-[#27272c] justify-center hover:scale-125 duration-200 ease-linear">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-accent cursor-pointer" />
        </div>
        <div className="">
          <h1 className="font-bold text-[15px] sm:text-xl md text-white">Phone</h1>
          <h1 className="text-[10px] sm:text-[15px] text-white text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div
          className="text-white w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center
            bg-[#27272c] justify-center hover:scale-125 duration-200 ease-linear"
        >
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-accent cursor-pointer" />
        </div>
        <div>
          <h1 className="font-bold  text-[15px]  sm:text-xl md text-white">Email</h1>
          <h1 className="text-[01px] sm:text-[15px] text-white text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      <div className="flex items-center space-x-8 ">
        <div
          className="text-white w-10 h-10 md:w-16 md:h-16 rounded-full  flex flex-col items-center 
            bg-[#27272c] justify-center hover:scale-125 duration-200 ease-linear"
        >
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-accent cursor-pointer" />
        </div>
        <div>
          <h1 className="font-bold text-[15px] sm:text-xl md text-white">
            Address
          </h1>
          <h1 className="text-[10px] sm:text-[15px] text-white text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
