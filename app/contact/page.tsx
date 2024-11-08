"use client";
import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation ki duration
      once: true, // Sirf ek bar animation chalayega
    });
  }, []);

  return (
    <div className="pt-8 pb-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Contact Form */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ContactForm />
        </div>
        {/* Contact info */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="xl:mx-auto"
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
