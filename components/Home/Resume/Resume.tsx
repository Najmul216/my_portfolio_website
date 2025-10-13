import React from "react";
import ResumeCard from "./ResumeCard";
import { FaBookOpen, FaCodepen, FaNetworkWired, FaReact } from "react-icons/fa";
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
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaReact}
              date="2022 - Now"
              role="Application Developer"
              text="Suncrop Group."
            />
            <ResumeCard
              Icon={BsDatabase}
              date="2017 - 2021"
              role="Executive (Operations)"
              text="Bengal Communications Ltd."
            />
            <ResumeCard
              Icon={FaCodepen}
              date="2013 - 2015"
              role="Jr. Executive (Customer Support)"
              text="BanglaLion Communication Ltd."
            />
            <ResumeCard
              Icon={FaNetworkWired}
              date="2010 - 2012"
              role="IT Officer"
              text="Padma Islami Life Insurance Ltd."
            />
          </div>
        </div>
        {/* Education Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Educational <span className="text-cyan-300">Qualifications</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ResumeCard
              Icon={FaBookOpen}
              role="M.sc in Computer Science & Engineering "
              date="2016 - 2018"
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
              text="Feni Polytechnic Institute"
            />
            <ResumeCard
              Icon={FaBookOpen}
              role=" Secondary School Certificate (S.S.C) "
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
