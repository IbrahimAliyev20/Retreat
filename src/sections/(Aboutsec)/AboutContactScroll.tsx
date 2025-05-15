"use client";
import React, { useRef } from "react";
import Image from "next/image";

const AboutContactScroll: React.FC = () => {
  const retreats = React.useMemo(() => [
    {
      title: "Equality and understanding",
      image: "/images/aboutscroll1.jpg",
      description:
        "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat",
    },
    {
      title: "Dedication and experience",
      image: "/images/JoinUsSection.jpg",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis faucibus accumsan odio.",
    },
    {
      title: "You are what you eat",
      image: "/images/aboutscroll2.jpg",
      description:
        "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
    {
      title: "Sustainable living",
      image: "/images/aboutscroll3.jpg",
      description:
        "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
  ], []);


  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-72">
        <div className="md:w-1/3 sticky top-16 self-start">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 "
          >
            Values we live by
          </h2>
          <p className="bg-brown-600 mb-8 " >
            Suspendisse eu ligula. Nullam tincidunt adipiscing enim. Nunc nonummy.
          </p>
          <button
            className="bg-[#493913] text-white px-7 py-2 rounded-full hover:bg-brown-700 transition "
          >
            Contact us
          </button>
        </div>
        <div className="md:w-2/5 space-y-12">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="bg-[#f3e8ce] hover:bg-beige-200 rounded-3xl p-12 shadow-md text-center "
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-3xl font-semibold text-brown-800 mb-2">{retreat.title}</h3>
              <p className="text-lg bg-brown-600 mb-4">{retreat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContactScroll;
