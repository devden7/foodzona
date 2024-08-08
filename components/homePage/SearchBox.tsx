'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import ResponsiveDialog from '../shared/ResponsiveDialog';
import InputFormSearch from './InputFormSearch';
import { ScrollArea } from '../ui/scroll-area';
import { HiLocationMarker, HiOutlineX } from 'react-icons/hi';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const { location, changeLocation } = useAuth();
  const data = [
    { city: 'Jakarta', id: 0 },
    { city: 'Surabaya', id: 1 },
    { city: 'Aceh', id: 2 },
    { city: 'Papua', id: 3 },
    { city: 'Samarinda', id: 4 },
    { city: 'Bandung', id: 5 },
    { city: 'Yogyakarta', id: 6 },
    { city: 'Serang', id: 7 },
    { city: 'Bekasi', id: 8 },
    { city: 'Depok', id: 9 },
    { city: 'Bogor', id: 10 },
    { city: 'Tasikmalaya', id: 11 },
  ];
  return (
    <div>
      <ResponsiveDialog isOpen={isOpen} setIsOpen={setIsOpen} type="homepage">
        <div className="flex h-[700px] flex-col items-start md:h-[500px]">
          <div className="my-3 flex w-full justify-between">
            <h3 className="px-5 text-lg font-medium">Pilih lokasimu</h3>
            <HiOutlineX size={25} />
          </div>
          <div className=" mb-0 mt-3 flex w-full items-center justify-between gap-2 px-5">
            <InputFormSearch
              isBlur={isBlur}
              setIsOpen={setIsOpen}
              setIsBlur={setIsBlur}
              city={location}
            />
          </div>
          <ScrollArea className="h-[550px] w-full">
            <div className=" flex flex-col gap-3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex cursor-pointer items-center gap-3 p-5 hover:bg-slate-100"
                  onClick={() => {
                    setIsOpen(false);
                    changeLocation(item.city);
                  }}
                >
                  <HiLocationMarker className="text-slate-900" size={20} />
                  {item.city}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </ResponsiveDialog>
      <div className="absolute left-1/2 top-[400px] z-50 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-md md:top-[480px] md:flex md:w-[400px] md:items-end md:justify-center md:gap-3  md:p-3 lg:top-[500px] lg:w-[500px] lg:py-7">
        <div>
          <p className="mb-3 text-sm text-slate-900 md:mt-2 md:text-base md:font-semibold">
            Lokasimu
          </p>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative w-full">
              <InputFormSearch
                isBlur={isBlur}
                city={location}
                changeLocation={changeLocation}
                setIsOpen={setIsOpen}
                setIsBlur={setIsBlur}
              />
            </div>
            <Button className="w-full rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg">
              <Link href={`${location?.toLocaleLowerCase()}/restaurants`}>
                Explor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
