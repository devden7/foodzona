'use client';

import React, { useState } from 'react';

import { IDataFood } from '@/model/foodModel';

import FormFood from './FormFood';
import FoodList from './FoodList';
import { deleteFoodRestaurant } from '@/repositories/restaurantRepository';
import ResponsiveDialog from '../../shared/ResponsiveDialog';
import { toast } from '@/components/ui/use-toast';

interface Props {
  token: string;
  dataMenu: IDataFood[];
}
const TabsMenu = ({ token, dataMenu }: Props) => {
  const [idFood, setIdFood] = useState<number | null>(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const createNewFood = (data: IDataFood) => {
    setIsOpenAdd(false);
  };

  const updatedNewFood = (items: IDataFood) => {
    setIsOpenEdit(false);
  };

  const deleteFoodHandler = async (foodId: number) => {
    await deleteFoodRestaurant(foodId, token);

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
        {dataMenu.length === 0 && <p>No Food</p>}

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
