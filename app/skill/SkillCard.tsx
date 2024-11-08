import Image from "next/image";
import React from "react";

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

export const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;

  return (
    <div className="p-6 bg-gray-900 text-center rounded-lg hover:bg-blue-950 transition-all duration-300 cursor-pointer">
      <Image
        src={image}
        alt="Skill Image"
        width={90}
        height={90}
        className="object-cover mx-auto"
      />
      <h1 className="text-[20px] text-white mt-4 font-[600]">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">{percent}</div>
    </div>
  );
};
