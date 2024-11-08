"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const Links2 = [
  {
    name: "home",
    path: "/",
  },
  
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Skills",
    path: "/skill",
  },

  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-12 mb-36  text-2xl ">
          <Link href={"/"}>
          <h1 className="text-2xl font-semibold">
            Ayesha<span className="text-accent">.</span>
          </h1></Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links2.map((links, index) => {
            return (
              <Link
                href={links.path}
                key={index}
                className={`${
                  links.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {links.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
