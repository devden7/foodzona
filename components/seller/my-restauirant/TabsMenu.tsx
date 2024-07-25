'use client';

import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { formCreateFoodSchema } from '@/lib/validation';
import { IDataFood } from '@/model/foodModel';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import FormFood from './FormFood';
import FoodList from './FoodList';

import {
  createFood,
  getFoodRestaurant,
} from '@/repositories/restaurantRepository';

interface Props {
  token: string;
}
const TabsMenu = ({ token }: Props) => {
  const [data, setData] = useState<IDataFood[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formCreateFoodSchema>>({
    resolver: zodResolver(formCreateFoodSchema),
    defaultValues: {
      foodName: '',
      description: '',
      price: 0,
      category: '',
      image: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formCreateFoodSchema>) {
    const response = await createFood({
      token,
      ...values,
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
      description: 'Berhasil mempublish makanan',
      duration: 3000,
    });

    setData((prev) => [...prev, response.data.foods]);
    form.reset();
    setIsOpen(false);
  }

  const fetchData = async () => {
    const results = await getFoodRestaurant(token);
    setData(results.data.foods);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          <FormFood type="Add food" onSubmit={onSubmit} form={form} />
        </DialogContent>
      </Dialog>
      <FoodList
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={onSubmit}
        data={data}
      />
    </>
  );
};

export default TabsMenu;
