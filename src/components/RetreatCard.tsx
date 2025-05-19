"use client";
import Image from 'next/image';

const RetreatCard: React.FC = () => {

  const cards = [
    {
      date: 'July 10, 2023',
      features: [
        '★ Daily yoga exercises',
        '⚖ Balanced detox diet',
        '👥 Certified team members',
      ],
      title: '14 day yoga retreat',
      price: '$2,500.00 USD',
      description:
        'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat',
      imageSrc: '/images/abouthero.webp',
    },
    {
      date: 'May 10, 2023',
      features: [
        '★ Daily yoga exercises',
        '⚖ Balanced detox diet',
        '👥 Certified team members',
      ],
      title: '5 day detox programme',
      price: '$1,200.00 USD',
      description:
        'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat',
      imageSrc: '/images/scrollsec1.jpg',
    },
    {
      date: 'September 10, 2023',
      features: [
        '★  Daily yoga exercises',
        '⚖  Balanced detox diet',
        '👥 Certified team members',
      ],
      title: '10 day full retreat',
      price: '$2,000.00 USD',
      description:
        'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat',
      imageSrc: '/images/scrollsec3.jpg', 
    },
  ];

  return (
    <section>
      {cards.map((card, index) => (
        <div
          key={index}
          className="min-h-screen flex items-center justify-center "
        >
          <div className="container mx-auto flex flex-col md:flex-row  justify-between px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-1/3 text-left md:pr-8">
              <p className="text-xl text-[#3A2E1F] mb-4 whitespace-pre-line">{card.date}</p>
              <ul className="space-y-2 text-[#3A2E1F] mb-6">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span>{feature.split(' ')[0]}</span>
                    <span>{feature.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-[#2e826a] text-white py-2 px-7 rounded-full hover:bg-opacity-90 transition">
                Book now
              </button>
            </div>

            <div className="flex flex-col gap-7 bg-color-yellow w-full md:w-2/4 mt-8 md:mt-0 p-10">
              <div className="flex justify-between  ">
                <h3 className="text-3xl font-serif custom-color">{card.title}</h3>
                <p className="text-2xl custom-color opacity-80">{card.price}</p>
              </div>
              <div className="relative w-full h-[50vh]">
              
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4 ">
                <p className="custom-color opacity-80">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RetreatCard;