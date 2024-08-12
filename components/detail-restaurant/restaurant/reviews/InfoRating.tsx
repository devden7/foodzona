'use client';
import { calcRating } from '@/lib/utils';
import { dataReview } from '@/model/orderModel';
import Link from 'next/link';
import { HiArrowSmLeft, HiStar } from 'react-icons/hi';

interface Props {
  reviewsList: dataReview[] | undefined;
  params: { city: string; id: string };
}

const InfoRating = ({ reviewsList, params }: Props) => {
  const reviewNewest = reviewsList?.slice(-5);
  return (
    <section className="mb-8 mt-20 lg:mt-10">
      <div className="sm:container">
        <div className="mb-9 flex items-center gap-3 px-3 lg:px-0">
          <Link
            href={`/${params.city?.toLocaleLowerCase()}/restaurant/${params.id}`}
          >
            <HiArrowSmLeft size={30} color="green" />
          </Link>
          <h3 className="text-xl font-semibold">
            {reviewsList?.[0]?.restaurantName}
          </h3>
        </div>

        <div className="px-3 lg:px-0">
          <div className="rounded-md border border-gray-200 p-5 lg:w-1/2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold md:text-2xl">
                  {calcRating(reviewsList)}
                </p>
              </div>
              <div>
                <HiStar
                  color="orange"
                  className="text-xl md:text-2xl xl:text-4xl"
                />
              </div>
            </div>
            <p className="mb-3 text-xs text-black/70 md:text-base">
              {reviewsList?.length} Ratings
            </p>
            <div className="rounded-md bg-gray-100 px-5 py-2">
              <p className="mb-2 font-medium text-gray-800">Freshest ratings</p>
              <div className="flex gap-2">
                {reviewNewest?.map((item) => (
                  <div
                    className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1"
                    key={item.reviewId}
                  >
                    <HiStar color="orange" />
                    <span>{item.rating}.0</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoRating;
