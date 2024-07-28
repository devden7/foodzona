'use client';

import HeroBanner from '@/components/shared/HeroBanner';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { restaurantLists } from '@/constants';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { HiStar } from 'react-icons/hi';

const Restaurants = () => {
  const categoryRestourant = restaurantLists.map((item: any) =>
    item.category.map((category: any) => category.categories).join(', ')
  );
  // const validParamsId = ['near_me','best_seller','most_loved'];
  const params = useParams();
  return (
    <>
      <section>
        {params.id === 'near_me' && (
          <div>
            <HeroBanner
              src="/assets/terdekat-illustrasi.png"
              alt="near_me"
              width="1903"
              height="480"
            />
          </div>
        )}

        {params.id === 'best_seller' && (
          <div>
            <HeroBanner
              src="/assets/best-seller-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}

        {params.id === 'most_loved' && (
          <div>
            <HeroBanner
              src="/assets/most-loved-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}

        {params.id === 'martabak' && (
          <div>
            <HeroBanner
              src="/assets/martabak-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'soto_bakso_sop' && (
          <div>
            <HeroBanner
              src="/assets/soto-bakso-llustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'roti' && (
          <div>
            <HeroBanner
              src="/assets/roti-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'chinese' && (
          <div>
            <HeroBanner
              src="/assets/chinese-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'burger_sandwich_steak' && (
          <div>
            <HeroBanner
              src="/assets/steak-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'fastfood' && (
          <div>
            <HeroBanner
              src="/assets/fastfood-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'japanese' && (
          <div>
            <HeroBanner
              src="/assets/japanese-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'snacks_jajanan' && (
          <div>
            <HeroBanner
              src="/assets/jajanan-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'sate' && (
          <div>
            <HeroBanner
              src="/assets/sate-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'pizza_pasta' && (
          <div>
            <HeroBanner
              src="/assets/pizza-pasta-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'bakmie' && (
          <div>
            <HeroBanner
              src="/assets/bakmie-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'minuman' && (
          <div>
            <HeroBanner
              src="/assets/minuman-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'korean' && (
          <div>
            <HeroBanner
              src="/assets/korean-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'seafood' && (
          <div>
            <HeroBanner
              src="/assets/seafood-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'coffee_shop' && (
          <div>
            <HeroBanner
              src="/assets/coffe-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'indian_food' && (
          <div>
            <HeroBanner
              src="/assets/indian-food-illustration.png"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
        {params.id === 'middle_eastern' && (
          <div>
            <HeroBanner
              src="/assets/middle-east-illustration.jpg"
              alt="best_seller"
              width="1903"
              height="480"
            />
          </div>
        )}
      </section>

      <section>
        <div className="container ">
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
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 2xl:justify-between">
            {restaurantLists.map((item, index) => (
              <div
                key={item.id}
                className="flex w-full gap-3 border-b-2 border-slate-100 p-3 last:border-b-0 md:w-2/5 md:rounded-2xl md:border-2 md:border-slate-100 hover:md:bg-white hover:md:shadow-md lg:h-[395px] lg:w-[22%] lg:flex-col lg:items-center lg:rounded-2xl lg:border-2 lg:p-2"
              >
                <div className="relative h-40 w-48 overflow-hidden rounded-xl bg-purple-500 md:w-56 lg:h-[600px] lg:w-full">
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fill
                    objectFit="cover"
                    quality={100}
                  />
                  <div className="absolute left-1/2 top-[85%] z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-medium text-black lg:left-[80%] lg:top-[90%]">
                    <HiStar color="orange" size={20} />
                    <p>{item.rating.toFixed(1)}</p>
                  </div>
                </div>
                <div className="size-full">
                  <h3 className="mb-3 line-clamp-2 font-semibold">
                    {item.label}
                  </h3>
                  <div className="flex max-h-96 flex-wrap gap-2">
                    <p className="line-clamp-2 text-xs text-black/70 lg:line-clamp-1 lg:text-sm">
                      {categoryRestourant[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
