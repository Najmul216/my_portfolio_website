import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md: text-4xl xl:text-5xl font-bold text-white">
        Colleborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div>
          <ServiceCard
            icon="/images/web-dev1.png"
            name="Full-Stack Web Development"
            description="Developing Websites that are interacticve, efficient and user-friendly."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/app-dev1.png"
            name="App Development"
            description="Developing Apps that are Cross-platform and user-friendly."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/dev-Ops1.png"
            name="Dev-Ops Engineering"
            description="Responsible for all aspects of the software development lifecycle, including communicating critical information to the business and customers."
          />
        </div>
        <div>
          <ServiceCard
            icon="/images/web-an1.png"
            name="Web analytics & conversion tracking"
            description="Collecting, measuring, analyzing, and reporting data from websites and digital platforms to understand user behavior and optimize online performance."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
