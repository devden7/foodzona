'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import ResponsiveDialog from '../shared/ResponsiveDialog';
import InputFormSearch from './InputFormSearch';
import { ScrollArea } from '../ui/scroll-area';
import { HiLocationMarker, HiOutlineX } from 'react-icons/hi';
import Link from 'next/link';
import { changeLocation } from '@/store/Location/LocationSlice';
import { useAppDispatch } from '@/hooks/use-redux-hook';
import { useSession } from 'next-auth/react';
import { IResCityList } from '@/model/restaurantModel';

interface Props {
  location: string;
  dataCity: IResCityList[];
}

const SearchBox = ({ location, dataCity }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const { data: session } = useSession();

  const dispatch = useAppDispatch();
  return (
    <div>
      <ResponsiveDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeBtn={true}
        type="homepage"
      >
        <div className="flex h-[700px] flex-col items-start md:h-[500px]">
          <div className="my-3 flex w-full justify-between">
            <h3 className="px-5 text-lg font-medium">Pilih lokasimu</h3>
            <HiOutlineX
              size={25}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
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
              {dataCity.map((item: IResCityList) => (
                <div
                  key={item.city_name}
                  className="flex cursor-pointer items-center gap-3 p-5 hover:bg-slate-100"
                  onClick={() => {
                    setIsOpen(false);
                    dispatch(changeLocation(item.city_name));
                  }}
                >
                  <HiLocationMarker className="text-slate-900" size={20} />
                  {item.city_name}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </ResponsiveDialog>
      <div
        className={`absolute left-1/2 ${session?.user.restaurant === null ? 'top-[450px] md:top-[530px]  lg:top-[550px]' : 'top-[400px] md:top-[480px]  lg:top-[500px]'} z-50 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-md  md:flex md:w-[400px] md:items-end md:justify-center md:gap-3  md:p-3 lg:w-[500px] lg:py-7`}
      >
        <div>
          <p className="mb-3 text-sm text-slate-900 md:mt-2 md:text-base md:font-semibold">
            Lokasimu
          </p>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative w-full">
              <InputFormSearch
                isBlur={isBlur}
                city={location}
                setIsOpen={setIsOpen}
                setIsBlur={setIsBlur}
                dataCity={dataCity}
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
