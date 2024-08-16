import Image from 'next/image';

import { HiStar } from 'react-icons/hi';
import { Button } from '@/components/ui/button';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import { getFoodLists } from '@/repositories/FoodsRepository';
import Link from 'next/link';
import { auth } from '@/auth';

const API_URL = process.env.NEXT_PUBLIC_API;

const Recommendations = async ({ params }: { params: { city: string } }) => {
  const session = await auth();
  const dataTerdekatList = await getFoodLists({
    city: params.city,
    category: 'near_me',
    limit: 4,
  });

  const dataTerlarisList = await getFoodLists({
    city: params.city,
    category: 'best_seller',
    limit: 4,
  });

  const dataTerfavoritList = await getFoodLists({
    city: params.city,
    category: 'most_loved',
    limit: 4,
  });
  const filterDataTerdekat = dataTerdekatList.data.foods.filter(
    (item) => item.restaurantName !== session?.user.restaurant
  );
  const filterDataTerlaris = dataTerlarisList.data.foods.filter(
    (item) => item.restaurantName !== session?.user.restaurant
  );
  const filterDataTerfavorit = dataTerfavoritList.data.foods.filter(
    (item) => item.restaurantName !== session?.user.restaurant
  );
  return (
    <>
      <section className="mb-8 mt-16 lg:mt-3 2xl:mt-1">
        <div className="m-3 flex lg:m-0 lg:px-2 lg:py-1">
          <div
            className="relative h-[330px] w-[450px] grow overflow-hidden rounded-lg sm:w-[600px] md:h-[370px] md:w-[730px]"
            style={{
              zIndex: -1,
            }}
          >
            <Image
              className="object-cover"
              src="/assets/recommendations-desktop-illustration.jpg"
              alt="image hero"
              fill
              quality={100}
              priority={true}
            />

            <div className="absolute top-[35%] overflow-visible pl-10 md:pl-16 lg:pl-7 2xl:pl-80">
              <div className="flex flex-col">
                <h1 className="mb-5 text-[27px] font-semibold md:mb-1 md:text-3xl lg:mb-3 lg:w-full lg:text-4xl">
                  Rekomendasi di kotamu
                </h1>
                <p className="mb-3 w-[300px] text-sm md:text-base lg:w-[400px] lg:text-base">
                  Eksplor kumpulan rekomendasi yang kami buat untuk berbagai
                  kebutuhanmu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-10 2xl:w-[1300px]">
        <BreadCrumbSection pageName="recommendation" />
      </div>
      <section className="mb-10 sm:mb-2">
        <div className="container 2xl:w-[1300px]">
          <div className="mb-10 flex items-center gap-2 ">
            <div className="w-10 md:w-16 ">
              <Image
                src="/assets/categories_terdekat.png"
                alt="terdekat"
                width={559}
                height={559}
                className="w-full"
              />
            </div>
            <h2 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
              Terdekat
            </h2>
          </div>
          {filterDataTerdekat.length === 0 && (
            <div className="flex h-52 w-auto items-center justify-center font-medium lg:text-xl">
              <p>Tidak ada makanan tersedia dikotamu</p>
            </div>
          )}
          <div className="mb-10 flex flex-wrap gap-4 ">
            {filterDataTerdekat.map((item) => (
              <div
                key={item.foodId}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    className="object-cover"
                    src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                    alt={item.name}
                    fill
                    sizes="50vw"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating === null ? 0 : item.rating}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.name}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {item.category[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filterDataTerdekat.length !== 0 && (
            <div className="flex justify-center">
              <Button className=" w-full rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 sm:mb-10 md:w-1/4 lg:w-1/5  xl:w-1/5">
                <Link
                  href={`/${params.city.toLocaleLowerCase()}/restaurants/near_me`}
                  className="size-full"
                >
                  Tampilkan semua resto
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      <section className="mb-10">
        <div className="container 2xl:w-[1300px]">
          <div className="mb-10 flex items-center gap-2">
            <div className="w-10  md:w-16">
              <Image
                src="/assets/categories_terlaris.png"
                alt="terdekat"
                width={559}
                height={559}
                className="w-full"
              />
            </div>
            <h2 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
              Terlaris
            </h2>
          </div>
          {filterDataTerlaris.length === 0 && (
            <div className="flex h-52 w-auto items-center justify-center font-medium  lg:text-xl">
              <p>Tidak ada makanan tersedia dikotamu</p>
            </div>
          )}
          <div className="mb-10 flex flex-wrap gap-4">
            {filterDataTerlaris.map((item) => (
              <div
                key={item.foodId}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    className="object-cover"
                    src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                    alt={item.name}
                    fill
                    sizes="50vw"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating === null ? 0 : item.rating}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.name}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {item.category[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filterDataTerlaris.length !== 0 && (
            <div className="flex justify-center">
              <Button className=" w-full rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 sm:mb-10 md:w-1/4 lg:w-1/5  xl:w-1/5">
                <Link
                  href={`/${params.city.toLocaleLowerCase()}/restaurants/best_seller`}
                  className="size-full"
                >
                  Tampilkan semua resto
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="mb-10">
        <div className="container 2xl:w-[1300px]">
          <div className="mb-10 flex items-center gap-2">
            <div className="w-10  md:w-16">
              <Image
                src="/assets/categories_terfavorit.png"
                alt="terdekat"
                width={559}
                height={559}
                className="w-full"
              />
            </div>
            <h2 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
              Terfavorit
            </h2>
          </div>

          {filterDataTerfavorit.length === 0 && (
            <div className="flex h-52 w-auto items-center justify-center font-medium lg:text-xl">
              <p>Tidak ada makanan tersedia dikotamu</p>
            </div>
          )}
          <div className="mb-10 flex flex-wrap gap-4">
            {filterDataTerfavorit.map((item) => (
              <div
                key={item.foodId}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    className="object-cover"
                    src={`${item.image !== null ? API_URL + 'images/' + item.image : '/assets/no-image.jpeg'}`}
                    alt={item.name}
                    fill
                    sizes="50vw"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating === null ? 0 : item.rating}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.name}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {item.category[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filterDataTerfavorit.length !== 0 && (
            <div className="flex justify-center">
              <Button className=" w-full rounded-full bg-green-50 text-base font-bold text-green-700 hover:bg-green-100 sm:mb-10 md:w-1/4 lg:w-1/5  xl:w-1/5">
                <Link
                  href={`/${params.city.toLocaleLowerCase()}/restaurants/most_loved`}
                  className="size-full"
                >
                  Tampilkan semua resto
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Recommendations;
