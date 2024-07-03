import { Button } from '@/components/ui/button';
import {
  HiArrowSmLeft,
  HiClipboardList,
  HiMinusSm,
  HiPlusSm,
} from 'react-icons/hi';

const Checkout = () => {
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
          <div className="mb-4 flex justify-between border-b-[1.5px] border-gray-200">
            <div>
              <p className="mb-3 font-semibold">NAMA MAKANAN </p>
              <p>50.000</p>
            </div>
            <div>
              <div className="relative mb-4 size-24 rounded-xl bg-purple-500"></div>
              <div className="mb-3 flex justify-between gap-2">
                <div className="flex size-6 items-center justify-center rounded-full border border-green-700">
                  <HiMinusSm color="green" />
                </div>
                <div>
                  <span>1</span>
                </div>
                <div className="flex size-6 items-center justify-center rounded-full border border-green-700">
                  <HiPlusSm color="green" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 flex justify-between">
            <div>
              <p className="font-semibold">Ada lagi pesanannya?</p>
              <p className="text-xs text-black/80">
                Masih bisa nasmbah menu lain, ya.
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
            <p>Harga</p>
            <p>30.000</p>
          </div>
          <div className="flex justify-between">
            <p className="mb-4">Biaya penanganan dan pengiriman</p>
            <p className="mb-2">11.000</p>
          </div>
          <div className="flex justify-between  border-t-[1.5px] border-gray-200">
            <p className="text-sm font-semibold">Total pembayaran</p>
            <p className="text-xl font-bold">41.000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
