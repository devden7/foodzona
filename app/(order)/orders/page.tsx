'use client';

import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getOrdersUser } from '@/repositories/orderRepository';
import { HiDotsVertical } from 'react-icons/hi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ResponsiveDialog from '@/components/shared/ResponsiveDialog';
import { Order } from '@/model/orderModel';
import FormRating from '@/components/orders/FormRating';

const OrdersPage = () => {
  const [data, setData] = useState<Order[]>([]);
  const [isRatingBtn, setIsRatingBtn] = useState(false);
  const [orderItemId, setOrderItemId] = useState<number | null>(null);
  // const [rating, setRating] = useState(0);
  const router = useRouter();
  const { isAuth, user, isLoggedIn } = useAuth();
  const fetchData = async () => {
    const response = await getOrdersUser(user.token);
    setData(response.data);
  };
  useEffect(() => {
    isLoggedIn();
    if (!isAuth) {
      router.push('/login');
    } else {
      if (user.token !== '') {
        fetchData();
      }
    }
  }, [isAuth, user.token]);

  const btnReviewHandler = (id: number) => {
    setOrderItemId(id);
  };

  return (
    <>
      {isAuth ? (
        <section className="mb-10 mt-7">
          <div className="container">
            <h2 className="mb-5 text-2xl font-semibold lg:text-3xl">History</h2>
            <div className="flex flex-col gap-3 md:hidden">
              {data.map((item: Order) => (
                <div key={item.orderId}>
                  {item.orderId === orderItemId && (
                    <ResponsiveDialog
                      isOpen={isRatingBtn}
                      setIsOpen={setIsRatingBtn}
                    >
                      <h4 className="text-xl">Rating Food</h4>
                      <FormRating orderId={item.orderId} token={user.token} />
                    </ResponsiveDialog>
                  )}
                  <div className="relative rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4 ">
                    {item.status === 'Berhasil' && (
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <div className="absolute right-[5%] top-[10%] z-50 flex cursor-pointer items-center gap-1 rounded-lg  p-1 text-sm font-medium text-black">
                            <HiDotsVertical size={15} />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute -top-7 right-5">
                          <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                              setIsRatingBtn(true);
                              btnReviewHandler(item.orderId);
                            }}
                          >
                            Beri rating
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                    <h4 className="font-semibold text-black/70">
                      {item.restaurantName}, {item.restaurant.city_name}
                    </h4>
                    <p className="mb-2 text-xs">
                      Sunday, 26 June -
                      <span
                        className={`font-medium ${item.status === 'Berhasil' ? 'text-green-500' : item.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}
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
                  <div className="rounded-b-2xl border border-gray-200 px-2 py-4">
                    <div>
                      <p className="font-medium">IDR {item.totalPrice}</p>
                      <p className="text-xs font-medium text-black/80">
                        {item.totalQuantity} items -
                        <span className="font-normal text-red-500">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:table md:w-full">
              <table className="md:w-full md:border-separate md:border-spacing-y-5">
                <thead>
                  <tr className="text-left text-black/50">
                    <th>Restaurant</th>
                    <th>Order details</th>
                    <th>Total price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item: Order) => (
                    <tr key={item.orderId}>
                      <td className="rounded-l-2xl border-y-[1.5px] border-l-[1.5px] px-3 py-5">
                        <div>
                          <span className="mb-2 line-clamp-1 max-h-5 font-medium text-black/50">
                            {item.restaurantName}, {item.restaurant.city_name}
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
                        {item.orderItem.length === 0 && <p></p>}
                        {item.orderItem.map((order: any) => (
                          <span
                            className="line-clamp-2 max-w-96 text-sm"
                            key={order.orderItemId}
                          >
                            {order.foodNameOrder}
                          </span>
                        ))}
                      </td>
                      <td className="border-y-[1.5px] px-3  py-5">
                        <div>
                          <span className="text-sm">IDR {item.totalPrice}</span>
                          <p className="text-xs font-medium text-black/80 xl:text-sm">
                            {item.totalQuantity} items -
                            <span className="font-normal text-red-500">
                              Closed
                            </span>
                          </p>
                        </div>
                      </td>
                      <td className="rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                        <div className="w-3">
                          {item.status === 'Berhasil' && (
                            <DropdownMenu modal={false}>
                              <DropdownMenuTrigger asChild>
                                <div className=" z-50 flex cursor-pointer items-center">
                                  <HiDotsVertical size={15} />
                                </div>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="absolute -top-7 right-5">
                                <DropdownMenuItem
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setIsRatingBtn(true);
                                    btnReviewHandler(item.orderId);
                                  }}
                                >
                                  Beri rating
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}
      {data.length === 0 && <p className="text-center">Tidak ada order</p>}
    </>
  );
};

export default OrdersPage;
