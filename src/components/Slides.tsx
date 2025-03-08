'use client';

import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

export interface SlidesProps {
  className?: string;
  images: string[];
}

const Slides: FC<SlidesProps> = ({ className, images }) => {
  return (
    <Swiper
      breakpoints={{
        375: {
          spaceBetween: 16,
          slidesPerView: 1.2,
        },
        1024: {
          spaceBetween: 32,
          slidesPerView: 2.8,
        },
      }}
      autoplay={true}
      loop={true}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className={`${className} min-h-80 w-full lg:min-h-screen`}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-full w-full items-center overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={`slide-${index}`}
              width={800}
              height={800}
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slides;
