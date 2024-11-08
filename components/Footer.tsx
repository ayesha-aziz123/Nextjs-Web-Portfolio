import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-8 pb-8 bg-[#0f07157e]">
      <h1 className="px-4  text-2xl text-accent ">Portfolio</h1>
      <div className=" px-2 flex items-center text-[10px] xl:text-[16px] flex-wrap justify-center text-white space-x-10 space-y-4 font-semibold">
        <div className="mt-4 hover:text-accent">
          <Link href="/">Home</Link>
        </div>
        <div className="hover:text-accent">
          <Link href="/">About</Link>
        </div>
        <div className="hover:text-accent">
          <Link href="/services">Services</Link>
        </div>
        <div className="hover:text-accent">
          <Link href="/projects">Projects</Link>
        </div>
        <div className="hover:text-accent">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <p className="text-center mt-6 text-[15px] text-white opacity-60">
        &copy; 2024 All Rights Reserved by Ayesha
      </p>
    </div>
  );
};

export default Footer;
