'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import './embla.css';

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // Dağ manzarası
  'https://images.unsplash.com/photo-1519125323398-675f1f4d3d1f', // Gün batımı
  'https://images.unsplash.com/photo-1497436072909-60f69c3b81b1', // Orman
  'https://images.unsplash.com/photo-1508739117328-66f90d5e8d6e', // Deniz
  'https://images.unsplash.com/photo-1519046904884-53103b34b206', // Dağ
  'https://images.unsplash.com/photo-1472214103451-9374a3b58a12', // Göl
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', // Orman ve göl
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b', // Deniz manzarası
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // Tropikal ada
  'https://images.unsplash.com/photo-1495474472257-6a0c2e8c7379', // Dağ ve gökyüzü
  'https://images.unsplash.com/photo-1521747116042-5a8107733e2c', // Deniz kıyısı
  'https://images.unsplash.com/photo-1531218150217-54595bc2b934', // Orman
  'https://images.unsplash.com/photo-1542224560-5c84e663ec66', // Göl ve dağ
  'https://images.unsplash.com/photo-1505761671935-4b33e7b1e2c6', // Tropikal manzara
  'https://images.unsplash.com/photo-1517816428104-380fd985e7e9', // Yoga ve doğa
  'https://images.unsplash.com/photo-1501780361689-7e8423b8e6d4', // Yoga pozu
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4', // Lüks resort
  'https://images.unsplash.com/photo-1520223295910-2e7f3b92e8a6', // Havuz ve doğa
  'https://images.unsplash.com/photo-1513694203232-719a280e022f', // Deniz ve kayalıklar
  'https://images.unsplash.com/photo-1472214103451-9374a3b58a12', // Göl (tekrar, çeşitlilik için)
];

const CustomCarousel = ({ direction }: { direction: 'left' | 'right' }) => {
  const options = {
    loop: true,
    speed: 2,
    align: 'center' as const,
    draggable: true,
  };

  const autoScrollOptions = {
    playOnInit: true,
    speed: direction === 'right' ? -1.3 : 1.3,
    stopOnInteraction: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll(autoScrollOptions),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    emblaApi
      .on('autoScroll:play', () => {})
      .on('autoScroll:stop', () => {})
      .on('reInit', () => {});
  }, [emblaApi]);

  return (
    <div className="embla" style={{ maxWidth: '1600px', margin: '0 auto' }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className=" border border-gray-100 shadow-sm w-[550px] h-[450px] flex items-center justify-center relative">
                <Image
                  src={image}
                  alt={`${index}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhfPQAJJAN4L7D6vgAAAABJRU5ErkJggg=="
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;