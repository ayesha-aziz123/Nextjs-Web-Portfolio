import SectionHeading from "@/app/Helper/SectionHeading";
import { projectData } from "@/Data/data";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const Project = () => {
  return (
    <div className="pt-32 pb-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>
      <div
        className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-12 items-center"
      >
        {projectData.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-blue-950 h- p-6 rounded-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <Link href={project.url} target="_blank">
                <Image
                  src={project.image}
                  width={2000}
                  height={2000}
                  alt={project.title}
                  className="w-full object-cover cursor-pointer transition-opacity duration-300 hover:opacity-50"
                />
              </Link>

              {/* Icons Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 
                hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
              >
                {/* GitHub Link */}

                {/* Live Link */}
                <Link href={project.url} target="_blank">
                  <FaExternalLinkAlt className="text-white text-3xl hover:text-gray-300 transition" />
                </Link>
              </div>

              <p className="text-white text-[18px] py-2">{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
