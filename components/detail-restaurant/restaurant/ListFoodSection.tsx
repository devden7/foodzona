'use client';

import { useState } from 'react';
import { IDataFood, IResponseGetFoods } from '@/model/foodModel';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import { addItem, resetCart } from '@/store/Cart/CartSlice';
import ListDetailFood from './ListDetailFood';
import ItemRecommendationFood from './ItemRecommendationFood';
import { useSession } from 'next-auth/react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Props {
  dataItems: IResponseGetFoods | undefined;
  isRecommendationFood: IDataFood[] | undefined;
}
const ListFoodSection = ({ dataItems, isRecommendationFood }: Props) => {
  const [idFood, setIdFood] = useState<number | undefined>();
  const [isNotValidCart, setIsNotValidCart] = useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  const cartBtnHandler = (item: IDataFood) => {
    setIdFood(item.foodId);
    if (
      cartItems.length !== 0 &&
      item.restaurantName !== cartItems[0].restaurantName
    ) {
      setIsNotValidCart(true);
      return;
    }

    if (item.restaurantName === session?.user.restaurant) {
      setIsNotValidCart(true);
      setIsRestaurant(true);
      return;
    }

    const request = {
      foodId: item.foodId,
      name: item.name,
      description: item.description,
      price: item.price,
      public_id_img: item.public_id_img,
      version_img: item.version_img,
      format_img: item.format_img,
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
      public_id_img: item.public_id_img,
      version_img: item.version_img,
      format_img: item.format_img,
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
        {dataItems?.foods !== undefined && dataItems?.foods.length > 1 && (
          <div>
            <h2 className="mb-4 text-lg font-semibold">Makanan Tersedia</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {dataItems?.foods
                .filter((item) => item.isRecommendation !== true)
                .map((item) => (
                  <div
                    className="bd:border-slate-100 flex flex-col gap-2 sm:p-2 md:rounded-2xl md:border "
                    key={item.foodId}
                  >
                    {(isNotValidCart || item.foodId === idFood) && (
                      <Dialog open={isNotValidCart} modal={true}>
                        <DialogContent
                          className="flex flex-col items-start px-8"
                          hideCloseButton={true}
                        >
                          {!isRestaurant && (
                            <DialogTitle>Mau ganti resto ini aja?</DialogTitle>
                          )}
                          {isRestaurant && <DialogTitle>Gagal</DialogTitle>}
                          {!isRestaurant && (
                            <p>
                              Boleh, kok. Tapi, menu yang kamu pilih dari resto
                              sebelumnya kami hapus, ya.
                            </p>
                          )}

                          {isRestaurant && (
                            <p>
                              Hehe, kamu tidak bisa menambahkan product kamu
                              sendiri ke dalam cart
                            </p>
                          )}
                          <div>
                            {!isRestaurant && (
                              <Button
                                onClick={() => yesBtnCartHandler(item)}
                                className="mr-2 rounded-full border-2 border-green-700 bg-white p-2 text-base text-green-700 hover:bg-green-200 md:mb-4 md:p-5 lg:text-lg"
                              >
                                Iya, ganti
                              </Button>
                            )}
                            {!isRestaurant && (
                              <Button
                                onClick={() => noBtnCartHandler()}
                                className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                              >
                                Gak jadi
                              </Button>
                            )}
                            {isRestaurant && (
                              <Button
                                onClick={() => noBtnCartHandler()}
                                className="rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                              >
                                Oke
                              </Button>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    <ListDetailFood
                      item={item}
                      cartBtnHandler={cartBtnHandler}
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
