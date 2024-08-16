import { redirect } from 'next/navigation';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TabsMenu from '@/components/seller/my-restauirant/TabsMenu';
import TabsHistoryOrder from '@/components/seller/my-restauirant/TabsHistoryOrder';
import { getOrdersRestaurant } from '@/repositories/orderRepository';
import { getFoodRestaurant } from '@/repositories/restaurantRepository';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import { auth } from '@/auth';
import Loading from './Loading';

const MyRestaurant = async () => {
  const session = await auth();
  if (!session) {
    return redirect('/login');
  }
  const dataOrderHistory = await getOrdersRestaurant(session.user.token);
  const dataMenu = await getFoodRestaurant(session.user.token);

  const loading = true;

  if (loading) return <Loading />;
  return (
    <>
      {session && session.user.restaurant !== null && (
        <section className="mb-10 mt-5">
          <div className="container 2xl:w-[1300px]">
            <BreadCrumbSection
              pageName="seller"
              restaurantName={session.user.restaurant}
            />
          </div>
          <div className="container 2xl:w-[1300px]">
            <Tabs defaultValue="menu">
              <div className="flex justify-center">
                <TabsList className="flex w-1/2 justify-center bg-white">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="history-order">History order</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="menu">
                <TabsMenu
                  token={session.user.token}
                  dataMenu={dataMenu.data.foods}
                />
              </TabsContent>
              <TabsContent value="history-order">
                <TabsHistoryOrder
                  data={dataOrderHistory.data}
                  session={session}
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
