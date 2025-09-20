import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";

const Home = () => {
  return (
    <div className="overflow-hidden text-white">
      <Hero />
      <Services />
      <Resume />
    </div>
  );
};

export default Home;
