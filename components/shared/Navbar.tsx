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

const Navbar = () => {
  const pathname = usePathname();
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );

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
    <nav
      className={`helper-responsive relative z-50 border-b-2 border-slate-100 bg-white ${mediumScreen < 768 && pathname === '/login' ? 'hidden' : ''}`}
    >
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex size-10 items-center justify-center rounded-full bg-red-500 outline-none hover:bg-red-500 focus-visible:ring-0 focus-visible:ring-offset-0">
                <span className="font-medium text-white">D</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem className="flex flex-col items-start gap-1 ">
                <h4 className="font-semibold">Test</h4>
                <p className="text-xs text-black/60">test@test.com</p>
                <p className="text-xs text-black/60 md:mb-5 ">081234567890</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="font-semibold">
                  Orders
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
