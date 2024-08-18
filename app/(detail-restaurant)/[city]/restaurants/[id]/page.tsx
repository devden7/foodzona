import HeroSection from '@/components/detail-restaurant/restaurants/id/HeroSection';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import { getFoodLists } from '@/repositories/FoodsRepository';
import { auth } from '@/auth';

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_API;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

interface PropsParams {
  params: {
    city: string;
    id: string;
  };
}
const Restaurants = async ({ params }: PropsParams) => {
  const request = {
    city: params.city,
    category: params.id,
  };

  const data = await getFoodLists(request);
  const session = await auth();
  const filterData = data?.data.foods.filter(
    (item) => item.restaurantName !== session?.user.restaurant
  );

  return (
    <>
      <HeroSection paramsId={params.id} />
      <div className="container mb-10 2xl:w-[1300px]">
        <BreadCrumbSection />
      </div>
      <section>
        <div className="container 2xl:w-[1300px]">
          <h2 className="mb-3 text-xl font-semibold md:mb-5 md:text-3xl">
            {params.id === 'near_me'
              ? 'Terdekat'
              : params.id === 'best_seller'
                ? 'Terlaris'
                : params.id === 'most_loved'
                  ? 'Terfavorit'
                  : ''}
          </h2>
          <div className="mb-10 flex flex-wrap items-center justify-start gap-4">
            {filterData?.length === 0 && (
              <p className="w-full text-center font-medium">
                Belum ada restaurant yang tersedia di kotamu
              </p>
            )}
            {filterData?.map((item) => (
              <Link
                href={`/${params.city}/restaurant/${item.restaurantName.toLowerCase().replace(/ /g, '-')}`}
                key={item.foodId}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-slate-100 md:last:border-2 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
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
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%] xl:left-[85%]">
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
