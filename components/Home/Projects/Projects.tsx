import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Overview of my recent <br />{" "}
        <span className="text-cyan-300">completed projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1st Project */}
        <div>
          <Image
            src="/images/p1.jpg"
            alt="image"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Multi-vendor ecommerce website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Website, Apps, Full-stack
          </h1>
        </div>

        {/* 2nd Project */}
        <div>
          <Image
            src="/images/p2.jpg"
            alt="image"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Company website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">
            Branding, Portfolio
          </h1>
        </div>
        {/* 3rd Project */}
        <div>
          <Image
            src="/images/p3.jpg"
            alt="image"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Agency Website
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Website, Apps</h1>
        </div>
        {/* 4th Project */}
        <div>
          <Image
            src="/images/p4.jpg"
            alt="image"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            Intelligent Agency
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Website, UI/UX</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
