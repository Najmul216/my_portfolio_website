import React from "react";
import { BiEnvelope } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { MdPhoneAndroid } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/*Text Content*/}
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200">
            Schedule a call to me if i can help.
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me quickly and let&apos;s discuss how I can help you.
          </p>
          {/*Info.*/}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <MdPhoneAndroid className="w-7 h-7 text-cyan-300" />
              <p className="text-md font-bold text-gray-400">+880 1883018416</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-7 h-7 text-cyan-300" />
              <p className="text-md font-bold text-gray-400">
                hasan.najmul00199@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <MdOutlineMapsHomeWork className="w-7 h-7 text-cyan-300" />
              <p className="text-md font-bold text-gray-400">
                Noakhali, Chittagong, Bangladesh
              </p>
            </div>
          </div>
          {/*Social Icons*/}
          <div className="flex items-center mt-8 space-x-3">
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-blue-800 transition-all duration-300"
            >
              <FaFacebookF className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-[#1da1f2] transition-all duration-300"
            >
              <FaTwitter className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-[#8134AF] transition-all duration-300"
            >
              <FaInstagram className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-[#0077B6] transition-all duration-300"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </div>
            <div
              className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col
            hover:bg-red-800 transition-all duration-300"
            >
              <FaYoutube className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        {/*Form*/}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/60"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/60"
          />
          <input
            type="text"
            placeholder="Your Phone number"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/60"
          />
          <textarea
            placeholder="Message"
            className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/60"
          ></textarea>
          <button className="mt-8 px-12 py-4  bg-blue-950 hover:bg-blue-800 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
