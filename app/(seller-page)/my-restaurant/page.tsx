'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { useAuth } from '@/context/AuthContext';
import TabsMenu from '@/components/seller/my-restauirant/TabsMenu';
import TabsHistoryOrder from '@/components/seller/my-restauirant/TabsHistoryOrder';
import {
  getOrdersRestaurant,
  deliveryFood,
  cancelFood,
} from '@/repositories/orderRepository';

const MyRestaurant = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuth, user, isLoggedIn } = useAuth();

  const fetchData = async () => {
    const response = await getOrdersRestaurant(user.token);
    setData(response.data);
  };

  useEffect(() => {
    isLoggedIn();
    if (!isAuth) {
      router.push('/login');
    } else if (user.restaurant === null) {
      router.push('/');
    } else {
      if (user.token !== '') {
        fetchData();
      }
      setIsLoading(false);
    }
  }, [isAuth, user.restaurant, user.token]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const deliveryFoodBtnHandler = async (orderId: number) => {
    const response = await deliveryFood(user.token, orderId);
  };

  const cancelFoodBtnHandler = async (orderId: number) => {
    const response = await cancelFood(user.token, orderId);
  };
  return (
    <>
      {isAuth && user.restaurant !== null && (
        <section className="mb-10 mt-5">
          <div className="container">
            <Breadcrumb className="my-5">
              <BreadcrumbList className="text-black">
                <BreadcrumbItem>
                  <BreadcrumbLink className="hover:text-green-700" href="/">
                    My-Restaurant
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>{user.restaurant}</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Tabs defaultValue="menu">
              <div className="flex justify-center">
                <TabsList className="flex w-1/2 justify-center bg-white">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="history-order">History order</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="menu">
                <TabsMenu token={user.token} />
              </TabsContent>
              <TabsContent value="history-order">
                <TabsHistoryOrder
                  data={data}
                  deliveryFoodBtnHandler={deliveryFoodBtnHandler}
                  cancelFoodBtnHandler={cancelFoodBtnHandler}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}
    </>
  );
};

export default MyRestaurant;
