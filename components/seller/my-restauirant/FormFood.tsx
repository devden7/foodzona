import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { formCreateFoodSchema } from '@/lib/validation';
import { createFood } from '@/repositories/restaurantRepository';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

interface Props {
  type: string;
  setIsOpen: (value: boolean) => void;
}
const FormFood = ({ type, setIsOpen }: Props) => {
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

  const fileRef = form.register('image');

  async function onSubmit(values: z.infer<typeof formCreateFoodSchema>) {
    const response = await createFood(values);
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
    form.reset();
    setIsOpen(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                      ['E', 'e', '-', '.', ',', '+'].includes(e.key) &&
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
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="mb-3 space-y-0">
                <FormControl>
                  <Input type="file" {...fileRef} />
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
          Tambahkan makanan
        </Button>
      </form>
    </Form>
  );
};

export default FormFood;
