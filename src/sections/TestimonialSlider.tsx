"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "@/components/SliderArrows";
import Image from "next/image";
import { CommentsType } from "@/types/type";
import Reveal from "@/components/Reveal";

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
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <Reveal duration={0.5} yOffset={40}>
          <h2 className="text-3xl md:text-4xl font-medium text-brown-800 mb-12">
            Bunu sadəcə bizim sözümüz kimi qəbul etməyin.
          </h2>
        </Reveal>
        <div className="max-w-3xl mx-auto py-8 rounded-xl">
          <Slider {...settings}>
            {comment.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Reveal duration={0.7} yOffset={50}>
                  <div className="bg-white rounded-lg p-0 md:p-8 flex items-center gap-6 h-76">
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <Reveal duration={0.9} yOffset={60}>
                        <div className="flex gap-1 mb-2">
                          <Image
                            src="/icons/sec1icon.png"
                            alt="Daily yoga icon"
                            width={70}
                            height={70}
                            className="mb-4 filter hue-rotate-85"
                          />
                        </div>
                      </Reveal>
                      <Reveal duration={1.0} yOffset={70}>
                        <p className="color-desc mb-4 text-[16px] md:text-xl">“{testimonial.description}”</p>
                        <p className="color-desc font-medium">{testimonial.author}</p>
                      </Reveal>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;