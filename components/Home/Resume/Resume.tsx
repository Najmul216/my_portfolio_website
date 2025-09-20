import React from "react";
import ResumeCard from "./ResumeCard";
import { FaBookOpen, FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-300">Experiences</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Software Engineer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio."
            />
            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio."
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio."
            />
          </div>
        </div>
        {/* Education Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Educational <span className="text-cyan-300">Qualifications</span>
          </h1>
          <div className="mt-10">
            <ResumeCard
              Icon={FaBookOpen}
              role="M.sc in Computer Science & Engineering "
              date="2016 - 2017"
              text="Daffodill International University"
            />
            <ResumeCard
              Icon={FaBookOpen}
              role="B.sc in Computer Science & Engineering "
              date="2012 - 2016"
              text="Northern University of Bangladesh"
            />
            <ResumeCard
              Icon={FaBookOpen}
              role="Diploma in Computer Technology "
              date="2005 - 2009"
              text="Feni Polytechnical Institute"
            />
            <ResumeCard
              Icon={FaBookOpen}
              role=" S.S.C "
              date="2002"
              text="Noakhali Zilla School"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
