import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="blog"
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="mt-4 text-gray-400 font-medium text-base sm:text-lg">
        28 September 2025
      </p>
    </div>
  );
};

export default BlogCard;
