'use client';

import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getOrdersUser } from '@/repositories/orderRepository';

const OrdersPage = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuth, user, isLoggedIn } = useAuth();
  const fetchData = async () => {
    const response = await getOrdersUser(user.token);
    setData(response);
  };
  useEffect(() => {
    isLoggedIn();
    if (!isAuth) {
      router.push('/login');
    } else {
      console.log('else');
      if (user.token !== '') {
        console.log('user token');
        fetchData();
      }
      setIsLoading(false);
    }
  }, [isAuth, user.token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isAuth ? (
        <section className="mb-10 mt-7">
          <div className="container">
            <h2 className="mb-5 text-2xl font-semibold lg:text-3xl">History</h2>
            <div className="flex flex-col gap-3 md:hidden">
              {data?.map((item) => (
                <div key={item.orderId}>
                  <div className="rounded-t-2xl border border-b-0 border-gray-200 px-2 py-4">
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
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => (
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
                      <td className="w-1/6 rounded-r-2xl border-y-[1.5px] border-r-[1.5px] px-3 py-5">
                        <div>
                          <span className="text-sm">
                            {' '}
                            IDR {item.totalPrice}
                          </span>
                          <p className="text-xs font-medium text-black/80 xl:text-sm">
                            {item.totalQuantity} items -
                            <span className="font-normal text-red-500">
                              Closed
                            </span>
                          </p>
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
      {data?.length === 0 && <p className="text-center">Tidak ada order</p>}
    </>
  );
};

export default OrdersPage;
