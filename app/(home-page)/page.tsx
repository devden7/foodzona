'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchLocation from '@/components/homePage/SearchLocation';
import {
  categoriesLists,
  restaurantLists,
  typeFoodLists,
  valueList,
} from '@/constants';
import { Button } from '@/components/ui/button';
import { HiStar } from 'react-icons/hi';

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreBtn, setIsMoreBtn] = useState(false);

  const handlerSearchLocationDrawer = (value: any) => {
    setSearchLocation(value.city);
  };

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

  const listFoodByScreen =
    mediumScreen !== undefined && mediumScreen < 640
      ? 17
      : mediumScreen >= 640 && mediumScreen < 768
        ? 8
        : mediumScreen >= 768 && mediumScreen < 1024
          ? 7
          : 5;

  const categoryRestourant = restaurantLists.map((item: any) =>
    item.category.map((category: any) => category.categories).join(', ')
  );

  const dummyLocation = [
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
    <>
      <section className=" mb-[75px] mt-3">
        <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
          <div
            className="relative h-[360px] w-[450px] grow overflow-hidden rounded-[30px] bg-red-500 sm:w-[600px] md:h-[414px] md:w-[730px] lg:h-[441px]"
            // className="relative h-[360px] w-[450px] overflow-hidden rounded-[30px] bg-red-500 sm:w-[600px] md:h-[414px] md:w-[730px] md:bg-contain"
            style={{
              zIndex: -1,
            }}
          >
            <Image
              src={`${mediumScreen >= 768 ? '/assets/hero.jpg' : '/assets/hero-mobile.jpg'}`}
              alt="logo hero"
              fill
              objectFit="cover"
              quality={100}
              sizes="100vw"
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
          <SearchLocation
            mediumScreen={mediumScreen}
            searchLocation={searchLocation}
            isOpen={isOpen}
            handlerSearchLocationDrawer={handlerSearchLocationDrawer}
            setSearchLocation={setSearchLocation}
            setIsOpen={setIsOpen}
            type="Homepage"
          />
        </div>
      </section>

      <section className="relative mb-[75px]">
        <div className="container pt-12 2xl:w-[1200px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Belom ada ide? Mulai dari sini aja dulu
          </h2>
          <div className="mt-7">
            <div className="grid grid-cols-3 gap-x-5 gap-y-12 md:grid-cols-4 lg:grid-cols-6">
              {categoriesLists.map((item) => (
                <div
                  key={item.id}
                  className="flex aspect-square cursor-pointer flex-col items-center justify-center  text-sm font-semibold md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md"
                >
                  <div className="relative size-full items-center justify-center rounded-2xl border-2  border-slate-100 transition active:bg-slate-50 md:size-1/2 md:border-0 md:transition md:duration-500 lg:size-[70%]">
                    <Image
                      src={item.imageUrl}
                      alt={item.label}
                      height={60}
                      width={60}
                      className="absolute  left-1/2 top-1/2 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <p className="mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container 2xl:w-[1200px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Aneka kuliner menarik
          </h2>
          <div className="mb-12 mt-7">
            <div
              className={`relative mb-12 grid grid-cols-3 gap-x-5 gap-y-8 overflow-hidden md:grid-cols-4 lg:grid-cols-6`}
            >
              {typeFoodLists.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex aspect-square cursor-pointer flex-col items-center justify-center text-sm font-semibold  transition-all duration-100 md:rounded-2xl md:border-2 md:border-slate-100 md:p-5 hover:md:bg-white hover:md:shadow-md ${index > listFoodByScreen && !isMoreBtn ? 'invisible absolute h-0 opacity-0' : 'visible opacity-100 '}`}
                >
                  <div className="relative size-full items-center justify-center overflow-hidden rounded-full transition active:bg-slate-50">
                    <Image
                      src={item.imageUrl}
                      alt={item.label}
                      height={200}
                      width={200}
                      quality={100}
                      className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <p className="mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            {mediumScreen !== undefined &&
              mediumScreen >= 640 &&
              !isMoreBtn && (
                <Button
                  className="absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 md:w-1/4 lg:w-1/5 xl:w-[15%]"
                  onClick={() => setIsMoreBtn((prev) => !prev)}
                >
                  Tampilkan kuliner lainnya
                </Button>
              )}
          </div>
        </div>
      </section>
      <section className="relative sm:mt-24">
        <div className="pl-4 2xl:container 2xl:w-[1200px]">
          <h2 className="mb-3 text-[21px] font-semibold md:text-center md:text-3xl">
            Apa aja nih yang enak di kota kamu?
          </h2>
          <p className="text-sm md:mb-5 md:px-28 md:text-center md:text-[16px] lg:text-lg ">
            Yuk, dicek koleksi makanan populer, favoritnya foodies lokal, dan
            penawaran terbaik kami di lokasimu!
          </p>
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
          <Button className="absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 sm:mb-10 md:w-1/4 lg:w-1/5 xl:w-[15%]">
            Tampilkan semua resto
          </Button>
        </div>
      </section>
      <section className="mb-[75px]">
        <div className="container 2xl:w-[1200px]">
          <h2 className="pt-14 text-[21px] font-semibold md:text-center md:text-3xl lg:pt-28">
            Kenapa pesan di GoFood?
          </h2>
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
              {valueList.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4  rounded-2xl px-2 py-1 md:py-2 lg:flex-col lg:gap-10 lg:py-5`}
                  style={{
                    background: `${item.backgroundColor}`,
                  }}
                >
                  <div className="relative h-36 w-full grow overflow-hidden rounded-xl sm:h-[200px] md:max-h-[130px] xl:max-h-[200px] 2xl:max-h-[180px]">
                    <Image
                      src={item.imageUrl}
                      alt={item.description}
                      fill
                      sizes="100vw"
                      quality={100}
                    />
                  </div>
                  <div className="w-full lg:pb-20 lg:pl-5 ">
                    <p className="mt-2 font-semibold text-white md:text-2xl xl:max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative mb-[75px]">
        <div className="container pt-8 lg:pt-0 2xl:w-[1200px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Kota-kota yang ada GoFood
          </h2>
          <div className="mt-7">
            <div className="mb-10 grid grid-cols-2 justify-end gap-y-4 md:grid-cols-4 md:gap-y-5 lg:grid-cols-6 lg:gap-y-6">
              {dummyLocation.map((item) => (
                <div
                  key={item.id}
                  className="scale-105 transition-transform sm:scale-110"
                >
                  <Button className="line-clamp-1 max-w-28 rounded-full border-2 border-slate-100 bg-transparent text-start font-bold text-green-700 hover:bg-slate-100">
                    {item.city}
                  </Button>
                </div>
              ))}
            </div>

            <Button className="absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 md:w-1/4 lg:w-1/5 xl:w-[15%]">
              Tampilkan semua Kota
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
