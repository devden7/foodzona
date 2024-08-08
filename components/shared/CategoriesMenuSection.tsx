'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { typeFoodLists } from '@/constants';
import { Button } from '../ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const CategoriesMenuSection = () => {
  const [isMoreBtn, setIsMoreBtn] = useState(false);
  const isMobile = useMediaQuery('(min-width: 640px)');
  const isTab = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const listFoodByScreen = isDesktop ? 5 : isTab ? 7 : isMobile ? 8 : 17;
  return (
    <>
      <div
        className={`relative grid grid-cols-3 gap-x-5 gap-y-8 overflow-hidden md:grid-cols-4 lg:grid-cols-6`}
      >
        {typeFoodLists.map((item, index) => (
          <Link href={item.href} key={item.id}>
            <div
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
          </Link>
        ))}
      </div>

      {isMobile && !isMoreBtn && (
        <Button
          className="absolute left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 md:w-1/4 lg:w-1/5 xl:w-[15%]"
          onClick={() => setIsMoreBtn((prev) => !prev)}
        >
          Tampilkan kuliner lainnya
        </Button>
      )}
    </>
  );
};

export default CategoriesMenuSection;
