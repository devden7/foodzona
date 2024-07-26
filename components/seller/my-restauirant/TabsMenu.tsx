'use client';

import { useEffect, useState } from 'react';

import { IDataFood } from '@/model/foodModel';

import FormFood from './FormFood';
import FoodList from './FoodList';
import { getFoodRestaurant } from '@/repositories/restaurantRepository';
import ResponsiveDialog from './ResponsiveDialog';

interface Props {
  token: string;
}
const TabsMenu = ({ token }: Props) => {
  const [data, setData] = useState<IDataFood[]>([]);
  const [idFood, setIdFood] = useState<number | null>(null);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const fetchData = async () => {
    const results = await getFoodRestaurant(token);
    setData(results.data.foods);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const createNewFood = (data: IDataFood) => {
    setData((prev) => [...prev, data]);
    setIsOpenAdd(false);
  };

  const editBtnHandler = (id: number | null) => {
    if (id === null) {
      return;
    }
    setIdFood(id);
  };
  return (
    <>
      <ResponsiveDialog type="Add" isOpen={isOpenAdd} setIsOpen={setIsOpenAdd}>
        <FormFood type="Add" token={token} createNewFood={createNewFood} />
      </ResponsiveDialog>

      <div className="mb-10 flex flex-wrap items-center gap-4 md:justify-between">
        {data?.length === 0 && <p>No Food</p>}

        {data?.map((item: IDataFood) => (
          <FoodList
            key={item.foodId}
            isOpenEdit={isOpenEdit}
            token={token}
            item={item}
            idFood={idFood}
            setIsOpenEdit={setIsOpenEdit}
            createNewFood={createNewFood}
            editBtnHandler={editBtnHandler}
          />
        ))}
      </div>
    </>
  );
};

export default TabsMenu;
