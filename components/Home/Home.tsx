import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import ClientReviews from "./ClientReviews/ClientReviews";
import BlogSection from "./BlogSection/BlogSection";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReviews />
      <BlogSection />
      <Contact />
    </div>
  );
};

export default Home;
