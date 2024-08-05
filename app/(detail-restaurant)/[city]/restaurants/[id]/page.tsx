'use client';

import { useParams } from 'next/navigation';
import HeroSection from '@/components/detail-restaurant/restaurants/HeroSection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { getFoodLists } from '@/repositories/foodRepository';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { IResponseGetFoods } from '@/model/foodModel';
import Link from 'next/link';

const Restaurants = () => {
  const [data, setData] = useState<IResponseGetFoods>();
  const { location } = useAuth();
  const params = useParams();
  const API_URL = process.env.NEXT_PUBLIC_API;
  const getFoodList = async () => {
    const request = {
      city: location,
      category: params.id as string,
    };
    const response = await getFoodLists(request);
    setData(response.data);
  };

  useEffect(() => {
    getFoodList();
  }, []);
  return (
    <>
      <HeroSection paramsId={params.id as string} />
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
          <h2 className="mb-3 text-xl font-semibold md:mb-5 md:text-3xl">
            Terdekat
          </h2>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 2xl:justify-between">
            {data?.foods.map((item) => (
              <Link
                href={`/${location}/restaurant/${item.restaurantName.toLowerCase().replace(/ /g, '-')}`}
                key={item.foodId}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                    alt={item.name}
                    fill
                    objectFit="cover"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%] xl:left-[85%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating === null ? 0 : item.rating}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.name}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {item.category[0]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
