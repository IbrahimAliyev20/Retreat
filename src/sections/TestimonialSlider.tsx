"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "@/components/SliderArrows";
import Image from "next/image";
import useScrollAnimation from "../hook/useScrollAnimation";

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const testimonials = [
    {
      name: "Kelly Kapor",
      text: "What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.",
      image: "/images/TestimonialSlider.webp",
    },
    {
      name: "Sarah Johnson",
      text: "The retreat was a game-changer for me. The serene environment and guided sessions allowed me to reconnect with myself and find inner calm.",
      image: "/images/TestimonialSlider.webp",
    },
  ];

  const titleRef = useRef<HTMLHeadingElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 0);
  useScrollAnimation(sliderRef, 0.2);

  return (
    <section className="bg-[#fff9e9] px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-medium text-brown-800 mb-12 opacity-0"
          ref={titleRef}
        >
          Don’t just take our word for it
        </h2>
        <div
          className="bg-[#f5ecd7] max-w-2xl mx-auto py-8 rounded-xl opacity-0"
          ref={sliderRef}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-beige-200 rounded-3xl p-8 flex items-center gap-6">
                  <div className="relative w-140 h-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex gap-1 mb-2">
                      <Image
                        src="/icons/sec1icon.png"
                        alt="Daily yoga icon"
                        width={70}
                        height={70}
                        className="mb-4"
                      />
                    </div>
                    <p className="text-brown-600 mb-4 text-xl">“{testimonial.text}”</p>
                    <p className="text-brown-600 font-medium">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;