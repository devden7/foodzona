'use client';

import { useAppSelector } from '@/hooks/use-redux-hook';
import { IResCityList } from '@/model/restaurantModel';
import Link from 'next/link';
import React from 'react';

interface Props {
  dataCity: IResCityList[];
}

const CityListSection = ({ dataCity }: Props) => {
  const location = useAppSelector((state) => state.location.city);
  return (
    <section className="relative mb-[75px]">
      <div className="container pt-8 lg:pt-0 2xl:w-[1300px]">
        <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
          Kota-kota yang ada GoFood
        </h2>
        <div className="mt-7">
          <div className="mb-10 grid grid-cols-2 justify-end gap-y-4 md:grid-cols-4 md:gap-y-5 lg:grid-cols-6 lg:gap-y-6">
            {dataCity.map((item: IResCityList) => (
              <div
                key={item.city_name}
                className="scale-105 transition-transform sm:scale-110"
              >
                <Link
                  href={location + '/restaurants'}
                  className="line-clamp-1 max-w-28 rounded-full border-2 border-slate-100 bg-transparent p-2 text-center text-sm font-bold capitalize text-green-700 hover:bg-slate-100"
                >
                  {item.city_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityListSection;
