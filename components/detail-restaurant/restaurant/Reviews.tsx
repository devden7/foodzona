'use client';
import { calcRating } from '@/lib/utils';
import { IResponseGetFoods } from '@/model/foodModel';
import Link from 'next/link';
import { HiStar } from 'react-icons/hi';

interface Props {
  data: IResponseGetFoods | undefined;
  params: { city: string; id: string };
}

const Reviews = ({ data, params }: Props) => {
  return (
    <div className="mb-8 mt-16">
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
            href={`/${params.city}/restaurant/${params.id}/reviews`}
            className="font-semibold text-green-700 md:text-lg"
          >
            See review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
