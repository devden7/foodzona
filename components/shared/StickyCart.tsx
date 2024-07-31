'use client';

import Link from 'next/link';
import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import { useAppSelector } from '@/hooks/use-redux-hook';

const StickyCart = () => {
  const cartItems = useAppSelector((state) => state.items);
  const totalQuantityCart = useAppSelector((state) => state.totalQuantity);
  const finalPrice = useAppSelector((state) => state.finalPrice);

  return (
    <>
      {cartItems.length !== 0 && (
        <div className=" sticky bottom-0 z-50 h-20 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex h-full items-center justify-center">
            <div className="h-3/5 w-[95%] rounded-full bg-green-700 px-5 py-2 lg:w-3/5 xl:w-1/2">
              <Link
                href="/checkout"
                className="flex items-center justify-between text-sm font-medium text-white"
              >
                <div className="flex flex-col">
                  <span>{totalQuantityCart} Item</span>
                  <span className="text-xs">Nama restaurant</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <p className="text-base">{finalPrice}</p>
                  <HiShoppingBag size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyCart;
