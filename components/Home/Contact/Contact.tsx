import React from "react";

import { MdPhoneAndroid } from "react-icons/md";

const Contact = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/*Text Content*/}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call to me if i can help.
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            Reach out to me quickly and let&apos;s discuss how I can help you.
          </p>
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <MdPhoneAndroid className="w-9 h-9 text-cyan-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
