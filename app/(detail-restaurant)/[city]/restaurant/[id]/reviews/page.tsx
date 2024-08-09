'use client';

import { useState, useEffect } from 'react';
import SearchLocation from '@/components/homePage/SearchLocation';
import { HiArrowSmLeft, HiStar } from 'react-icons/hi';
import { getFoodListsDetail } from '@/repositories/foodRepository';
import { useParams } from 'next/navigation';
import { dataReview } from '@/model/orderModel';
import { calcRating, convertIsoToDate } from '@/lib/utils';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
const ReviewsUserf = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [mediumScreen, setMediumScreen] = useState<number | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState<dataReview[] | undefined>();
  const params = useParams();
  const getRestaurantReviews = async () => {
    const response = await getFoodListsDetail(params.id as string);
    setReviewsList(response.data.reviews);
  };
  console.log(reviewsList);
  useEffect(() => {
    getRestaurantReviews();
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

        <BreadCrumbSection
          pageName="restaurant"
          restaurantName={reviewsList?.[0]?.restaurantName ?? ''}
        />
      </div>
      <section className="mb-8 mt-20 lg:mt-10">
        <div className="sm:container">
          <div className="mb-9 flex items-center gap-3 px-3 lg:px-0">
            <HiArrowSmLeft size={30} color="green" />
            <h3 className="text-xl font-semibold">
              Warung Sate Madura Pak Pak, Sunda
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
                <p className="mb-2 font-medium text-gray-800">
                  Freshest ratings
                </p>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                    <HiStar color="orange" />
                    <span> 5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 mt-10 lg:mt-10">
        <div className="px-3 sm:container sm:px-0">
          <h3 className="mb-5 ml-2 text-lg font-semibold">All Reviews</h3>

          <div className="flex flex-col gap-5">
            {reviewsList?.map((review: dataReview) => (
              <div className="p-2" key={review.reviewId}>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-green-500">
                      <span className="flex size-full items-center justify-center font-medium text-white">
                        PB
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {review.username}
                      </p>
                      <p className="text-xs text-black/70 md:text-base">
                        Pengguan FoodZona sejak{' '}
                        {convertIsoToDate(review.user.createAt)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1">
                      <HiStar color="orange" />
                      <span>{review.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="relative mb-2 rounded-2xl border border-gray-200 bg-white p-4 after:absolute after:left-[39px] after:top-0 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45 after:border-l after:border-t after:border-gray-200 after:bg-white after:content-['']">
                  <p className="mb-1">{review.comment} </p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="size-4 shrink-0 md:size-6"
                      >
                        <g clipPath="url(#a)">
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.5 22a1 1 0 1 1 0-2h11a1 1 0 1 1 0 2h-11Zm11.825-3.898c-.891.604-1.981.898-3.14.898H8.898c-1.4 0-2.718-.435-3.702-1.297-1.525-1.334-2.294-3.5-2.185-6.612a1.126 1.126 0 0 1 1.122-1.09h15.736c.613 0 1.102.492 1.121 1.088.122 3.492-.817 5.759-2.664 7.013ZM17 4.538a1 1 0 1 1 2 0V7a1 1 0 1 1-2 0V4.538Zm-12 0a1 1 0 1 1 2 0V7a1 1 0 0 1-2 0V4.538ZM11 3a1 1 0 1 1 2 0v2.462a1 1 0 1 1-2 0V3Z"
                            clipRule="evenodd"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="currentColor" d="M0 0h24v24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="flex gap-2">
                      {review.order.orderItem.map((item, index) => (
                        <p key={item.orderItemId} className=" text-black/40">
                          {item.foodNameOrder}{' '}
                          {index < review.order.orderItem.length - 1 && (
                            <span> - </span>
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-black/40">
                  Ordered on {convertIsoToDate(review.order.createAt)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsUserf;
