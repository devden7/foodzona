'use client';

import { useParams } from 'next/navigation';
import HeroSection from '@/components/detail-restaurant/restaurants/id/HeroSection';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import { getFoodLists } from '@/repositories/foodRepository';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { IResponseGetFoods } from '@/model/foodModel';
import Link from 'next/link';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';

const Restaurants = () => {
  const [data, setData] = useState<IResponseGetFoods>();
  const { location, user } = useAuth();
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

  const filterData = data?.foods.filter(
    (item) => item.restaurantName !== user.restaurant
  );
  return (
    <>
      <HeroSection paramsId={params.id as string} />
      <section>
        <BreadCrumbSection />
        <div className="container ">
          <h2 className="mb-3 text-xl font-semibold md:mb-5 md:text-3xl">
            Terdekat
          </h2>
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
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-slate-100 md:last:border-2 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    className="object-cover"
                    src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                    alt={item.name}
                    fill
                    sizes="50vw"
                    quality={90}
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
