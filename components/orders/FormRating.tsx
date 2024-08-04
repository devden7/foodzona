import React from 'react';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { reviewFoodForm } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { HiStar } from 'react-icons/hi';
import { reviewFood } from '@/repositories/orderRepository';
interface Props {
  orderId: number;
  token: string;
}
const FormRating = ({ orderId, token }: Props) => {
  console.log(orderId);
  const form = useForm<z.infer<typeof reviewFoodForm>>({
    resolver: zodResolver(reviewFoodForm),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  });

  const rating = form.watch('rating');
  const handleStarClick = (index: number) => {
    form.setValue('rating', index + 1);
  };

  async function onSubmit(values: z.infer<typeof reviewFoodForm>) {
    console.log(values);
    const response = await reviewFood(values, orderId, token);
    console.log(response);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="mb-3">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <div className="mb-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold">Kasih rating, yuk</p>
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((index) => (
                      <span
                        key={index}
                        className={`cursor-pointer text-3xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        onClick={() => handleStarClick(index)}
                      >
                        {index < rating ? (
                          <HiStar color="orange" size={20} />
                        ) : (
                          <HiStar color="gray" size={20} />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                <FormMessage className="mt-0" />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="mb-3 space-y-0">
                <p className="font-semibold">
                  Apa yang kamu suka dari makannya
                </p>
                <FormControl>
                  <Input
                    placeholder="Enak banget makanannya"
                    type="text"
                    className="border-2 border-gray-200 bg-transparent p-2 text-black focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
          >
            beri rating
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormRating;
