'use client';

import { useState } from 'react';
import { IDataFood, IResponseGetFoods } from '@/model/foodModel';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import { useAuth } from '@/context/AuthContext';
import { addItem, resetCart } from '@/store/Cart/CartSlice';
import ListDetailFood from './ListDetailFood';
import ItemRecommendationFood from './ItemRecommendationFood';

interface Props {
  data: IResponseGetFoods | undefined;
  isRecommendationFood: IDataFood[] | undefined;
}
const ListFoodSection = ({ data }: Props) => {
  const [idFood, setIdFood] = useState<number | undefined>();
  const [isNotValidCart, setIsNotValidCart] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const { user } = useAuth();
  const cartItems = useAppSelector((state) => state.items);
  const dispatch = useAppDispatch();
  const isRecommendationFood = data?.foods.filter(
    (item) => item.isRecommendation === true
  );

  const cartBtnHandler = (item: IDataFood) => {
    console.log(item);
    setIdFood(item.foodId);
    if (
      cartItems.length !== 0 &&
      item.restaurantName !== cartItems[0].restaurantName
    ) {
      console.log('NOT SAME');
      setIsNotValidCart(true);
      return;
    }

    if (item.restaurantName === user.restaurant) {
      setIsNotValidCart(true);
      setIsRestaurant(true);
      return;
    }
    const request = {
      foodId: item.foodId,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      restaurantName: item.restaurantName,
    };
    dispatch(addItem(request));
  };

  const yesBtnCartHandler = (item: IDataFood) => {
    dispatch(resetCart());

    const request = {
      foodId: item.foodId,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      restaurantName: item.restaurantName,
    };
    dispatch(addItem(request));
    setIsNotValidCart(false);
  };

  const noBtnCartHandler = () => {
    setIsNotValidCart(false);
  };
  return (
    <section className="mb-8 mt-16">
      <div className="container">
        {isRecommendationFood !== undefined &&
          isRecommendationFood.length > 0 && (
            <div className="mb-5">
              <h2 className="mb-4 text-lg font-semibold">Rekomendasi</h2>
              <ItemRecommendationFood
                item={isRecommendationFood[0]}
                cartBtnHandler={cartBtnHandler}
              />
            </div>
          )}
        {data?.foods !== undefined && data?.foods.length > 1 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold">Makanan Tersedia</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {data?.foods
                .filter((item) => item.isRecommendation !== true)
                .map((item) => (
                  <div
                    className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border "
                    key={item.foodId}
                  >
                    <ListDetailFood
                      item={item}
                      idFood={idFood}
                      isNotValidCart={isNotValidCart}
                      isRestaurant={isRestaurant}
                      cartBtnHandler={cartBtnHandler}
                      yesBtnCartHandler={yesBtnCartHandler}
                      noBtnCartHandler={noBtnCartHandler}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListFoodSection;
