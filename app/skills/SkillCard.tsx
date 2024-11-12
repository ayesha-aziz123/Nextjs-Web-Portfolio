import Image from "next/image";

// define props type
type props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: props) => {
  const { image, percent, title } = skill;
  return (
    <div
      className="p-6 hover:bg-orange-800 transition-all duration-300 cursor-pointer 
    text-center rounded-lg bg-gray-900"
    >
      <Image
        src={skill.image}
        alt={skill.title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] text-white mt-4 font-[600] ">{title} </h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">{percent} </div>
    </div>
  );
};

export default SkillCard;
