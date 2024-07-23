'use client';

import { useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { AuthContext } from '@/context/AuthContext';
import TabsMenu from '@/components/seller/my-restauirant/TabsMenu';
import TabsHistoryOrder from '@/components/seller/my-restauirant/TabsHistoryOrder';

const MyRestaurant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    authCtx?.isLoggedIn();
    if (!authCtx?.isAuth) {
      router.push('/login');
    } else if (authCtx?.user.restaurant === null) {
      router.push('/');
    } else {
      setIsLoading(false);
    }
  }, [authCtx?.isAuth, authCtx?.user.restaurant]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {authCtx?.isAuth && authCtx?.user.restaurant !== null && (
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
                <BreadcrumbItem>{authCtx?.user.restaurant}</BreadcrumbItem>
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
                <TabsMenu />
              </TabsContent>
              <TabsContent value="history-order">
                <TabsHistoryOrder />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}
    </>
  );
};

export default MyRestaurant;
