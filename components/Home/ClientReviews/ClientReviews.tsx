"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ClientReviews = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-xl md:text-2xl xl:text-3xl font-bold text-white">
        Kind reviews from satisfied <br />
        <span className="text-cyan-300">Clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          // swipeable={false}
          // draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
        >
          <ClientReviewCard
            image="/images/c1.png"
            name="Sharmin Khanam"
            role="CGM, Multiverse Soft."
          />
          <ClientReviewCard
            image="/images/c2.png"
            name="Sabab Sadman Chowdhury"
            role="MD, Multiverse Software"
          />
          <ClientReviewCard
            image="/images/c3.png"
            name="Nusaiba Nawal"
            role="CEO, Multiverse Soft."
          />
          <ClientReviewCard
            image="/images/c4.png"
            name="Abrar Ahamed"
            role="COO, Telegram"
          />
          <ClientReviewCard
            image="/images/c5.png"
            name="Tanjika Hasan"
            role="CTO, fiber@home"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReviews;
