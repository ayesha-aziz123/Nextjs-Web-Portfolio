"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTotop = () => {
  const [isvisible, setIsvisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 p-2 animate-pulse">
      {isvisible && (
        <button
          onClick={scrollToTop}
          className="text-white p-4 hover:bg-pink-500 bg-pink-700 rounded-full"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTotop;
