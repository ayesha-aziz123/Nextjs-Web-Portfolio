"use client"
import { servicesData } from "@/data/Data";
import ServiceCard from "./ServiceCard";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Services:React.FC = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation ki duration
      once: true, // Sirf ek bar animation chalayega
    });
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <h1 className="text-center text-4xl xl:text-6xl text-accent">
        Services.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service, i) => {
          return (
            <div
              key={service.id}
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
            >
              {/* Service Card */}
              <ServiceCard service={service} data-aos="fade-left"
 />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
