'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import RecommendationMenuSection from '@/components/shared/RecommendationMenuSection';
import CategoriesMenuSection from '@/components/shared/CategoriesMenuSection';

const Restaurants = () => {
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );

  const sizeScreenHandler = () => {
    setMediumScreen(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sizeScreenHandler();
    }

    window.addEventListener('resize', sizeScreenHandler);

    return () => {
      window.removeEventListener('resize', sizeScreenHandler);
    };
  }, []);

  if (typeof mediumScreen === 'undefined') {
    return null;
  }
  return (
    <>
      <section>
        <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
          <div className="relative h-[330px] w-full overflow-hidden rounded-lg md:h-[360px]">
            <Image
              className="absolute size-full object-cover object-center"
              src="/assets/header-restaurants-illustration.jpg"
              alt="logo hero"
              width={1886}
              height={360}
            />

            <div className="absolute left-[5%] top-[35%] z-50 gap-1 overflow-visible md:top-[20%] md:mt-10 2xl:left-[19%] ">
              <div className="flex flex-col gap-5 md:gap-0">
                <p className="helper-responsive text-[27px] font-semibold md:mt-5 md:text-3xl lg:w-full lg:text-4xl">
                  Kotamu
                </p>
                <p className="mb-3 max-w-[320px] text-sm md:mt-5 md:text-base lg:w-full lg:text-lg">
                  Cari yang enak di sini, dari resto dengan rating jempolan
                  sampai hidangan legendaris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <Breadcrumb className="my-5">
            <BreadcrumbList className="text-black">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-green-700" href="/">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-green-700"
                  href="/components"
                >
                  Restoranmu Kotamu
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div>
            <h3 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">
              Rekomendasi kami
            </h3>
            <p className="mb-5 text-sm text-black/80 lg:text-base">
              Ini ini nih jalan pintas menuju nikmat.
            </p>

            <RecommendationMenuSection />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="container">
          <div>
            <h3 className="mb-1 text-lg font-semibold  md:text-xl lg:text-2xl">
              Aneka kuliner menarik
            </h3>
            <p className="mb-5 text-sm text-black/80 lg:text-base">
              Liat-liat aja dulu siapa tau jadi ngidam.
            </p>

            <CategoriesMenuSection mediumScreen={mediumScreen} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
