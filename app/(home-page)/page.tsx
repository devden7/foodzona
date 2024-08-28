import Image from 'next/image';
import { valueList } from '@/constants';
import RecommendationMenuSection from '@/components/shared/RecommendationMenuSection';
import CategoriesMenuSection from '@/components/shared/CategoriesMenuSection';
import FoodListCity from '@/components/homePage/FoodListCitySection';
import { HeroSection } from '@/components/homePage/HeroSection';
import { IResCityList } from '@/model/restaurantModel';
import { getCityLists } from '@/repositories/restaurantRepository';
import CityListSection from '@/components/homePage/CityListSection';

export default async function Home() {
  const dataCity: IResCityList[] = await getCityLists();

  return (
    <>
      <HeroSection dataCity={dataCity} />

      <section className="relative mb-[75px]">
        <div className="container pt-12 2xl:w-[1300px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Belom ada ide? Mulai dari sini aja dulu
          </h2>
          <div className="mt-7">
            <RecommendationMenuSection type="homepage" />
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="container 2xl:w-[1300px]">
          <h2 className="text-[21px] font-semibold md:text-center md:text-3xl">
            Aneka kuliner menarik
          </h2>
          <div className="mb-12 mt-7">
            <CategoriesMenuSection type="homepage" />
          </div>
        </div>
      </section>

      <FoodListCity />

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

      <CityListSection dataCity={dataCity} />
    </>
  );
}
