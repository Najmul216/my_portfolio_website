import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReviews from "./ClientReviews/ClientReviews";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReviews />
    </div>
  );
};

export default Home;
