'use client';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { useMediaQuery } from '@/hooks/use-media-query';
import { convertIsoToDate, formatCurrency } from '@/lib/utils';
import { Order } from '@/model/orderModel';
import { cancelFood, deliveryFood } from '@/repositories/orderRepository';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  data: Order[];
  session: Session;
}

const TabsHistoryOrder = ({ data, session }: Props) => {
  const [isLoadingDelivery, setIsLoadingDelivery] = useState<number | null>(
    null
  );
  const [isLoadingCancel, setIsLoadingCancel] = useState<number | null>(null);
  const router = useRouter();
  const isTab = useMediaQuery('(min-width: 768px)');

  const deliveryFoodBtnHandler = async (orderId: number) => {
    setIsLoadingDelivery(orderId);
    const response = await deliveryFood(session.user.token, orderId);
    if (response.errors) {
      toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
      setIsLoadingDelivery(null);
      return;
    }
    router.refresh();

    toast({
      description: 'Berhasil mengirim makanan',
      duration: 3000,
    });
    setIsLoadingDelivery(null);
  };

  const cancelFoodBtnHandler = async (orderId: number) => {
    setIsLoadingCancel(orderId);
    const response = await cancelFood(session.user.token, orderId);
    if (response.errors) {
      toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
      setIsLoadingCancel(null);
      return;
    }
    setIsLoadingCancel(null);
    router.refresh();
    toast({
      description: 'Makanan dibatalkan',
      duration: 3000,
    });
  };
  return (
    <>
      {!isTab && (
        <div className="flex flex-col gap-4">
          {data?.map((item: Order) => (
            <div key={item.orderId}>
              <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4">
                <h4 className="font-semibold text-black/70">{item.username}</h4>
                <div className="flex items-center gap-2 text-sm">
                  <p>{convertIsoToDate(item.createAt)}</p>
                  <span
                    className={`font-medium ${item.status === 'Berhasil' ? 'text-green-500' : item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="flex gap-1">
                  {item.orderItem.map((order: any, index) => (
                    <p className="text-sm" key={order.orderItemId}>
                      {order.foodNameOrder}
                      {index < item.orderItem.length - 1 && <span> - </span>}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-between rounded-b-2xl border border-gray-200 px-2 py-4">
                <div className="w-1/2">
                  <p className="font-medium">
                    IDR {formatCurrency(item.totalPrice)}
                  </p>
                  <p className="text-xs font-medium text-black/80">
                    {item.totalQuantity} items
                  </p>
                </div>
                {item.status === 'Pending' && (
                  <div>
                    <Button
                      className="mb-3 mr-3"
                      variant="outline"
                      onClick={() => cancelFoodBtnHandler(item.orderId)}
                      disabled={isLoadingCancel === item.orderId}
                    >
                      {isLoadingCancel === item.orderId && <LoadingSpinner />}
                      Batalkan
                    </Button>
                    <Button
                      className=" bg-green-700"
                      onClick={() => deliveryFoodBtnHandler(item.orderId)}
                      disabled={isLoadingDelivery === item.orderId}
                    >
                      {isLoadingDelivery === item.orderId && <LoadingSpinner />}
                      Kirim makanan
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isTab && data.length !== 0 && (
        <div className="table w-full">
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
                      <div className="flex items-center gap-2 text-sm">
                        <p>{convertIsoToDate(item.createAt)}</p>
                        <span
                          className={`font-medium ${item.status === 'Berhasil' ? 'text-green-500' : item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="border-y-[1.5px] px-3  py-5">
                    <div className="flex gap-1">
                      {item.orderItem.map((order: any, index: number) => (
                        <span
                          key={order.orderItemId}
                          className="line-clamp-2 max-w-96 text-sm "
                        >
                          {order.foodNameOrder}
                          {index < item.orderItem.length - 1 && (
                            <span> - </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="w-1/6 border-y-[1.5px] px-3  py-5">
                    <div>
                      <span className="text-sm">
                        {' '}
                        IDR {formatCurrency(item.totalPrice)}
                      </span>
                      <p className="text-xs font-medium text-black/80 xl:text-sm">
                        {item.totalQuantity} items
                      </p>
                    </div>
                  </td>
                  <td className="w-1/5 rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                    {item.status === 'Pending' && (
                      <div>
                        <Button
                          className="mb-3 mr-3"
                          variant="outline"
                          onClick={() => cancelFoodBtnHandler(item.orderId)}
                          disabled={isLoadingDelivery === item.orderId}
                        >
                          {isLoadingCancel === item.orderId && (
                            <LoadingSpinner />
                          )}
                          Batalkan
                        </Button>
                        <Button
                          className=" bg-green-700"
                          onClick={() => deliveryFoodBtnHandler(item.orderId)}
                          disabled={isLoadingDelivery === item.orderId}
                        >
                          {isLoadingDelivery === item.orderId && (
                            <LoadingSpinner />
                          )}
                          Kirim makanan
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {data.length === 0 && (
        <p className="flex h-52 w-auto items-center justify-center font-medium lg:text-xl">
          Tidak ada order
        </p>
      )}
    </>
  );
};

export default TabsHistoryOrder;
