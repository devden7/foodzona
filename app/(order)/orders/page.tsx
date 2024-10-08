import React from 'react';
import { redirect } from 'next/navigation';

import { getOrdersUser } from '@/repositories/orderRepository';
import ListsOrder from '@/components/orders/ListsOrder';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orders History | Food Zona',
};

const OrdersPage = async () => {
  const session = await auth();
  if (!session) {
    return redirect('/login');
  }
  const data = await getOrdersUser(session?.user.token);
  return (
    <>
      {session ? (
        <section className="mb-10 mt-7">
          <div className="container">
            <h2 className="mb-5 text-2xl font-semibold lg:text-3xl">History</h2>
            <ListsOrder data={data.data} session={session} />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default OrdersPage;
