'use client';

import { useAuth } from '@/context/AuthContext';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getOrdersUser } from '@/repositories/orderRepository';
import { Order } from '@/model/orderModel';
import ListsOrder from '@/components/orders/ListsOrder';

const OrdersPage = () => {
  const [data, setData] = useState<Order[]>([]);
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

  return (
    <>
      {isAuth ? (
        <section className="mb-10 mt-7">
          <div className="container">
            <h2 className="mb-5 text-2xl font-semibold lg:text-3xl">History</h2>
            <ListsOrder data={data} />
          </div>
        </section>
      ) : null}
      {data.length === 0 && <p className="text-center">Tidak ada order</p>}
    </>
  );
};

export default OrdersPage;
