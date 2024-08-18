import { Button } from '@/components/ui/button';
import { IDataFood } from '@/model/foodModel';
import Image from 'next/image';
import process from 'process';
import React from 'react';

interface Props {
  item: IDataFood;
  cartBtnHandler: (value: IDataFood) => void;
}
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_API;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

const ItemRecommendationFood = ({ item, cartBtnHandler }: Props) => {
  return (
    <div>
      <div className="bd:border-slate-100 flex max-w-52 flex-col gap-2 sm:max-w-80 sm:p-2 md:rounded-2xl md:border ">
        <div className="relative h-48 w-full overflow-hidden rounded-xl md:h-40 lg:h-56">
          <Image
            className="object-cover"
            src={
              item.public_id_img !== null &&
              item.version_img !== null &&
              item.format_img !== null &&
              IMAGE_URL !== undefined &&
              CLOUDINARY_NAME !== undefined
                ? IMAGE_URL +
                  CLOUDINARY_NAME +
                  '/v' +
                  item.version_img +
                  '/' +
                  item.public_id_img +
                  '.' +
                  item.format_img
                : '/assets/no-image.jpeg'
            }
            alt="makanan"
            fill
            sizes="50vw"
            quality={90}
          />
          <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-1 rounded-full bg-red-500 px-5 py-1 text-sm font-medium text-black">
            <span className="text-xs text-white">Best</span>
          </div>
        </div>
        <p className="font-semibold lg:text-lg">{item.name}</p>
        <p className="font-semibold lg:text-lg">{item.price}</p>
        <Button
          className="rounded-full border border-green-700 bg-white text-green-700 hover:bg-green-200 xl:mt-4"
          onClick={() => cartBtnHandler(item)}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default ItemRecommendationFood;
