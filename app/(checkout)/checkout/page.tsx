'use client';

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import { IDataFood } from '@/model/foodModel';
import { addItem, deleteItem } from '@/store/Cart/CartSlice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  HiArrowSmLeft,
  HiClipboardList,
  HiMinusSm,
  HiPlusSm,
} from 'react-icons/hi';

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_API;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

const Checkout = () => {
  const [isCart] = useState(true);
  const cartItems = useAppSelector((state) => state.cart.items);
  const calcPriceItem = useAppSelector((state) => state.cart.calcPriceItem);
  const location = useAppSelector((state) => state.location.city);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addBtnItemHandler = (item: IDataFood) => {
    const request = {
      foodId: item.foodId,
      name: item.name,
      description: item.description,
      price: item.price,
      public_id_img: item.public_id_img,
      version_img: item.version_img,
      format_img: item.format_img,
      restaurantName: item.restaurantName,
    };
    dispatch(addItem(request));
  };

  const removeBtnItemHandler = (foodId: number) => {
    dispatch(deleteItem(foodId));
  };
  return (
    <>
      {session ? (
        <section className="my-7 mb-10">
          <div className="container">
            {cartItems?.length === 0 && (
              <Dialog open={isCart} modal={true}>
                <DialogContent
                  className="flex flex-col items-start px-8"
                  hideCloseButton={true}
                >
                  <DialogTitle>Tidak ada menu</DialogTitle>
                  <p>
                    Mau cari resto lain? GoFood punya banyak resto yang bisa
                    kamu eksplor, lho.
                  </p>
                  <DialogClose asChild>
                    <Button className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg">
                      <Link href={`/${location}/restaurants`}>
                        Kembali ke halaman resto
                      </Link>
                    </Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            )}
            <div className="my-5">
              <div className="flex items-center gap-5 ">
                <Link
                  href={`/${location}/restaurant/${cartItems.length !== 0 ? cartItems[0].restaurantName.toLowerCase().replace(/ /g, '-') : ''}`}
                >
                  <HiArrowSmLeft
                    size={25}
                    color="green"
                    className="cursor-pointer"
                  />
                </Link>
                <div className="text-lg font-semibold">
                  {cartItems.length !== 0 ? cartItems[0].restaurantName : ''}
                </div>
              </div>
            </div>
            <div className="mb-6 rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="mb-4 flex items-center gap-2">
                <HiClipboardList size={35} color="red" />
                <p className="font-semibold"> Pesanan kamu</p>
              </div>
              {cartItems.length === 0 && (
                <p>Silahkan melakukan pemesanan makanan </p>
              )}
              {cartItems.map((item) => (
                <div
                  key={item.foodId}
                  className="mb-4 flex justify-between border-b-[1.5px] border-gray-200"
                >
                  <div>
                    <p className="mb-3 font-semibold">{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <div className="relative mb-4 size-24 overflow-hidden rounded-xl">
                      <Image
                        className="object-cover"
                        src={
                          item.public_id_img !== null &&
                          item.version_img !== null &&
                          item.format_img !== null &&
                          IMAGE_URL !== undefined &&
                          CLOUDINARY_NAME !== undefined
                            ? IMAGE_URL +
                              CLOUDINARY_NAME +
                              '/v' +
                              item.version_img +
                              '/' +
                              item.public_id_img +
                              '.' +
                              item.format_img
                            : '/assets/no-image.jpeg'
                        }
                        alt="makanan"
                        fill
                        sizes="50vw"
                        quality={90}
                      />
                    </div>
                    <div className="mb-3 flex justify-between gap-2">
                      <button
                        className="flex size-6 items-center justify-center rounded-full border border-green-700"
                        onClick={() => removeBtnItemHandler(item.foodId)}
                      >
                        <HiMinusSm color="green" />
                      </button>
                      <div>
                        <span>{item.quantity}</span>
                      </div>
                      <button
                        className="flex size-6 items-center justify-center rounded-full border border-green-700"
                        onClick={() => addBtnItemHandler(item)}
                      >
                        <HiPlusSm color="green" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-3 flex justify-between">
                <div>
                  <p className="font-semibold">Ada lagi pesanannya?</p>
                  <p className="text-xs text-black/80">
                    Masih bisa nambah menu lain, ya.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <p className="mb-5 font-semibold">Ringkasan pembayaran</p>

              <div className="mb-2 flex justify-between">
                {<p>Harga</p>}
                <p>{calcPriceItem}</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-4">Biaya penanganan dan pengiriman</p>
                <p className="mb-2">11.000</p>
              </div>
              <div className="flex justify-between  border-t-[1.5px] border-gray-200">
                <p className="text-sm font-semibold">Total pembayaran</p>
                <p className="text-xl font-bold">{calcPriceItem + 11000}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Checkout;
