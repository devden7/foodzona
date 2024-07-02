'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { formCreateFoodSchema } from '@/lib/validation';

const MyRestaurant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formCreateFoodSchema>>({
    resolver: zodResolver(formCreateFoodSchema),
    defaultValues: {
      foodName: '',
      description: '',
      price: undefined,
      category: '',
    },
  });

  function onSubmit(values: z.infer<typeof formCreateFoodSchema>) {
    console.log(values);
  }

  return (
    <>
      <section className="mb-10 mt-5">
        <div className="container">
          <Tabs defaultValue="menu">
            <div className="flex justify-center">
              <TabsList className="flex w-1/2 justify-center bg-white">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="history-order">History order</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="menu">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <div>
                  <DialogTrigger asChild>
                    <Button variant="outline">Add menu</Button>
                  </DialogTrigger>
                </div>

                <DialogContent className="flex w-3/4 flex-col items-start px-8">
                  <DialogTitle>Menu</DialogTitle>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full"
                    >
                      <div className="mb-3">
                        <p className=" mb-2 font-bold">Detail menu</p>
                        <FormField
                          control={form.control}
                          name="foodName"
                          render={({ field }) => (
                            <FormItem className="mb-3 space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="Food name"
                                  type="text"
                                  className=" border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="mb-3 mt-0" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem className="mb-3 space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="Description food"
                                  type="text"
                                  className="border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="price"
                          render={({ field }) => (
                            <FormItem className="mb-3 space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="Price (RP)"
                                  type="number"
                                  onKeyDown={(e) =>
                                    ['E', 'e', '-', '.', ',', '+'].includes(
                                      e.key
                                    ) && e.preventDefault()
                                  }
                                  className="remove-arrow border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem className="mb-3 space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="Category food"
                                  type="text"
                                  className="border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div>
                          <Input
                            id="picture"
                            type="file"
                            className="border-2 border-gray-200"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                      >
                        Tambahkan makanan
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </TabsContent>
            <TabsContent value="history-order">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default MyRestaurant;
