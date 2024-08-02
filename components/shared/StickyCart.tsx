'use client';

import Link from 'next/link';
import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { createOrder } from '@/repositories/orderRepository';
import { useAuth } from '@/context/AuthContext';
import { toast } from '../ui/use-toast';
import { ToastAction } from '../ui/toast';
import { resetCart } from '@/store/Cart/CartSlice';

const StickyCart = () => {
  const { isAuth, user } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.items);
  const totalQuantityCart = useAppSelector((state) => state.totalQuantity);
  const calcPriceItem = useAppSelector((state) => state.calcPriceItem);
  const dispatch = useAppDispatch();

  const submitOrderHandler = async () => {
    const request = {
      totalQuantity: totalQuantityCart,
      calcPriceItem,
      items: cartItems,
    };
    const response = await createOrder({ token: user.token, ...request });

    if (response.errors) {
      toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 500,
      });
      return setTimeout(() => dispatch(resetCart()), 500);
    }

    toast({
      description: 'Order berhasil',
      duration: 3000,
    });

    router.push('/orders');
    setTimeout(() => dispatch(resetCart()), 500);
  };

  const handlerAuthBtn = () => {
    if (!isAuth) {
      return toast({
        description: 'Silahkan untuk melakukan login',
        duration: 3000,
      });
    }
  };
  return (
    <>
      {cartItems.length !== 0 &&
        pathname !== '/login' &&
        pathname !== '/orders' &&
        pathname !== '/my-restaurant' && (
          <div className=" sticky bottom-0 z-50 h-20 w-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex h-full items-center justify-center">
              <div className="h-3/5 w-[95%] rounded-full bg-green-700 px-5 py-2 lg:w-3/5 xl:w-1/2">
                {pathname !== '/checkout' ? (
                  <Link
                    onClick={handlerAuthBtn}
                    href="/checkout"
                    className="flex items-center justify-between text-sm font-medium text-white"
                  >
                    <div className="flex flex-col">
                      <span>{totalQuantityCart} Item</span>
                      <span className="text-xs">Nama restaurant</span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <p className="text-base">{calcPriceItem}</p>
                      <HiShoppingBag size={20} />
                    </div>
                  </Link>
                ) : (
                  <Button
                    variant="outline"
                    type="submit"
                    onClick={submitOrderHandler}
                    className="size-full border-0 bg-transparent text-white outline-none hover:bg-transparent hover:text-white md:text-lg"
                  >
                    Beli
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default StickyCart;
