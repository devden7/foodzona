'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { navbarLists } from '@/constants';
import NavbarForm from '../navbar/NavbarForm';
import UserDropdown from '../navbar/UserDropdown';
import { useMediaQuery } from '@/hooks/use-media-query';
import { signOut, useSession } from 'next-auth/react';
import { useAppSelector } from '@/hooks/use-redux-hook';

const Navbar = () => {
  const pathname = usePathname();
  const location = useAppSelector((state) => state.location.city);
  const isTab = useMediaQuery('(min-width: 768px)');
  const { data: session, update } = useSession();

  const logoutBtnHandler = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <nav
      className={`relative  border-b-2 border-slate-100 bg-white ${!isTab && pathname === '/login' ? 'hidden' : ''}`}
    >
      <NavbarForm session={session} update={update} />
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
                  <Link href={`/${location}/recommendations`}>Rekomendasi</Link>
                  {!session && pathname !== '/login' && (
                    <Link href="/login">Masuk/Daftar</Link>
                  )}
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
            const itemUrl =
              list.route === '/' ? '/' : '/' + location + '/recommendations';
            const isActive = pathname === itemUrl;
            return (
              <Link
                href={itemUrl}
                className={`hidden md:block ${isActive ? 'border-b-4 border-red-500 px-7 py-[10px] font-bold text-slate-700' : 'font-semibold text-slate-600'}`}
                key={list.label}
              >
                {list.label}
              </Link>
            );
          })}
        </div>
        <UserDropdown
          pathname={pathname}
          logoutBtnHandler={logoutBtnHandler}
          session={session}
        />
      </header>
    </nav>
  );
};

export default Navbar;
