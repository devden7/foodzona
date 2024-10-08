'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { HiOutlineTranslate } from 'react-icons/hi';
import { PiInstagramLogo } from 'react-icons/pi';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer
      className={` ${pathname === '/login' ? '' : 'relative bg-red-600/90 p-6 text-white lg:pt-14'}`}
    >
      {pathname !== '/login' && (
        <div>
          <div className="2xl:container 2xl:w-[1200px]">
            <div className="mb-5 flex items-center gap-3">
              <div>
                <Image
                  src="/assets/logo-hero.svg"
                  alt="Logo App"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-wider lg:text-[34px]"
                >
                  gofood
                </Link>
              </div>
            </div>
            <p className="mb-3 text-2xl font-semibold md:max-w-[400px] lg:mb-8 lg:max-w-[550px] lg:text-3xl">
              Gak perlu repot lagi buat ngemanjain lidahmu, tinggal buka hape
              aja
            </p>
            <p className="mb-5 text-[13px] md:max-w-[400px] lg:max-w-[500px] lg:text-base">
              Nikmati banyak pilihan makanan, promo, dan fitur eksklusif di
              GoFood.
            </p>

            <div className="mb-5 flex w-full flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-40">
                  <Image
                    className="size-full object-contain"
                    src="/assets/playstore.png"
                    alt="Playstore"
                    width={331}
                    height={96}
                    quality={100}
                  />
                </div>
                <div className="w-40">
                  <Image
                    className="size-full object-contain"
                    src="/assets/appstore.png"
                    alt="AppStore"
                    width={295}
                    height={96}
                    quality={100}
                  />
                </div>
              </div>
              <div className="mb-5 h-[500px] sm:top-72 sm:h-[520px] md:absolute md:left-[60%] md:top-8 md:h-[350px] lg:h-[460px]">
                <Image
                  className="h-full object-contain"
                  src="/assets/gofood-footer.png"
                  alt="Logo App"
                  width={404}
                  height={460}
                />
              </div>
            </div>
            <Select>
              <SelectTrigger
                className="mb-5 w-full rounded-full text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:w-3/4 md:max-w-[400px]"
                aria-label="change language"
              >
                <div className="flex items-center gap-3">
                  <HiOutlineTranslate color="red" size={15} />
                  <SelectValue placeholder="Bahasa Indonesia" />
                </div>
              </SelectTrigger>
              <SelectContent className=" focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectItem value="light">Bahasa Indonesia</SelectItem>
                <SelectItem value="dark">English</SelectItem>
              </SelectContent>
            </Select>
            <div className="mb-3 grid grid-cols-2 items-center gap-y-5 font-medium md:max-w-[550px] md:grid-cols-3 md:gap-x-5">
              <p>Kebijakan privasi</p>
              <p>Syarat dan ketentuan</p>
              <div className="flex items-center gap-3 md:gap-1">
                <p>Ikuti Kami</p>
                <PiInstagramLogo size={30} color="white" />
              </div>
            </div>
            <p className="text-sm lg:max-w-[550px]">
              © 2024 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia
              Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual
              Republik Indonesia.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
