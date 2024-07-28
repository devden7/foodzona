'use client';

import HeroSection from '@/components/detail-restaurant/restaurants/HeroSection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { restaurantLists } from '@/constants';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';

const Restaurants = () => {
  const categoryRestourant = restaurantLists.map((item: any) =>
    item.category.map((category: any) => category.categories).join(', ')
  );
  return (
    <>
      <HeroSection />
      <section>
        <div className="container ">
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
                  Kotamu
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-green-700 ">
                  Restoranmu
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 2xl:justify-between">
            {restaurantLists.map((item, index) => (
              <div
                key={item.id}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fill
                    objectFit="cover"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating.toFixed(1)}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.label}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {categoryRestourant[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
