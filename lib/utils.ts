import { dataReview } from '@/model/orderModel';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertIsoToDate = (iso: string): string => {
  const date = new Date(iso);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('id-ID', options);
  return formattedDate;
};

export const calcRating = (arr: dataReview[] | undefined): number => {
  if (arr === undefined || arr.length === 0) return 0;

  const calc = arr.reduce(
    (acc: number, item: dataReview) => acc + item.rating,
    0
  );
  return calc / arr.length;
};
