import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/page";
import Services from "../Services/page";
import Project from "../projects/page";
import Skills from "../skills/page";
import Reviews from "../Review/page";
import Contact from "../contact/page";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
      <Contact/>
    </div>
  );
};

export default Home;
