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
  storeName: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
});

export const formCreateFoodSchema = z.object({
  foodName: z.string().min(1).max(150),
  description: z.string().min(1).max(250),
  price: z.number(),
  category: z.string().min(1).max(150),
});
