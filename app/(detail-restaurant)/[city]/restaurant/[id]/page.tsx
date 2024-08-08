'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SearchLocation from '@/components/homePage/SearchLocation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { HiStar } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import { IDataFood, IResponseGetFoods } from '@/model/foodModel';
import { getFoodListsDetail } from '@/repositories/foodRepository';
import { useParams } from 'next/navigation';
import { addItem, resetCart } from '@/store/Cart/CartSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/use-redux-hook';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { calcRating } from '@/lib/utils';

const DetailRestaurant = () => {
  const [data, setData] = useState<IResponseGetFoods>();
  const [searchLocation, setSearchLocation] = useState('');
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.items);
  const [isNotValidCart, setIsNotValidCart] = useState(false);
  const [isNotValidCartRecommendation, setIsNotValidCartRecommendation] =
    useState(false);
  const [isRestaurant, setIsRestaurant] = useState(false);
  const [idFood, setIdFood] = useState<number | undefined>(undefined);
  const params = useParams();
  const dispatch = useAppDispatch();
  const { location, user } = useAuth();
  const API_URL = process.env.NEXT_PUBLIC_API;
  const getFoodListDetail = async () => {
    const response = await getFoodListsDetail(params.id as string);
    setData(response.data);
  };

  useEffect(() => {
    getFoodListDetail();
  }, []);

  const handlerSearchLocationDrawer = (value: any) => {
    setSearchLocation(value.city);
  };

  const sizeScreenHandler = () => {
    setMediumScreen(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sizeScreenHandler();
    }

    window.addEventListener('resize', sizeScreenHandler);

    return () => {
      window.removeEventListener('resize', sizeScreenHandler);
    };
  }, []);

  if (typeof mediumScreen === 'undefined') {
    return null;
  }

  const cartBtnHandler = (item: IDataFood) => {
    setIdFood(item.foodId);
    if (
      cartItems.length !== 0 &&
      item.restaurantName !== cartItems[0].restaurantName
    ) {
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

  const isRecommendationFood = data?.foods.filter(
    (item) => item.isRecommendation === true
  );

  return (
    <>
      <div className="container">
        <SearchLocation
          mediumScreen={mediumScreen}
          searchLocation={searchLocation}
          isOpen={isOpen}
          handlerSearchLocationDrawer={handlerSearchLocationDrawer}
          setSearchLocation={setSearchLocation}
          setIsOpen={setIsOpen}
          type="Detail Restaurant"
        />

        {mediumScreen >= 1024 && (
          <Breadcrumb className="my-5">
            <BreadcrumbList className="text-black">
              <BreadcrumbItem>
                <BreadcrumbLink className="hover:text-green-700" href="/">
                  Beranda
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="hover:text-green-700"
                  href="/components"
                >
                  Kotamu
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="hover:text-green-700 ">
                  Restoranmu
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>

      <section className="mb-8 mt-16 lg:mt-3 2xl:mt-1">
        <div className={`${mediumScreen >= 1024 ? 'container' : ''}`}>
          <div className="flex gap-3 p-2 md:p-5 lg:p-0">
            <div className="relative size-16 overflow-hidden rounded-xl bg-green-500 md:size-24">
              <Image
                src={`${isRecommendationFood !== undefined && isRecommendationFood.length > 0 && isRecommendationFood[0].image !== null ? API_URL + 'images/' + isRecommendationFood[0].image : '/assets/no-image.jpeg'}`}
                alt="Banner Restaurant"
                fill
                objectFit="cover"
                className="absolute size-full"
              />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold md:mb-5 md:text-2xl">
                {data?.restaurantName}
              </h3>
              <div className="flex items-center gap-2 md:gap-5">
                <span className="flex items-center justify-center rounded-full bg-orange-700 px-3 py-1 text-sm font-medium text-white lg:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="mr-2.5 size-4"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.586 10c.269 0 .46.217.385.433a15.129 15.129 0 0 0-.25 9.31l.123.395.142.436c.061.191-.084.38-.302.418L5.599 21h-2.03c-.29 0-.547-.145-.66-.362l-.036-.085-.136-.415a15.134 15.134 0 0 1 .127-9.705c.08-.228.312-.393.587-.427L3.556 10h2.03Zm8.163-7.836a.419.419 0 0 1 .546-.105l.074.054.145.13c.55.495.828 1.302.736 2.108l-.27 1.853c-.155 1.112-.318 2.398-.267 2.554l.014.016h6.326c.488 0 .89.441.941 1.006l.006.123v2.751c0 .431-1.36 4.611-2.111 6.887-.272.823-.962 1.386-1.758 1.453l-.16.006H8.61c-.487 0-.914-.354-1.042-.863a18.737 18.737 0 0 1-.022-9.07l.123-.469.055-.2c.027-.098.065-.19.114-.277l.08-.124 5.83-7.833Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="currentColor" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  Super Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 mt-16">
        <div className="container">
          <div className="flex size-24 flex-col items-center justify-center bg-gray-100/50 md:size-28 md:gap-3">
            <div className="flex items-center gap-2">
              <span>
                <HiStar color="orange" size={20} className="md:size-8" />
              </span>
              <p className="font-medium md:text-xl">
                {calcRating(data?.reviews)}
              </p>
            </div>
            <Link
              href={`/${location}/restaurant/${params.id}/reviews`}
              className="font-semibold text-green-700 md:text-lg"
            >
              See review
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8 mt-16">
        <div className="container">
          {isRecommendationFood !== undefined &&
            isRecommendationFood.length > 0 && (
              <div className="mb-5">
                <h2 className="mb-4 text-lg font-semibold">Rekomendasi</h2>
                <div>
                  <div className="bd:border-slate-100 flex max-w-52 flex-col gap-2 sm:max-w-80 sm:p-2 md:rounded-2xl md:border ">
                    {isNotValidCart && (
                      <Dialog open={isNotValidCartRecommendation} modal={true}>
                        <DialogContent
                          className="flex flex-col items-start px-8"
                          hideCloseButton={true}
                        >
                          {!isRestaurant && (
                            <DialogTitle>
                              Mau beli ganti resto ini aja?
                            </DialogTitle>
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
                          <div className="w-52 bg-red-500">
                            {!isRestaurant && (
                              <Button
                                onClick={() =>
                                  yesBtnCartHandler(isRecommendationFood[0])
                                }
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
                                className=" rounded-full bg-green-700 p-2 text-base md:mb-4 md:p-5 lg:text-lg"
                              >
                                Oke
                              </Button>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    <div className="relative h-48 w-full overflow-hidden rounded-xl bg-green-500 md:h-40 lg:h-56">
                      <Image
                        src={`${isRecommendationFood[0].image !== null ? API_URL + 'images/' + isRecommendationFood[0].image : '/assets/no-image.jpeg'}`}
                        alt="makanan"
                        fill
                        objectFit="cover"
                        quality={100}
                      />
                      <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-1 rounded-full bg-red-500 px-5 py-1 text-sm font-medium text-black">
                        <span className="text-xs text-white">Best</span>
                      </div>
                    </div>
                    <p className="font-semibold lg:text-lg">
                      {isRecommendationFood[0].name}
                    </p>
                    <p className="font-semibold lg:text-lg">
                      {isRecommendationFood[0].price}
                    </p>
                    <Button
                      className="rounded-full border border-green-700 bg-white text-green-700 hover:bg-green-200 xl:mt-4"
                      onClick={() => cartBtnHandler(isRecommendationFood[0])}
                    >
                      Add
                    </Button>
                  </div>
                </div>
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
                      {isNotValidCart && idFood === item.foodId && (
                        <Dialog open={isNotValidCart} modal={true}>
                          <DialogContent
                            className="flex flex-col items-start px-8"
                            hideCloseButton={true}
                          >
                            {!isRestaurant && (
                              <DialogTitle>
                                Mau beli ganti resto ini aja?
                              </DialogTitle>
                            )}
                            {isRestaurant && <DialogTitle>Gagal</DialogTitle>}
                            {!isRestaurant && (
                              <p>
                                Boleh, kok. Tapi, menu yang kamu pilih dari
                                resto sebelumnya kami hapus, ya.
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
                      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-green-500 md:h-40 lg:h-56">
                        <Image
                          src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                          alt="makanan"
                          fill
                          objectFit="cover"
                          quality={100}
                        />
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
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DetailRestaurant;
