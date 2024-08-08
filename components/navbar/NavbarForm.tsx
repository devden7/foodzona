import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formCreateStoreSchema } from '@/lib/validation';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { createRestaurant } from '@/repositories/restaurantRepository';
import { useAuth } from '@/context/AuthContext';
import { toast } from '../ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import ResponsiveDialog from '../shared/ResponsiveDialog';

const NavbarForm = () => {
  const [isOpenCreateStore, setIsOpenCreateStore] = useState(false);

  const { isAuth, user, logout } = useAuth();

  const router = useRouter();
  const form = useForm<z.infer<typeof formCreateStoreSchema>>({
    resolver: zodResolver(formCreateStoreSchema),
    defaultValues: {
      restaurantName: '',
      city: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formCreateStoreSchema>) {
    const response = await createRestaurant({
      restaurantName: values.restaurantName,
      city: values.city,
      token: user.token,
    });

    if (response.errors) {
      return toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    }
    toast({
      description:
        'The restaurant was successfully created, please log in again',
      duration: 3000,
    });
    setIsOpenCreateStore(false);
    logout();
    setTimeout(() => {
      router.push('/login');
      // window.location.reload();
    }, 2000);
    form.reset();
  }
  return (
    <>
      {isAuth && user.restaurant === null && (
        <div className="container flex items-center justify-between bg-red-500 py-2">
          <span className="text-sm font-medium"> Ingin menjual makanan ?</span>
          <div>
            <Button
              variant="outline"
              className="h-0 border-none bg-green-700 p-5 text-white  hover:bg-green-800 hover:text-white"
              onClick={() => setIsOpenCreateStore(true)}
            >
              Create restaurant
            </Button>
          </div>
          <ResponsiveDialog
            isOpen={isOpenCreateStore}
            setIsOpen={setIsOpenCreateStore}
            closeBtn={false}
          >
            <div className="flex w-full flex-col items-center p-8">
              <p className="mb-3 text-lg font-medium">
                Buat toko kamu sekarang
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                  <div>
                    <FormField
                      control={form.control}
                      name="restaurantName"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel className=" mb-2 font-bold">
                            Nama Restaurant
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nama restaurant kamu"
                              type="text"
                              className=" border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="mb-5">
                          <FormLabel className=" mb-2 font-bold">
                            Kota Restaurant
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Kota restaurant"
                              type="text"
                              className="mb-3 border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                  >
                    Kirim
                  </Button>
                </form>
              </Form>
            </div>
          </ResponsiveDialog>
        </div>
      )}
    </>
  );
};

export default NavbarForm;
