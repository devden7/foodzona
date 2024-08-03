'use client';
import { Button } from '@/components/ui/button';

interface OrderItem {
  orderItemId: number;
  foodNameOrder: string;
}

interface Restaurant {
  city_name: string;
}

interface Order {
  orderId: number;
  orderItem: OrderItem[];
  restaurant: Restaurant;
  restaurantName: string;
  status: string;
  totalPrice: number;
  totalQuantity: number;
  username: string;
}

interface Props {
  data: Order[];
  deliveryFoodBtnHandler: (orderId: number) => void;
}

const TabsHistoryOrder = ({ data, deliveryFoodBtnHandler }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-3 md:hidden">
        <div>
          {data?.map((item: Order) => (
            <div key={item.orderId}>
              <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4">
                <h4 className="font-semibold text-black/70">{item.username}</h4>
                <p className="mb-2 text-xs">
                  Sunday, 26 June -
                  <span
                    className={`font-medium ${item.status === 'Berhasil' ? 'text-green-700' : item.status === 'Pending' ? 'text-yellow-700' : 'text-red-700'}`}
                  >
                    {item.status}
                  </span>
                </p>

                <div>
                  {item.orderItem.length === 0 && <p></p>}
                  {item.orderItem.map((order: any) => (
                    <p className="text-sm" key={order.orderItemId}>
                      {order.foodNameOrder}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-between rounded-b-2xl border border-gray-200 px-2 py-4">
                <div>
                  <p className="font-medium">IDR {item.totalPrice}</p>
                  <p className="text-xs font-medium text-black/80">
                    {item.totalQuantity} items -
                    <span className="font-normal text-red-500">Closed</span>
                  </p>
                </div>
                <div>
                  <Button className="mr-3" variant="outline">
                    Batalkan
                  </Button>
                  <Button
                    className=" bg-green-700"
                    onClick={() => deliveryFoodBtnHandler(item.orderId)}
                  >
                    Kirim makanan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {data.length !== 0 && (
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
              {data?.map((item: any) => (
                <tr key={item.orderId}>
                  <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                    <div>
                      <span className="mb-2 line-clamp-1 max-h-7 font-medium text-black/50">
                        {item.username}
                      </span>
                      <p className="mb-2 text-sm">
                        Sunday, 26 June -
                        <span
                          className={`font-medium ${item.status === 'Berhasil' ? 'text-green-500' : item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div>
                      {item.orderItem.map((order: any) => (
                        <span
                          key={order.orderItemId}
                          className="line-clamp-2 max-w-96 text-sm "
                        >
                          {order.foodNameOrder}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="w-1/6 border-y-[1.5px] px-3  py-5">
                    <div>
                      <span className="text-sm"> IDR {item.totalPrice}</span>
                      <p className="text-xs font-medium text-black/80 xl:text-sm">
                        {item.totalQuantity} items -
                        <span className="font-normal text-red-500">Closed</span>
                      </p>
                    </div>
                  </td>
                  <td className="w-1/5 rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    <div>
                      <Button className="mb-3 mr-3 xl:mb-0" variant="outline">
                        Batalkan
                      </Button>
                      <Button
                        className=" bg-green-700"
                        onClick={() => deliveryFoodBtnHandler(item.orderId)}
                      >
                        Kirim makanan
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {data.length === 0 && <p className="text-center">Tidak ada order</p>}
    </>
  );
};

export default TabsHistoryOrder;
