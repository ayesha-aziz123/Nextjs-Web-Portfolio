import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white bg-[#1c1c1c]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-4xl font-semibold ">
          <h1>
            Ayesha <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href={"/contact"}>
            <button className="py-1 px-7 rounded-[20px] bg-accent text-black  hover:transition-all  hover:scale-105 ease-in duration-150">
              Hire me
            </button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
