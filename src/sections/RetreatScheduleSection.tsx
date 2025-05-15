"use client";
import React, { useRef } from 'react';
import useScrollAnimation from '../hook/useScrollAnimation';

const RetreatScheduleSection: React.FC = () => {
  const retreats = [
    {
      title: '5 day detox programme',
      date: 'May 10, 2023 - July 15, 2023',
      image: '/images/scrollsec1.jpg',
      description:
        'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat',
    },
    {
      title: '7 day yoga retreat',
      date: 'June 1, 2023 - June 8, 2023',
      image: '/images/scrollsec2.jpg',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis faucibus accumsan odio.',
    },
    {
      title: '10 day wellness escape',
      date: 'August 5, 2023 - August 15, 2023',
      image: '/images/scrollsec3.jpg',
      description:
        'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    },
  ];

  const stickyTitleRef = useRef<HTMLHeadingElement>(null);
  const stickyTextRef = useRef<HTMLParagraphElement>(null);
  const stickyButtonRef = useRef<HTMLButtonElement>(null);
  const cardRefs = retreats.map(() => useRef<HTMLDivElement>(null));

  useScrollAnimation(stickyTitleRef, 0);  
  useScrollAnimation(stickyTextRef, 0.2);   
  useScrollAnimation(stickyButtonRef, 0.4); 
  cardRefs.forEach((ref, index) => useScrollAnimation(ref, 0.6 + index * 0.2)); 

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-72">
        {/* Left Sticky Section */}
        <div className="md:w-1/3 sticky top-16 self-start">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 opacity-0"
            ref={stickyTitleRef}
          >
            Upcoming retreats
          </h2>
          <p
            className="bg-brown-600 mb-8 opacity-0"
            ref={stickyTextRef}
          >
            Check our schedule and free spots, book the date and let’s have fun!
          </p>
          <button
            className="bg-[#493913] text-white px-7 py-2 rounded-full hover:bg-brown-700 transition opacity-0"
            ref={stickyButtonRef}
          >
            See all retreats
          </button>
        </div>

        {/* Right Scrollable Cards */}
        <div className="md:w-2/5 space-y-12">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="bg-[#f3e8ce] hover:bg-beige-200 rounded-3xl p-12 shadow-md opacity-0"
              ref={cardRefs[index]}
            >
              <h3 className="text-xl font-semibold text-brown-800 mb-2">
                {retreat.title}
              </h3>
              <p className="text-xl font-light bg-brown-600 mb-8">{retreat.date}</p>
              <img
                src={retreat.image}
                alt={retreat.title}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <p className="bg-brown-600 mb-4">{retreat.description}</p>
              <button className="border-1 cursor-pointer bg-brown-600 px-6 py-2 rounded-full hover:bg-brown-700 transition">
                Book now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatScheduleSection;