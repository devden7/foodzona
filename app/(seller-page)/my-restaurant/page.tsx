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
import { IDataFood } from '@/model/foodModel';
import { getFoodRestaurant } from '@/repositories/restaurantRepository';

const MyRestaurant = () => {
  const [dataOrderHistory, setDataOrderHistory] = useState<any>();
  const [dataMenu, setDataMenu] = useState<IDataFood[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { isAuth, user, isLoggedIn } = useAuth();

  const fetchData = async () => {
    const resultsMenu = await getFoodRestaurant(user.token);
    setDataMenu(resultsMenu.data.foods);
    const resultsOrderHistory = await getOrdersRestaurant(user.token);
    setDataOrderHistory(resultsOrderHistory.data);
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
      // setIsLoading(false);
    }
  }, [isAuth, user.restaurant, user.token]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

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
                <TabsMenu
                  token={user.token}
                  dataMenu={dataMenu}
                  setDataMenu={setDataMenu}
                />
              </TabsContent>
              <TabsContent value="history-order">
                <TabsHistoryOrder
                  data={dataOrderHistory}
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
