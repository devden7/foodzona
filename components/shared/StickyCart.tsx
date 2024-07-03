import Link from 'next/link';
import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';

const StickyCart = () => {
  return (
    <div className="sticky bottom-0 z-50 h-20 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex h-full items-center justify-center">
        <div className="w-[95%] rounded-full bg-green-700 px-5 py-2">
          <Link
            href="/checkout"
            className="flex items-center justify-between text-sm font-medium text-white"
          >
            <div className="flex flex-col">
              <span>1 Item</span>
              <span className="text-xs">Nama restaurant</span>
            </div>
            <div className="flex items-center gap-2 ">
              <p className="text-base">115.000</p>
              <HiShoppingBag size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCart;
