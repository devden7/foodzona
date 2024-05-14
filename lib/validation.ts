import { z } from 'zod';

export const formNoPhoneSchema = z.object({
  noPhone: z
    .string()
    .min(8, { message: 'Nomor HP tidak valid karena seharusnya 8-17 angka.' })
    .max(17, { message: 'Nomor HP tidak valid karena seharusnya 8-17 angka.' }),
});
