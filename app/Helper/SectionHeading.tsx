import { ReactNode } from "react";

// Props type
type props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: props) => {
  return (
    <div>
      <h1
        className="bg-orange-700 w-fit text-center px-4 py-3 mx-auto text-white text-2xl 
      sm:text-3xl md:text-4xl uppercase -rotate-6"
      >
        {children}
      </h1>
    </div>
  );
};

export default SectionHeading;
