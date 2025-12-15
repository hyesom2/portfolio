'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop
      className='w-[300px] h-[150px] md:w-[600px] md:h-[400px] shrink-0'
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className='relative'>
            <Image
              src={src}
              alt={alt}
              width={600}
              height={400}
              className='w-[300px] h-[150px] md:w-[600px] md:h-[350px] border border-[#eee] object-contain shrink-0'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
