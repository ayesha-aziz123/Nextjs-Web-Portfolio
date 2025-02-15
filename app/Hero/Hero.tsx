import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full pt-[120px] mt-5 md:pt-[15vh] py-10 min-h-screen bg-[#0f0715] overflow-hidden relative">
      <div className=" flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text CONTENT */}
          <div>
            {/* SUB HEADING */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h1>
            {/* TITLE */}
            <h1
              className="text-bg text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold
             md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>

            {/* Description */}
            <p className="md:text-base mt-6 text-sm text-white text-opacity-60 ">
              {BaseInfo.description}
            </p>
            <Link
              href={"/cv/resume.pdf"}
              download="Ayesha_CV.pdf" // File ka naam jab download ho
            >
              <button
                className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg
            transition-all duration-200 rounded-lg mt-8 bg-blue-800 hover:bg-blue-900 flex items-center space-x-2"
              >
                <span>Download CV</span>
                <FaDownload />
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="mx-auto my-7 hover:animate-pulse rounded-[3rem] border-[3.5px] border-blue-950  overflow-x-hidden">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={350}
              height={350}
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
