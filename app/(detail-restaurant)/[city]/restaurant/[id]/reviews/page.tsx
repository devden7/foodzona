import { HiStar, HiUser } from 'react-icons/hi';
import { dataReview } from '@/model/orderModel';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import InfoRating from '@/components/detail-restaurant/restaurant/reviews/InfoRating';
import { convertIsoToDate } from '@/lib/utils';
import { getFoodListsDetail } from '@/repositories/FoodsRepository';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PropsParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  return {
    title: 'Reviews - ' + params.id + ' | Food Zona',
  };
}

const ReviewsUserf = async ({
  params,
}: {
  params: { city: string; id: string };
}) => {
  const data = await getFoodListsDetail(params.id);
  if (data.errors) {
    return notFound();
  }
  return (
    <>
      <BreadCrumbSection
        pageName="restaurant"
        restaurantName={data.data.restaurantName}
      />
      {data.data.reviews !== undefined && data.data.reviews.length === 0 && (
        <div className="container flex size-96 items-center justify-center text-xl font-medium">
          <p>Tidak ada Review</p>
        </div>
      )}
      {data.data.reviews !== undefined && data.data.reviews.length > 0 && (
        <InfoRating reviewsList={data.data.reviews} params={params} />
      )}

      {data.data.reviews !== undefined && data.data.reviews.length > 0 && (
        <section className="mb-8 mt-10">
          <div className="px-3 sm:container">
            <h3 className="mb-5 ml-2 text-lg font-semibold">All Reviews</h3>

            <div className="flex flex-col gap-5">
              {data.data.reviews?.map((review: dataReview) => (
                <div className="p-2" key={review.reviewId}>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-gray-100">
                        <span className="flex size-full items-center justify-center font-medium text-white">
                          <HiUser color="black" />
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
                              <path
                                fill="currentColor"
                                d="M0 0h24v24H0z"
                              ></path>
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
      )}
    </>
  );
};

export default ReviewsUserf;
