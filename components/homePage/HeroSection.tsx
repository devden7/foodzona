'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import React from 'react';
import SearchBox from './SearchBox';

export const HeroSection = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <section className=" mb-[75px] mt-3">
      <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
        <div
          className="relative h-[360px] w-[450px] grow overflow-hidden rounded-[30px] bg-red-500 sm:w-[600px] md:h-[414px] md:w-[730px] lg:h-[441px]"
          style={{
            zIndex: -1,
          }}
        >
          <Image
            className="object-cover"
            src={`${isTablet ? '/assets/hero.jpg' : '/assets/hero-mobile.jpg'}`}
            alt="logo hero"
            fill
            quality={100}
            priority={true}
          />

          <div className="absolute left-1/2 top-[30%] z-50 -translate-x-1/2 -translate-y-1/2 gap-1 overflow-visible text-white md:mt-10 ">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/logo-hero.svg"
                alt="logo-hero"
                width={0}
                height={0}
                className="mt-12 size-16 md:size-20 lg:size-24"
              />
              <h1 className="w-[200px] text-center text-[27px] font-semibold md:mt-5 md:text-3xl lg:w-full lg:text-4xl">
                Makan Enak? GoFood-in aja
              </h1>
              <p className="mb-3 w-[400px] px-12 text-center text-sm md:mt-5 md:text-base lg:w-full lg:text-lg">
                Pesen yang bikin perut nyaman langsung di sini, semudah di
                aplikasi. Sama cepetnya dan banyak pilihan restonya.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <SearchBox />
      </div>
    </section>
  );
};
