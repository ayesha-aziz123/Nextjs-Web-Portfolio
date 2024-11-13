import { navLinks } from "@/constant/constant";
import Image from "next/image";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";

// Props Type

type props ={
openNav:()=>void
}

const Nav = ({openNav}:props) => {

  const [navBg,setNavBg] = useState();
  
  return (
    <div className="fixed h-[14vh] z-[10] bg-blue-950 w-full">
      <div
        className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%]
      mx-auto"
      >
        {/* Logo */}
        <Image
          src={"/images/logo1.png"}
          alt={"logo"}
          width={80}
          height={80}
          className="ml-[-1.5rem] sm:ml-0"
        />
        {/* NAV LINKS */}
        <div className="flex items-center space-x-10 ">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className="nav_link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>

          {/* BUTTON */}
          <div className="flex items-center space-x-4 ">
            <Link  className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg" target="_blank" href={"https://github.com/ayesha-aziz123"}>
              Hire me
            </Link>

            {/* BURGER MENU */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
