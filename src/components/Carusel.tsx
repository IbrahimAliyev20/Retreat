'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  'https://images.unsplash.com/photo-1519125323398-675f1f4d3d1f',
  'https://images.unsplash.com/photo-1497436072909-60f69c3b81b1',
  'https://images.unsplash.com/photo-1508739117328-66f90d5e8d6e',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206',
];

const Carousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start', // Slaydlari sola hizala
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 2, // Sürüşmə sürəti (dəyəri layihənizə uyğun tənzimləyin)
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ]
  );

  return (
    <div className="w-full overflow-hidden bg-[#f5f3ef] py-10 px-5">
      <div className="embla" ref={emblaRef}>
        <div className="embla__viewport overflow-hidden w-full">
          <div className="embla__container flex gap-4 py-2.5">
            {images.map((image, index) => (
              <div
                className="embla__slide flex-[0_0_300px] h-[200px] rounded-lg overflow-hidden shadow-md"
                key={index}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                  priority={index === 0} // İlk şəkil üçün optimallaşdırma
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg" // Placeholder şəkil (lazım olarsa əlavə edin)
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;