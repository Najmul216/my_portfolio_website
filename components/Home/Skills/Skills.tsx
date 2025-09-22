"use client";

import React from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 89,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 69,
  },
  {
    name: "React.Js",
    icon: <SiReact />,
    percentage: 95,
  },
  {
    name: "Next.Js",
    icon: <SiNextdotjs />,
    percentage: 90,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    percentage: 85,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    percentage: 95,
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skills) => {
          return (
            <Tilt key={skills.name} scale={1.3} transitionSpeed={300}>
              <div
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center 
                shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300 ">
                  {skills.icon}
                </div>
                <p className="text-2xl font-semibold">{skills.percentage}%</p>
                <p className="text-purple-400 pb-1">{skills.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
