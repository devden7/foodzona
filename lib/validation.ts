import { z } from 'zod';

export const formNoPhoneSchema = z.object({
  noPhone: z
    .string()
    .min(8, { message: 'Nomor HP tidak valid karena seharusnya 8-17 angka.' })
    .max(17, { message: 'Nomor HP tidak valid karena seharusnya 8-17 angka.' }),
});

export const formCreateStoreSchema = z.object({
  storeName: z.string().min(3),
});

export const formCreateFoodSchema = z.object({
  foodName: z.string().min(1).max(150),
  description: z.string().min(1).max(250),
  price: z.number(),
  category: z.string().min(1).max(150),
});
