'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { valueList } from '@/constants';
import RecommendationMenuSection from '@/components/shared/RecommendationMenuSection';
import CategoriesMenuSection from '@/components/shared/CategoriesMenuSection';
import { IResponseGetFoods } from '@/model/foodModel';
import FoodListCity from '@/components/homePage/FoodListCitySection';
import { HeroSection } from '@/components/homePage/HeroSection';
import { useAppSelector } from '@/hooks/use-redux-hook';
import { useSession } from 'next-auth/react';
import { getFoodLists } from '@/repositories/FoodsRepository';
import { IResCityList } from '@/model/restaurantModel';
import { getCityLists } from '@/repositories/restaurantRepository';
import Link from 'next/link';
import Loading from './loading';

export default function Home() {
  const [data, setData] = useState<IResponseGetFoods>();
  const [dataCity, setDataCity] = useState<IResCityList[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const location = useAppSelector((state) => state.location.city);

  const getFoodList = async () => {
    const request = {
      city: location,
      category: 'near_me',
      limit: 8,
    };
    const response = await getFoodLists(request);
    return response.data;
  };

  const getCityList = async () => {
    const response = await getCityLists();
    return response;
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([getFoodList(), getCityList()]).then(
      ([foodValues, cityValues]) => {
        setData(foodValues);
        setDataCity(cityValues);
        setIsLoading(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <HeroSection location={location} dataCity={dataCity} />

      <section className="relative mb-[75px]">
        <div className="container pt-12 2xl:w-[1300px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Belom ada ide? Mulai dari sini aja dulu
          </h2>
          <div className="mt-7">
            <RecommendationMenuSection location={location} type="homepage" />
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container 2xl:w-[1300px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Aneka kuliner menarik
          </h2>
          <div className="mb-12 mt-7">
            <CategoriesMenuSection type="homepage" location={location} />
          </div>
        </div>
      </section>
      <FoodListCity data={data} session={session} location={location} />
      <section className="mb-[75px]">
        <div className="container 2xl:w-[1300px]">
          <h2 className="pt-14 text-[21px] font-semibold md:text-center md:text-3xl lg:pt-28">
            Kenapa pesan di GoFood?
          </h2>
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
              {valueList.map((item) => (
                <div
                  key={item.id}
                  className={`flex h-40 items-center gap-4 rounded-2xl p-2 lg:h-96 lg:flex-col`}
                  style={{
                    background: `${item.backgroundColor}`,
                  }}
                >
                  <div className="relative aspect-square size-full overflow-hidden rounded-xl md:max-h-[130px] lg:max-h-[150px] xl:max-h-[200px] 2xl:max-h-[180px]">
                    <Image
                      className="object-contain"
                      src={item.imageUrl}
                      alt={item.description}
                      fill
                      sizes="50vw"
                      quality={100}
                    />
                  </div>
                  <div className="w-full">
                    <p className="mt-2 px-3 font-semibold text-white md:text-2xl xl:max-w-[200px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative mb-[75px]">
        <div className="container pt-8 lg:pt-0 2xl:w-[1300px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Kota-kota yang ada GoFood
          </h2>
          <div className="mt-7">
            <div className="mb-10 grid grid-cols-2 justify-end gap-y-4 md:grid-cols-4 md:gap-y-5 lg:grid-cols-6 lg:gap-y-6">
              {dataCity.map((item: IResCityList) => (
                <div
                  key={item.city_name}
                  className="scale-105 transition-transform sm:scale-110"
                >
                  <Link
                    href={location + '/restaurants'}
                    className="line-clamp-1 max-w-28 rounded-full border-2 border-slate-100 bg-transparent p-2 text-center text-sm font-bold capitalize text-green-700 hover:bg-slate-100"
                  >
                    {item.city_name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
