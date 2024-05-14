import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { HiLocationMarker, HiChevronDown, HiOutlineX } from 'react-icons/hi';
import React, { useState } from 'react';

interface Props {
  mediumScreen: number | undefined;
  searchLocation: string;
  isOpen: boolean;
  handlerSearchLocationDrawer: (value: any) => void;
  setSearchLocation: (e: any) => void;
  setIsOpen: (e: any) => void;
  type?: string;
}

const SearchLocation = ({
  mediumScreen,
  searchLocation,
  isOpen,
  handlerSearchLocationDrawer,
  setSearchLocation,
  setIsOpen,
  type,
}: Props) => {
  const [isCommand, setIsCommand] = useState(false);
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
      {type === 'Recommendations' && (
        <div className="absolute left-1/2 top-[80px] w-full -translate-x-1/2 -translate-y-1/2 px-2 md:top-[83px]  md:p-2 lg:left-[65%] lg:right-0 lg:top-[25px] lg:w-[310px] lg:p-0 xl:left-[70%]">
          <div>
            {mediumScreen !== undefined && mediumScreen < 768 && (
              <Drawer>
                <div>
                  <DrawerTrigger className="w-full">
                    <Badge
                      variant="outline"
                      className="mb-1 flex items-center justify-between px-2 md:w-[300px] "
                    >
                      <div className="flex items-center gap-2">
                        <HiLocationMarker color="red" size={20} />
                        <Input
                          type="text"
                          placeholder="Ketik lokasimu"
                          className="rounded-full border-0 border-none border-slate-300 bg-transparent p-0 placeholder:text-sm placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 placeholder:focus-visible:ring-offset-0
              "
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                      </div>

                      <HiChevronDown color="grey" size={20} />
                    </Badge>
                  </DrawerTrigger>
                </div>
                <DrawerContent className="flex items-start px-8">
                  <DrawerHeader className="relative mb-5 mt-10 flex items-center gap-2 p-0">
                    <DrawerClose>
                      <HiOutlineX
                        className="absolute -right-80 -top-5"
                        size={25}
                      />
                    </DrawerClose>
                    <DrawerTitle>Pilih lokasimu</DrawerTitle>
                  </DrawerHeader>
                  <Badge
                    variant="outline"
                    className="mb-3 flex w-full items-center justify-between px-2"
                  >
                    <div className="flex items-center gap-2">
                      <HiLocationMarker color="red" size={20} />
                      <Input
                        type="text"
                        placeholder="Ketik lokasimu"
                        className="rounded-full border-none border-slate-300 py-0 placeholder:text-base placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                
              "
                      />
                    </div>
                  </Badge>
                  {dummyLocation.length === 0 ? (
                    <div className="flex h-[370px] flex-col items-center justify-center px-20 text-center">
                      <Image
                        src="/assets/search-illustration-location.png"
                        alt="search location"
                        width={65}
                        height={65}
                      />
                      <p className="p-5 text-sm">
                        Saat kamu mencari lokasi, lokasi yang kamu cari akan
                        muncul disini
                      </p>
                    </div>
                  ) : (
                    <ScrollArea className="h-[370px] w-full">
                      <div className=" flex flex-col gap-3">
                        {dummyLocation.map((item) => {
                          const active = searchLocation === item.city;
                          return (
                            <div
                              key={item.id}
                              className="flex cursor-pointer items-center gap-3"
                              onClick={() => handlerSearchLocationDrawer(item)}
                            >
                              <HiLocationMarker
                                className={` ${active ? 'text-slate-900' : 'text-slate-200'}`}
                                size={20}
                              />
                              <DrawerClose>{item.city}</DrawerClose>
                            </div>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  )}
                </DrawerContent>
              </Drawer>
            )}
            {mediumScreen !== undefined &&
              mediumScreen >= 768 &&
              mediumScreen < 1024 && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <div className="flex w-full items-center justify-between">
                    <p>Penasaran ada apa di lokasi lain? Pindah aja.</p>
                    <DialogTrigger asChild>
                      <Badge
                        variant="outline"
                        className="mb-1 flex items-center justify-between md:w-[300px]"
                      >
                        <div className="flex items-center gap-2">
                          <HiLocationMarker color="red" size={20} />
                          <Input
                            type="text"
                            placeholder="Ketik lokasimu"
                            className="rounded-full border-none border-slate-300 bg-transparent p-0 placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-lg lg:placeholder:text-lg"
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                          />
                        </div>

                        <HiChevronDown color="grey" size={20} />
                      </Badge>
                    </DialogTrigger>
                  </div>

                  <DialogContent className="flex flex-col items-start px-8">
                    <DialogHeader className="relative mb-5 mt-10 flex items-center gap-2 p-0">
                      <DialogTitle>Pilih lokasimu</DialogTitle>
                    </DialogHeader>
                    <Badge
                      variant="outline"
                      className="mb-3 flex w-full items-center justify-between px-2"
                    >
                      <div className="flex items-center gap-2">
                        <HiLocationMarker color="red" size={20} />
                        <Input
                          type="text"
                          placeholder="Ketik lokasimu"
                          className="rounded-full border-none border-slate-300 bg-transparent py-0 placeholder:text-xs placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </Badge>
                    {dummyLocation.length === 0 ? (
                      <div className="flex h-[370px] flex-col items-center justify-center px-20 text-center">
                        <Image
                          src="/assets/search-illustration-location.png"
                          alt="search location"
                          width={65}
                          height={65}
                        />
                        <p className="p-5 text-sm">
                          Saat kamu mencari lokasi, lokasi yang kamu cari akan
                          muncul disini
                        </p>
                      </div>
                    ) : (
                      <ScrollArea className="h-[370px] w-full">
                        <div className=" flex flex-col gap-3">
                          {dummyLocation.map((item) => {
                            const active = searchLocation === item.city;
                            return (
                              <div
                                key={item.id}
                                className="flex cursor-pointer items-center gap-3"
                                onClick={() =>
                                  handlerSearchLocationDrawer(item)
                                }
                              >
                                <HiLocationMarker
                                  className={` ${active ? 'text-slate-900' : 'text-slate-200'}`}
                                  size={20}
                                />
                                <DrawerClose>{item.city}</DrawerClose>
                              </div>
                            );
                          })}
                        </div>
                      </ScrollArea>
                    )}
                  </DialogContent>
                </Dialog>
              )}

            {mediumScreen !== undefined && mediumScreen >= 1024 && (
              <div className="relative">
                <Badge
                  variant="outline"
                  className="flex h-10 items-center justify-between md:w-[300px]"
                  onClick={() => setIsCommand((prev) => !prev)}
                >
                  <div className="flex items-center gap-2">
                    <HiLocationMarker color="red" size={20} />
                    <Input
                      type="text"
                      placeholder="Ketik lokasimu"
                      className="rounded-full border-none border-slate-300 bg-transparent p-0 placeholder:text-xs placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-sm lg:placeholder:text-base
            "
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>

                  <HiChevronDown color="grey" size={20} />
                </Badge>
                {isCommand && (
                  <Command
                    className={`absolute h-96 ${!isCommand ? 'hidden' : 'block'}`}
                  >
                    <CommandEmpty className="h-[370px] flex-col items-center justify-center px-20 text-center">
                      <Image
                        src="/assets/search-illustration-location.png"
                        alt="search location"
                        width={65}
                        height={65}
                      />
                      <p className="p-5 text-sm">
                        Saat kamu mencari lokasi, lokasi yang kamu cari akan
                        muncul disini
                      </p>
                    </CommandEmpty>
                    <CommandList>
                      <CommandGroup
                        heading="Location"
                        className=" flex flex-col gap-3"
                      >
                        {dummyLocation.map((item) => (
                          <CommandItem
                            key={item.id}
                            className="flex cursor-pointer items-center gap-3"
                            onClick={() => {
                              handlerSearchLocationDrawer(item);
                              setIsOpen(false);
                            }}
                          >
                            <HiLocationMarker size={20} />
                            <div>{item.city}</div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {type !== 'Recommendations' && (
        <div className="absolute left-1/2 top-[358px] z-50 w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-3 shadow-md md:top-[460px] md:flex md:w-[450px] md:items-end md:gap-3 md:p-3  lg:top-[490px] lg:w-[500px] lg:py-7">
          <div>
            {mediumScreen !== undefined && mediumScreen < 768 && (
              <Drawer>
                <p className="mb-3 text-sm text-slate-900 md:mt-2 md:text-base md:font-semibold">
                  Lokasimu
                </p>
                <div>
                  <DrawerTrigger className="w-full">
                    <Badge
                      variant="outline"
                      className="mb-3 flex items-center justify-between px-2 md:w-[300px]"
                    >
                      <div className="flex items-center gap-2">
                        <HiLocationMarker color="red" size={20} />
                        <Input
                          type="text"
                          placeholder="Ketik lokasimu"
                          className="rounded-full border-none border-slate-300 bg-transparent p-0 placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 placeholder:focus-visible:ring-offset-0
                    "
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                      </div>

                      <HiChevronDown color="grey" size={20} />
                    </Badge>
                  </DrawerTrigger>
                </div>
                <DrawerContent className="flex items-start px-8">
                  <DrawerHeader className="relative mb-5 mt-10 flex items-center gap-2 p-0">
                    <DrawerClose>
                      <HiOutlineX
                        className="absolute -right-80 -top-5"
                        size={25}
                      />
                    </DrawerClose>
                    <DrawerTitle>Pilih lokasimu</DrawerTitle>
                  </DrawerHeader>
                  <Badge
                    variant="outline"
                    className="mb-3 flex w-full items-center justify-between px-2"
                  >
                    <div className="flex items-center gap-2">
                      <HiLocationMarker color="red" size={20} />
                      <Input
                        type="text"
                        placeholder="Ketik lokasimu"
                        className="rounded-full border-none border-slate-300 py-0 placeholder:text-base placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                      
                    "
                      />
                    </div>
                  </Badge>
                  {dummyLocation.length === 0 ? (
                    <div className="flex h-[370px] flex-col items-center justify-center px-20 text-center">
                      <Image
                        src="/assets/search-illustration-location.png"
                        alt="search location"
                        width={65}
                        height={65}
                      />
                      <p className="p-5 text-sm">
                        Saat kamu mencari lokasi, lokasi yang kamu cari akan
                        muncul disini
                      </p>
                    </div>
                  ) : (
                    <ScrollArea className="h-[370px] w-full">
                      <div className=" flex flex-col gap-3">
                        {dummyLocation.map((item) => {
                          const active = searchLocation === item.city;
                          return (
                            <div
                              key={item.id}
                              className="flex cursor-pointer items-center gap-3"
                              onClick={() => handlerSearchLocationDrawer(item)}
                            >
                              <HiLocationMarker
                                className={` ${active ? 'text-slate-900' : 'text-slate-200'}`}
                                size={20}
                              />
                              <DrawerClose>{item.city}</DrawerClose>
                            </div>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  )}
                </DrawerContent>
              </Drawer>
            )}
            {mediumScreen !== undefined &&
              mediumScreen >= 768 &&
              mediumScreen < 1024 && (
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <p className="mb-3 text-sm text-slate-900 md:mt-2 md:text-base md:font-semibold">
                    Lokasimu
                  </p>
                  <div>
                    <DialogTrigger asChild>
                      <Badge
                        variant="outline"
                        className="mb-3 flex items-center justify-between md:w-[300px]"
                      >
                        <div className="flex items-center gap-2">
                          <HiLocationMarker color="red" size={20} />
                          <Input
                            type="text"
                            placeholder="Ketik lokasimu"
                            className="rounded-full border-none border-slate-300 bg-transparent p-0 placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-sm lg:placeholder:text-lg
                    "
                            value={searchLocation}
                            onChange={(e) => setSearchLocation(e.target.value)}
                          />
                        </div>

                        <HiChevronDown color="grey" size={20} />
                      </Badge>
                    </DialogTrigger>
                  </div>

                  <DialogContent className="flex flex-col items-start px-8">
                    <DialogHeader className="relative mb-5 mt-10 flex items-center gap-2 p-0">
                      <DialogTitle>Pilih lokasimu</DialogTitle>
                    </DialogHeader>
                    <Badge
                      variant="outline"
                      className="mb-3 flex w-full items-center justify-between px-2"
                    >
                      <div className="flex items-center gap-2">
                        <HiLocationMarker color="red" size={20} />
                        <Input
                          type="text"
                          placeholder="Ketik lokasimu"
                          className="rounded-full border-none border-slate-300 bg-transparent py-0 placeholder:text-base placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0
                      
                    "
                        />
                      </div>
                    </Badge>
                    {dummyLocation.length === 0 ? (
                      <div className="flex h-[370px] flex-col items-center justify-center px-20 text-center">
                        <Image
                          src="/assets/search-illustration-location.png"
                          alt="search location"
                          width={65}
                          height={65}
                        />
                        <p className="p-5 text-sm">
                          Saat kamu mencari lokasi, lokasi yang kamu cari akan
                          muncul disini
                        </p>
                      </div>
                    ) : (
                      <ScrollArea className="h-[370px] w-full">
                        <div className=" flex flex-col gap-3">
                          {dummyLocation.map((item) => {
                            const active = searchLocation === item.city;
                            return (
                              <div
                                key={item.id}
                                className="flex cursor-pointer items-center gap-3"
                                onClick={() =>
                                  handlerSearchLocationDrawer(item)
                                }
                              >
                                <HiLocationMarker
                                  className={` ${active ? 'text-slate-900' : 'text-slate-200'}`}
                                  size={20}
                                />
                                <DrawerClose>{item.city}</DrawerClose>
                              </div>
                            );
                          })}
                        </div>
                      </ScrollArea>
                    )}
                  </DialogContent>
                </Dialog>
              )}

            {mediumScreen !== undefined && mediumScreen >= 1024 && (
              <div className="relative">
                <p className="mb-3 text-lg text-slate-900">Lokasimu</p>
                <Badge
                  variant="outline"
                  className="mb-3 flex items-center justify-between md:w-[300px]"
                  onClick={() => setIsCommand((prev) => !prev)}
                >
                  <div className="flex items-center gap-2">
                    <HiLocationMarker color="red" size={20} />
                    <Input
                      type="text"
                      placeholder="Ketik lokasimu"
                      className="rounded-full border-none border-slate-300 bg-transparent p-0 placeholder:text-base placeholder:text-slate-800 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 lg:text-lg lg:placeholder:text-lg
                  "
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    />
                  </div>

                  <HiChevronDown color="grey" size={20} />
                </Badge>
                {isCommand && (
                  <Command
                    className={`absolute h-96 ${!isCommand ? 'hidden' : 'block'}`}
                  >
                    <CommandEmpty className="h-[370px] flex-col items-center justify-center px-20 text-center">
                      <Image
                        src="/assets/search-illustration-location.png"
                        alt="search location"
                        width={65}
                        height={65}
                      />
                      <p className="p-5 text-sm">
                        Saat kamu mencari lokasi, lokasi yang kamu cari akan
                        muncul disini
                      </p>
                    </CommandEmpty>
                    <CommandList>
                      <CommandGroup
                        heading="Location"
                        className=" flex flex-col gap-3"
                      >
                        {dummyLocation.map((item) => (
                          <CommandItem
                            key={item.id}
                            className="flex cursor-pointer items-center gap-3"
                            onClick={() => {
                              handlerSearchLocationDrawer(item);
                              setIsOpen(false);
                            }}
                          >
                            <HiLocationMarker size={20} />
                            <div>{item.city}</div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                )}
              </div>
            )}
          </div>
          <Button className="w-full rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg">
            Explor
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchLocation;
