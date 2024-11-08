"use client";
import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import image1 from "../../public/projects/food2.png";
import image2 from "../../public/projects/resume2.png";
import image3 from "../../public/projects/thumbnail.png";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontened",
    title: "project 1",
    description:
      " Multipage website —a fully responsive food website 🍔🍕",
    stack: [
      { name: "Nextjs" },
      { name: "TailwindCSS" },
      { name: "Typescript" },
    ],
    image: image1,
    live: "https://milestone-2-assiangment-a.vercel.app/",
    github:
      "https://github.com/ayesha-aziz123/Milestone-2_Assiangment-FoodWebsite",
  },
  {
    num: "02",
    category: "Frontened",
    title: "project 2",
    description:
      " Static Interactive Resume! ",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "TypeScript" }],
    image: image2,
    live: "https://milestone1-static-interactive-resume-builder-ayesha.vercel.app/",
    github:
      "https://github.com/ayesha-aziz123/Milestone1-Static-Interactive-Resume-Builder-",
  },
  {
    num: "03",
    category: "Frontened",
    title: "project 3",
    description:
      "Personal Portfolio website ",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
    ],
    image: image3,
    live: "https://personal-portfolio-website-ayesha.vercel.app/?vercelToolbarCode=ZYZ-zEP5HKAXnHG",
    github: "https://github.com/ayesha-aziz123/Personal-Portfolio-Website",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold bg-transparent  text-outline  ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[20px] xl:text-[45px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60"> {project.description} </p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-[12px] text-accent">
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20 "></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="bg-white text-black text-[10px] px-4 py-2 rounded-xl">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <a className="bg-white text-black text-[10px] px-4 py-2 rounded-xl">
                          Github Project
                        </a>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-auto xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center ">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-transparent xl:bg-black/10 z-10"></div>

                      {/*Image */}
                      <div className="relative w-full h-full bg-transparent">
                        <Image
                          src={project.image}
                          height={7000}
                          width={7000}
                          className="object-cover "
                          alt={"Project Image"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-white hover:bg-accent-hover text-primary text-[20px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
