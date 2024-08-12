'use client';

import { IResponseGetFoods } from '@/model/foodModel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiStar } from 'react-icons/hi';
import { Button } from '../ui/button';
import { Session } from 'next-auth';

interface Props {
  data: IResponseGetFoods | undefined;
  session: Session | null;
  location: string;
}

const API_URL = process.env.NEXT_PUBLIC_API;

const FoodListCity = ({ data, session, location }: Props) => {
  const filterData = data?.foods.filter(
    (item) => item.restaurantName !== session?.user.restaurant
  );
  return (
    <section className="relative sm:mt-24">
      <div className="pl-4 2xl:container 2xl:w-[1200px]">
        <h2 className="mb-3 text-[21px] font-semibold md:text-center md:text-3xl">
          Apa aja nih yang enak di kota kamu?
        </h2>
        <p className="text-sm md:mb-5 md:px-28 md:text-center md:text-[16px] lg:text-lg ">
          Yuk, dicek koleksi makanan populer, favoritnya foodies lokal, dan
          penawaran terbaik kami di lokasimu!
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-start gap-4">
          {filterData?.length === 0 && (
            <p className="w-full text-center font-medium">
              Belum ada restaurant yang tersedia di kotamu
            </p>
          )}
          {filterData?.map((item) => (
            <Link
              href={`/${location}/restaurant/${item.restaurantName.toLowerCase().replace(/ /g, '-')}`}
              key={item.foodId}
              className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-slate-100 md:last:border-b-2 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
            >
              <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                <Image
                  className="object-cover"
                  src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                  alt={item.name}
                  fill
                  sizes="50vw"
                  quality={90}
                />
                <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                  <HiStar color="orange" size={20} />
                  <p>{item.rating === null ? 0 : item.rating}</p>
                </div>
              </div>
              <div className="size-full">
                <h3 className="mb-3 line-clamp-2 font-semibold">{item.name}</h3>
                <div className="flex max-h-96 flex-wrap gap-2">
                  <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                    {item.category[0]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Button className="absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 sm:mb-10 md:w-1/4 lg:w-1/5 xl:w-[15%]">
          <Link href="/bandung/restaurants/near_me" className="size-full">
            Tampilkan semua resto
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FoodListCity;
