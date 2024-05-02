import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiMenu, HiSearch } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav>
      <header className="container flex h-12 items-center justify-between">
        <div className="flex items-center gap-4">
          <HiMenu size={20} className="cursor-pointer" />

          <div className="flex gap-2">
            <div>
              <Image
                src="/assets/logo.png"
                alt="Logo App"
                width={25}
                height={25}
              />
            </div>
            <Link
              href="/"
              className="font-maison text-xl font-bold tracking-wider"
            >
              gofood
            </Link>
          </div>
          <Link href="/" className="hidden">
            Beranda
          </Link>
          <Link href="/recommendations" className="hidden">
            Rekomendasi
          </Link>
        </div>
        <div>
          <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-green-50">
            <HiSearch color="green" size={25} />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
