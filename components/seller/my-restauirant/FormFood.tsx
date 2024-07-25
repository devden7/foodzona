import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  onSubmit?: (value: any) => void;
  type: string;
  form?: any;
}
const FormFood = ({ onSubmit, type, form }: Props) => {
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
