"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { ImArrowRight } from "react-icons/im";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 mt-6 flex flex-col items-center">
        <Image
          src="/images/s1.jpg"
          alt="heroImage"
          width={200}
          height={200}
          quality={90} //high quality for better appearance
          priority={true} //image will load quickly as it's important for the hero section
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-lg sm:text-3xl md:text-3xl lg:text-2xl px-2 text-center flex items-center"
        >
          Hi, This is
          <span className="text-cyan-300 pl-2 font-bold">
            Md. Nazmul Hasan Chowdhury
          </span>
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-md px-2 text-center sm:text-2xl md:text-xl font-medium flex items-center"
        >
          I&apos;m a Passionate -
          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer.",
                  "App Developer.",
                  "Web Analytics Expert.",
                  "Dev-Ops Engineer.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-sm md:text-lg lg:text-lg max-w-[35rem] mt-6 text-center font-normal tracking-wide"
        >
          I&apos;m an M.sc Engineer in Computer Science and Engineering. My work
          explores how emerging technologies — such as Web development, web
          analytics & convertion tracking, and Dev-ops engineering — can be
          leveraged to <br /> solve real-world challenges.
        </h1>
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-10 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
          cursor-pointer rounded-full text-md sm:text-lg font-medium"
        >
          <span>Explore my work</span>
          <ImArrowRight className="w-4 h-4 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
