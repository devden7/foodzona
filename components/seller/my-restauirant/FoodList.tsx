import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';

import { IDataFood } from '@/model/foodModel';
import { HiDotsVertical } from 'react-icons/hi';
import ResponsiveDialog from '../../shared/ResponsiveDialog';
import FormFood from './FormFood';
import { addRecommendationFood } from '@/repositories/restaurantRepository';
import { ToastAction } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { formatCurrency } from '@/lib/utils';

interface Props {
  isOpenEdit: boolean;
  token: string;
  item: IDataFood;
  idFood: number | null;

  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  updatedNewFood: () => void;
  editBtnHandler: (id: number | null) => void;
  deleteFoodHandler: (id: number) => void;
}

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_API;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
const FoodList = ({
  isOpenEdit,
  token,
  item,
  idFood,
  setIsOpenEdit,
  editBtnHandler,
  updatedNewFood,
  deleteFoodHandler,
}: Props) => {
  const recommendationBtnHandler = async (foodId: number) => {
    const response = await addRecommendationFood(foodId, token);
    if (response.errors) {
      return toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    }

    toast({
      description: 'Berhasil merekomendasikan makanan',
      duration: 3000,
    });
  };

  return (
    <div className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 md:last:border-b-2 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2">
      {item.foodId === idFood && (
        <ResponsiveDialog
          closeBtn={true}
          isOpen={isOpenEdit}
          setIsOpen={setIsOpenEdit}
        >
          <FormFood
            type="Edit"
            token={token}
            updatedNewFood={updatedNewFood}
            data={item}
          />
        </ResponsiveDialog>
      )}

      <div className="relative h-40 w-48 overflow-hidden rounded-xl md:w-56 lg:h-[600px] lg:w-full">
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
          alt={item.name}
          fill
          sizes="50vw"
          quality={90}
        />
        {item.isRecommendation && (
          <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-1 rounded-full bg-red-500 px-5 py-1 text-sm font-medium text-black">
            <span className="text-xs text-white">Best</span>
          </div>
        )}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="absolute left-[12%] top-[10%] z-50 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-1 rounded-lg bg-white p-1 text-sm font-medium text-black">
              <HiDotsVertical size={15} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="absolute -top-7 left-5  lg:left-4 xl:left-5">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                setIsOpenEdit(true);
                editBtnHandler(item.foodId);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => deleteFoodHandler(item.foodId)}
            >
              Delete
            </DropdownMenuItem>
            {!item.isRecommendation && (
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  recommendationBtnHandler(item.foodId);
                }}
              >
                Rekomendasikan Makanan
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="size-full">
        <h3 className="mb-3 line-clamp-2 font-semibold">{item.name}</h3>
        <div className="mb-3 flex max-h-96 flex-wrap gap-2">
          <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
            {item.description}
          </p>
        </div>
        <div>
          <p className="text-lg font-medium">
            {formatCurrency(Number(item.price))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
