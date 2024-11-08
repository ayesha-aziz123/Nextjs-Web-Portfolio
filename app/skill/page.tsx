"use client";
import React from "react";
import { SkillCard } from "./SkillCard";
import a from "../../public/skills/react.svg";
import b from "../../public/skills/css.svg";
import c from "../../public/skills/js.svg";
import d from "../../public/skills/ts.svg";
import e from "../../public/skills/html.svg";
import f from "../../public/skills/tailwind.svg";
import g from "../../public/skills/python.svg";
import h from "../../public/skills/nextCustom.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const skillsData = [
  {
    id: 1,
    title: "React",
    image: a,
    percent: "80%",
  },
  {
    id: 2,
    title: "CSS",
    image: b,
    percent: "100%",
  },
  {
    id: 3,
    title: "JavaScript",
    image: c,
    percent: "80%",
  },
  {
    id: 4,
    title: "TypeScript",
    image: d,
    percent: "80%",
  },
  {
    id: 5,
    title: "HTML",
    image: e,
    percent: "100%",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    image: f,
    percent: "60%",
  },
  {
    id: 7,
    title: "Python",
    image: g,
    percent: "50%",
  },
  {
    id: 8,
    title: "Next.JS",
    image: h,
    percent: "75%",
  },
];

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation ki duration
      once: true, // Sirf ek bar animation chalayega
      delay: 1000,
    });
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#050715]">
      <h1
        data-aos="zoom-in"
        className="text-center text-4xl xl:text-5xl text-accent"
      >
        {" "}
        My Skills.
      </h1>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 items-center">
        {skillsData.map((skill, i) => {
          return (
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 150}`}
              key={skill.id}
            >
              {/* Skill Card */}
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
