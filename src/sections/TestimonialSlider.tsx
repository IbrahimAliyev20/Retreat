"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "@/components/SliderArrows";
import Image from "next/image";
import { CommentsType } from "@/types/type";

  interface Props {
  comment: CommentsType[];
}
const TestimonialSlider: React.FC<Props> = ({ comment }) => {

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



  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-medium text-brown-800 mb-12 "
        >
          Don’t just take our word for it
        </h2>
        <div
          className="bg-color-yellow max-w-2xl mx-auto py-8 rounded-xl "
        >
          <Slider {...settings}>
            {comment.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-beige-200 rounded-3xl p-8 flex items-center gap-6">
                  <div className="relative w-140 h-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
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
                    <p className="text-brown-600 mb-4 text-xl">“{testimonial.description}”</p>
                    <p className="text-brown-600 font-medium">{testimonial.author}</p>
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