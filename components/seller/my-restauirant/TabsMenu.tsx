'use client';

import React, { useState } from 'react';

import { IDataFood } from '@/model/foodModel';

import FormFood from './FormFood';
import FoodList from './FoodList';
import { deleteFoodRestaurant } from '@/repositories/restaurantRepository';
import ResponsiveDialog from '../../shared/ResponsiveDialog';
import { toast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

interface Props {
  token: string;
  dataMenu: IDataFood[];
}
const TabsMenu = ({ token, dataMenu }: Props) => {
  const [idFood, setIdFood] = useState<number | null>(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const createNewFood = () => {
    setIsOpenAdd(false);
  };

  const updatedNewFood = () => {
    setIsOpenEdit(false);
  };

  const deleteFoodHandler = async (foodId: number) => {
    const response = await deleteFoodRestaurant(foodId, token);
    if (response.errors) {
      return toast({
        variant: 'destructive',
        title: response.errors,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    }
    toast({
      description: 'Berhasil menghapus makanan',
      duration: 3000,
    });
  };

  const editBtnHandler = (id: number | null) => {
    if (id === null) {
      return;
    }
    setIdFood(id);
  };
  return (
    <>
      <ResponsiveDialog
        closeBtn={true}
        type="Add"
        isOpen={isOpenAdd}
        setIsOpen={setIsOpenAdd}
      >
        <FormFood type="Add" token={token} createNewFood={createNewFood} />
      </ResponsiveDialog>

      <div className="mb-10 flex flex-wrap items-center justify-start gap-4">
        {dataMenu.length === 0 && (
          <div className="flex h-52 w-full items-center justify-center font-medium lg:text-xl">
            <p>Tidak ada makanan tersedia dikotamu</p>
          </div>
        )}

        {dataMenu.map((item: IDataFood) => (
          <FoodList
            key={item.foodId}
            isOpenEdit={isOpenEdit}
            token={token}
            item={item}
            idFood={idFood}
            setIsOpenEdit={setIsOpenEdit}
            updatedNewFood={updatedNewFood}
            editBtnHandler={editBtnHandler}
            deleteFoodHandler={deleteFoodHandler}
          />
        ))}
      </div>
    </>
  );
};

export default TabsMenu;
