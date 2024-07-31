'use client';

import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import { IDataFood } from '@/model/foodModel';
import { addItem, deleteItem } from '@/store/Cart/CartSlice';
import {
  HiArrowSmLeft,
  HiClipboardList,
  HiMinusSm,
  HiPlusSm,
} from 'react-icons/hi';

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.items);
  const finalPrice = useAppSelector((state) => state.finalPrice);

  const dispatch = useAppDispatch();
  const addBtnItemHandler = (item: IDataFood) => {
    dispatch(addItem(item));
  };

  const removeBtnItemHandler = (foodId: number) => {
    dispatch(deleteItem(foodId));
  };
  return (
    <section className="my-7 mb-10">
      <div className="container">
        <div className="my-5">
          <div className="flex items-center gap-5 ">
            <HiArrowSmLeft size={25} color="green" className="cursor-pointer" />
            <div className="text-lg font-semibold">Nama restaurant</div>
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
                <div className="relative mb-4 size-24 rounded-xl bg-purple-500"></div>
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
            <Button
              variant="outline"
              className="rounded-full border-green-700 text-green-700 hover:bg-green-200"
            >
              Tambah
            </Button>
          </div>
        </div>

        <div className="rounded-xl p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <p className="mb-5 font-semibold">Ringkasan pembayaran</p>

          <div className="mb-2 flex justify-between">
            {<p>Harga</p>}
            <p>{finalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-4">Biaya penanganan dan pengiriman</p>
            <p className="mb-2">11.000</p>
          </div>
          <div className="flex justify-between  border-t-[1.5px] border-gray-200">
            <p className="text-sm font-semibold">Total pembayaran</p>
            <p className="text-xl font-bold">{finalPrice + 11000}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
