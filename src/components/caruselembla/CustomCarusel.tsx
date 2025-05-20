"use client"
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';
import './embla.css';
import { GalleryType } from '@/types/type';

interface CarouselProps {
  direction: 'left' | 'right';
  images: GalleryType[]; 
}

const CustomCarousel = ({ direction, images }: CarouselProps) => {
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
    <div className="embla" style={{ maxWidth: '2000px', margin: '0 auto' }}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="border border-gray-100 shadow-sm w-[200px] h-[150px] md:w-[650px] md:h-[450px] flex items-center justify-center relative">
                <Image
                  src={image.image}
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