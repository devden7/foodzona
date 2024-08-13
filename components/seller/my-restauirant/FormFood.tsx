import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { formCreateFoodSchema } from '@/lib/validation';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IDataFood } from '@/model/foodModel';
import {
  createFood,
  updateFoodRestaurant,
} from '@/repositories/restaurantRepository';
import { useRouter } from 'next/navigation';
import { ToastAction } from '@/components/ui/toast';

interface Props {
  type: string;
  token: string;
  data?: IDataFood;
  createNewFood?: () => void;
  updatedNewFood?: () => void;
}
const FormFood = ({
  type,
  token,
  data,
  createNewFood,
  updatedNewFood,
}: Props) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formCreateFoodSchema>>({
    resolver: zodResolver(formCreateFoodSchema),
    defaultValues: {
      foodName: data?.name || '',
      description: data?.description || '',
      price: Number(data?.price) || 0,
      category: data?.category[0] || '',
      image: data?.image || '',
    },
  });

  const addFoodHandler = async (values: {
    foodName: string;
    description: string;
    price: number;
    category: string;
    image?: any;
  }) => {
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

    if (createNewFood) {
      createNewFood();
    }
  };

  const editFoodHanlder = async (values: {
    foodName: string;
    description: string;
    price: number;
    category: string;
    image?: any;
  }) => {
    const response = await updateFoodRestaurant({
      token,
      foodId: data?.foodId,
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
    if (updatedNewFood) {
      updatedNewFood();
    }
  };

  async function onSubmit(values: z.infer<typeof formCreateFoodSchema>) {
    if (type !== 'Edit') {
      await addFoodHandler(values);
    } else {
      await editFoodHanlder(values);
    }

    toast({
      description:
        type !== 'Edit'
          ? 'Berhasil membuat makanan'
          : 'Berhasil mengubah makanan',
      duration: 3000,
    });

    form.reset();
    router.refresh();
  }

  const fileRef = form.register('image');

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

          {type !== 'Edit' && (
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
          )}

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
