"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dp from "../public/dp2.jpg";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten  ">
          <Image
            src={dp}
            priority
            quality={100}
            fill
            className="object-cover rounded-full hover:cursor-pointer hover:transition-all hover:scale-[1.01] duration-150"
            alt={""}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
