'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiSearch, HiOutlineX } from 'react-icons/hi';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { navbarLists } from '@/constants';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formCreateStoreSchema } from '@/lib/validation';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const pathname = usePathname();
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );

  const form = useForm<z.infer<typeof formCreateStoreSchema>>({
    resolver: zodResolver(formCreateStoreSchema),
    defaultValues: {
      storeName: '',
    },
  });

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

  function onSubmit(values: z.infer<typeof formCreateStoreSchema>) {
    console.log(values);
  }

  return (
    <nav
      className={`helper-responsive relative z-50 border-b-2 border-slate-100 bg-white ${mediumScreen < 768 && pathname === '/login' ? 'hidden' : ''}`}
    >
      <div className="container flex items-center justify-between bg-red-500 py-2">
        <span className="text-sm font-medium"> Ingin menjual makanan ?</span>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <div>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="h-0 border-none bg-green-700 p-5 text-white  hover:bg-green-800 hover:text-white"
              >
                Buka restaurant
              </Button>
            </DialogTrigger>
          </div>

          <DialogContent className="flex w-3/4 flex-col items-start px-8">
            <DialogTitle>Buat toko kamu sekarang</DialogTitle>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div>
                  <p className=" mb-2 font-bold">Nama Restaurant</p>
                  <FormField
                    control={form.control}
                    name="storeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Nama restaurant kamu"
                            type="text"
                            className="mb-3 border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                >
                  Kirim
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <header className="container flex h-12 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="md:hidden">
            <Drawer direction="left">
              <DrawerTrigger>
                <HiMenu size={20} className="cursor-pointer" />
              </DrawerTrigger>
              <DrawerContent className="flex h-full items-start rounded-none">
                <DrawerHeader className="relative mb-16 ml-5 mt-10 flex items-center gap-2 p-0">
                  <DrawerClose>
                    <HiOutlineX
                      className="absolute -right-80 -top-5"
                      size={25}
                    />
                  </DrawerClose>
                  <div>
                    <Image
                      src="/assets/logo.png"
                      alt="Logo App"
                      width={25}
                      height={25}
                    />
                  </div>
                  <Link href="/" className="text-xl font-bold tracking-wider">
                    gofood
                  </Link>
                </DrawerHeader>
                <div className="ml-10 flex flex-col gap-4 text-lg font-semibold text-green-600">
                  <Link href="/">Beranda</Link>
                  <Link href="/recommendations">Rekomendasi</Link>
                  <Link href="/login">Masuk/Daftar</Link>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/assets/logo.png"
                alt="Logo App"
                width={25}
                height={25}
              />
            </div>
            <Link href="/" className="text-xl font-bold tracking-wider">
              gofood
            </Link>
          </div>
          {navbarLists.map((list) => {
            const isActive = pathname === list.route;
            return (
              <Link
                href={list.route}
                className={`hidden md:block ${isActive ? 'border-b-4 border-red-500 px-7 py-[10px] font-bold text-slate-700' : 'font-semibold text-slate-600'}`}
                key={list.label}
              >
                {list.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-green-50">
            <HiSearch color="green" size={25} />
          </div>
          <div className="hidden rounded-full bg-green-50 p-2 font-bold text-green-700 md:block">
            <Link href="/login">Masuk/Daftar</Link>
          </div>
          <DropdownMenu open={isOpenDropdown} onOpenChange={setIsOpenDropdown}>
            <DropdownMenuTrigger asChild>
              <Button className="flex size-10 items-center justify-center rounded-full bg-red-500 outline-none hover:bg-red-500 focus-visible:ring-0 focus-visible:ring-offset-0">
                <span className="font-medium text-white">D</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 w-56">
              <div className="flex flex-col items-start gap-1 pl-2 pt-2 focus:bg-white">
                <h4 className="font-semibold">Test</h4>
                <p className="text-xs text-black/60">test@test.com</p>
                <p className="text-xs text-black/60 md:mb-5 ">081234567890</p>
              </div>
              <DropdownMenuItem>
                <Link
                  href="/orders"
                  className="size-full font-semibold"
                  onClick={() => setIsOpenDropdown(false)}
                >
                  Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="font-semibold">
                <Link
                  href="/my-restaurant"
                  onClick={() => setIsOpenDropdown(false)}
                  className="size-full"
                >
                  My Restaurant
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="p-0 font-semibold" variant="ghost">
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
