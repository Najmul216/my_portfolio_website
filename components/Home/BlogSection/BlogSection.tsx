import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="pt-16 pb-16 ">
      <h1 className="text-center text-xl md:text-2xl xl:text-3xl font-bold text-white">
        My Latest
        <span className="text-cyan-300"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCard
            image="/images/b1.jpg"
            title="Learn how to build a Ecommerce website using MERN Stack"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCard
            image="/images/b2.jpg"
            title="Learn how to build a Blog website using Next.js"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b3.jpg"
            title="Learn how to build a Company website using Next.js"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
