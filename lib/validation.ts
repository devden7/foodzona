import { z } from 'zod';

export const formLoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
});

export const formRegisterSchema = z
  .object({
    username: z.string().min(1),
    name: z.string().min(1),
    password: z.string().min(6),
  })
  .refine((value) => !value.username.includes(' '), {
    message: 'Jangan menggunakan spasi',
    path: ['username'],
  });

export const formCreateStoreSchema = z.object({
  restaurantName: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
});

const imageFormat = ['image/jpeg', 'image/jpg', 'image/png'];
export const formCreateFoodSchema = z.object({
  foodName: z.string().min(1).max(150),
  description: z.string().min(1).max(250),
  price: z.coerce.number().gte(1000).lte(1000000),
  category: z.string().min(1).max(150),
  image: z
    .any()
    .optional()
    .refine((file) => {
      console.log(file);
      return file.length === 0 || imageFormat.includes(file[0]?.type);
    }, 'Only .jpg, .jpeg, and .png  formats are supported.'),
});
