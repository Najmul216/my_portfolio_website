import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="pt-16 pb-16 ">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My Latest
        <span className="text-cyan-300"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div>
          <BlogCard
            image="/images/b1.jpg"
            title="Learn how to build a Ecommerce website using MERN Stack"
          />
        </div>
        <div>
          <BlogCard
            image="/images/b2.jpg"
            title="Learn how to build a Blog website using Next.js"
          />
        </div>
        <div>
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
