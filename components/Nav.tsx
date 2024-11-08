"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

let Linkss = [
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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {Linkss.map((links1, index) => {
        return (
          <Link
            href={links1.path}
            key={index}
            className={`${
              links1.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {links1.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
