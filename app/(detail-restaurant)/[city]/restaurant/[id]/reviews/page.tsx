'use client';

import { useState, useEffect } from 'react';
import SearchLocation from '@/components/homePage/SearchLocation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { HiArrowSmLeft, HiStar } from 'react-icons/hi';
const ReviewsUserf = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div className="container">
        <SearchLocation
          mediumScreen={mediumScreen}
          searchLocation={searchLocation}
          isOpen={isOpen}
          handlerSearchLocationDrawer={handlerSearchLocationDrawer}
          setSearchLocation={setSearchLocation}
          setIsOpen={setIsOpen}
          type="Detail Restaurant"
        />

        {mediumScreen >= 1024 && (
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
        )}
      </div>
      <section className="mb-8 mt-20 lg:mt-10">
        <div className="sm:container">
          <div className="mb-9 flex items-center gap-3 px-3 lg:px-0">
            <HiArrowSmLeft size={30} color="green" />
            <h3 className="text-xl font-semibold">
              Warung Sate Madura Pak Pak, Sunda
            </h3>
          </div>

          <div className="px-3 lg:px-0">
            <div className="rounded-md border border-gray-200 p-5 lg:w-1/2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xl font-semibold md:text-2xl">4.9</p>
                </div>
                <div>
                  <HiStar
                    color="orange"
                    className="text-xl md:text-2xl xl:text-4xl"
                  />
                </div>
              </div>
              <p className="mb-3 text-xs text-black/70 md:text-base">
                10 Ratings
              </p>
              <div className="rounded-md bg-gray-100 px-5 py-2">
                <p className="mb-2 font-medium text-gray-800">
                  Freshest ratings
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 mt-10 lg:mt-10">
        <div className="px-3 sm:container sm:px-0">
          <h3 className="mb-5 ml-2 text-lg font-semibold">All Reviews</h3>

          <div className="flex flex-col gap-5">
            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-green-500">
                    <span className="flex size-full items-center justify-center font-medium text-white">
                      PB
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Pak Bapak</p>
                    <p className="text-xs text-black/70 md:text-base">
                      Gojek user since 1 Jan 2020
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <p className="mb-1">Makanan nya sangat enak! </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0 md:size-6"
                    >
                      <g clip-path="url(#a)">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M6.5 22a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2h-11Zm11.825-3.898c-.891.604-1.981.898-3.14.898H8.898c-1.4 0-2.718-.435-3.702-1.297-1.525-1.334-2.294-3.5-2.185-6.612a1.126 1.126 0 0 1 1.122-1.09h15.736c.613 0 1.102.492 1.121 1.088.122 3.492-.817 5.759-2.664 7.013ZM17 4.538a1 1 0 1 1 2 0V7a1 1 0 1 1-2 0V4.538Zm-12 0a1 1 0 1 1 2 0V7a1 1 0 0 1-2 0V4.538ZM11 3a1 1 0 1 1 2 0v2.462a1 1 0 1 1-2 0V3Z"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="currentColor" d="M0 0h24v24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className=" text-black/40">Sate Kambing</p>
                </div>
              </div>
              <p className="text-black/40">Ordered on 07 June 2020</p>
            </div>

            <div className="p-2">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-green-500">
                    <span className="flex size-full items-center justify-center font-medium text-white">
                      PB
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Pak Bapak 2</p>
                    <p className="text-xs text-black/70 md:text-base">
                      Gojek user since 1 Jan 2020 2
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0 2</span>
                  </div>
                </div>
              </div>

              <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                <p className="mb-1">Makanan nya sangat enak! </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-4 shrink-0 md:size-6"
                    >
                      <g clip-path="url(#a)">
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M6.5 22a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2h-11Zm11.825-3.898c-.891.604-1.981.898-3.14.898H8.898c-1.4 0-2.718-.435-3.702-1.297-1.525-1.334-2.294-3.5-2.185-6.612a1.126 1.126 0 0 1 1.122-1.09h15.736c.613 0 1.102.492 1.121 1.088.122 3.492-.817 5.759-2.664 7.013ZM17 4.538a1 1 0 1 1 2 0V7a1 1 0 1 1-2 0V4.538Zm-12 0a1 1 0 1 1 2 0V7a1 1 0 0 1-2 0V4.538ZM11 3a1 1 0 1 1 2 0v2.462a1 1 0 1 1-2 0V3Z"
                          clip-rule="evenodd"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="currentColor" d="M0 0h24v24H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className=" text-black/40">Sate Kambing 2</p>
                </div>
              </div>
              <p className="text-black/40">Ordered on 07 June 2020 2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsUserf;
