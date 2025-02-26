import SectionHeading from "@/app/Helper/SectionHeading";
import { aboutInfo, BaseInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-32 pb-16 bg-[#050709] ">
      <SectionHeading>About Me</SectionHeading>
      <div className="mx-auto w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div className="">
          <h1 className="text-bg text-[26px]  sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 p-1 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontened Development
              </p>
            </div>
            {/* 2 */}
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 p-1 bg-red-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>

              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            {/* 3 */}
            <div className="flex items-center space-x-2 mb-6 ">
              <div className="w-7 h-7 p-1 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>

        {/* Stats Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
            {/* 1 */}
          <div>
            <Image
              className="mx-auto"
              src={"/customer.jpg"}
              alt={"image"}
              width={80}
              height={80}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.client} </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Satisfied Customers</p>
          </div>
          {/* 2 */}
          <div>
            <Image
              className="mx-auto"
              src={"/experience.png"}
              alt={"image"}
              width={80}
              height={80}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience} </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Years Experience</p>
          </div>
          {/* 3 */}
          <div>
            <Image
              className="mx-auto"
              src={"/completed.png"}
              alt={"image"}
              width={80}
              height={80}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project} </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Completed Project</p>
          </div>
          {/* 4 */}
          <div>
            <Image
              className="mx-auto"
              src={"/rocket.png"}
              alt={"image"}
              width={80}
              height={80}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.website} </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
            Website Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
