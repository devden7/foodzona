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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { formCreateFoodSchema } from '@/lib/validation';
import { restaurantLists } from '@/constants';
import Image from 'next/image';
import { HiDotsVertical } from 'react-icons/hi';

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
                    <Button variant="outline" className="mb-3">
                      Add menu
                    </Button>
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

              <div className="mb-10 flex flex-wrap items-center gap-4 md:justify-between">
                {restaurantLists.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
                  >
                    <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                      <Image
                        src={item.imageUrl}
                        alt={item.label}
                        fill
                        objectFit="cover"
                        quality={100}
                      />
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <div className="absolute left-[12%] top-[10%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-lg bg-white p-1 text-sm font-medium text-black">
                            <HiDotsVertical size={15} />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute left-0">
                          <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <div>
                              <DialogTrigger asChild>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
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
                                    <p className=" mb-2 font-bold">
                                      Detail menu
                                    </p>
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
                                                [
                                                  'E',
                                                  'e',
                                                  '-',
                                                  '.',
                                                  ',',
                                                  '+',
                                                ].includes(e.key) &&
                                                e.preventDefault()
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
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="size-full">
                      <h3 className="mb-3 line-clamp-2 font-semibold">
                        {item.label}
                      </h3>
                      <div className="mb-3 flex max-h-96 flex-wrap gap-2">
                        <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                          description food
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-medium">10.000</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
