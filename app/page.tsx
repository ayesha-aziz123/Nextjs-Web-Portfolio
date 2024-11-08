import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
    <section className="h-full w-full  ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 mt-4">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Web Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Ayesha</span>
            </h1>
            <p className="max-w-[500px] text-[14px] mb-9 mt-2 text-white/80">
              Hi, I'm Ayesha, a 19-year-old web Developer from Karachi Pakistan.
              I’ve also developed a strong interest in web development.
               I’m Expertise in HTML, CSS, and
              JavaScript, TypeScript TailwindCSS to create responsive and
              functional websites. Looking ahead, I'm also planning to dive
              deeper React into frameworks like Next.js Powerful Framework ro
              enhance to deliver high-quality modern web solutions. My goal is
              to combine my passion for learning with technical expertise to
              create efficient, user-friendly digital experiences. Let’s
              collaborate and bring your ideas to life!
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 mt-16 xl:mt-0 ">
            <Photo  />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
