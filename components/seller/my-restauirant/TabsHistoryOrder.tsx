import { Button } from '@/components/ui/button';

const TabsHistoryOrder = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        <div>
          <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4">
            <h4 className="font-semibold text-black/70">Nama pelanggan</h4>
            <p className="mb-2 text-xs">
              Sunday, 26 June -
              <span className=" font-medium text-green-700">Completed</span>
            </p>

            <p className="text-sm">
              Category pesanan 1, category pesanan 2, category pesanan 3
            </p>
          </div>
          <div className="flex justify-between rounded-b-2xl border border-gray-200 px-2 py-4">
            <div>
              <p className="font-medium">IDR 10,000</p>
              <p className="text-xs font-medium text-black/80">
                3 items -
                <span className="font-normal text-red-500">Closed</span>
              </p>
            </div>
            <div>
              <Button className="mr-3" variant="outline">
                Batalkan
              </Button>
              <Button className=" bg-green-700">Kirim makanan</Button>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4">
            <h4 className="font-semibold text-black/70">Nama Pelanggan</h4>
            <p className="mb-2 text-xs">
              Sunday, 26 June -
              <span className=" font-medium text-green-700">Pending</span>
            </p>

            <p className="text-sm">
              Category pesanan 1, category pesanan 2, category pesanan 3
            </p>
          </div>
          <div className="flex justify-between rounded-b-2xl border border-gray-200 px-2 py-4">
            <div>
              <p className="font-medium">IDR 10,000</p>
              <p className="text-xs font-medium text-black/80">
                3 items -
                <span className="font-normal text-red-500">Closed</span>
              </p>
            </div>
            <div>
              <Button className="mr-3" variant="outline">
                Batalkan
              </Button>
              <Button className=" bg-green-700">Kirim makanan</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:table md:w-full">
        <table className="md:w-full md:border-separate md:border-spacing-y-5">
          <thead>
            <tr className="text-left text-black/50">
              <th>Nama Pelanggan</th>
              <th>Order details</th>
              <th>Total price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                <div>
                  <span className="mb-2 line-clamp-1 max-h-7 font-medium text-black/50">
                    Nama pelanggan
                  </span>
                  <p className="mb-2 text-sm">
                    Sunday, 26 June -
                    <span className=" font-medium text-green-700">
                      Completed
                    </span>
                  </p>
                </div>
              </td>
              <td className="border-y-[1.5px] px-3  py-5">
                <span className="line-clamp-2 max-w-96 text-sm ">
                  Category pesanan 1, category pesanan 2, category pesanan 3
                  category pesanan 3 category pesanan 3 category pesanan 3
                  category pesanan 3
                </span>
              </td>
              <td className="w-1/6 border-y-[1.5px] px-3  py-5">
                <div>
                  <span className="text-sm"> IDR 10,000</span>
                  <p className="text-xs font-medium text-black/80 xl:text-sm">
                    3 items -
                    <span className="font-normal text-red-500">Closed</span>
                  </p>
                </div>
              </td>
              <td className="w-1/5 rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                <div>
                  <Button className="mb-3 mr-3 xl:mb-0" variant="outline">
                    Batalkan
                  </Button>
                  <Button className=" bg-green-700">Kirim makanan</Button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                <div>
                  <span className="mb-2 line-clamp-1 max-h-7 font-medium text-black/50">
                    Nama pelanggan
                  </span>
                  <p className="mb-2 text-sm">
                    Sunday, 26 June -
                    <span className=" font-medium text-green-700">
                      Completed
                    </span>
                  </p>
                </div>
              </td>
              <td className="border-y-[1.5px] px-3  py-5">
                <span className="line-clamp-2 max-w-96 text-sm ">
                  Category pesanan 1, category pesanan 2, category pesanan 3
                  category pesanan 3 category pesanan 3 category pesanan 3
                  category pesanan 3
                </span>
              </td>
              <td className="w-1/6 border-y-[1.5px] px-3  py-5">
                <div>
                  <span className="text-sm"> IDR 10,000</span>
                  <p className="text-xs font-medium text-black/80 xl:text-sm">
                    3 items -
                    <span className="font-normal text-red-500">Closed</span>
                  </p>
                </div>
              </td>
              <td className="w-1/5 rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                <div>
                  <Button className="mb-3 mr-3 xl:mb-0" variant="outline">
                    Batalkan
                  </Button>
                  <Button className=" bg-green-700">Kirim makanan</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TabsHistoryOrder;
