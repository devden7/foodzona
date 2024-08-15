'use client';

import { IDataFood } from '@/model/foodModel';
import Image from 'next/image';

interface Props {
  isRecommendationFood: IDataFood[] | undefined;
  restaurantName: string | undefined;
}
const API_URL = process.env.NEXT_PUBLIC_API;

const BannerSection = ({ isRecommendationFood, restaurantName }: Props) => {
  return (
    <section className="mb-8 mt-4 lg:mt-3 2xl:mt-1">
      <div className={`${'container'}`}>
        <div className="flex gap-3 p-2 md:p-5 lg:p-0">
          <div className="relative size-16 overflow-hidden rounded-xl md:size-24">
            <Image
              src={`${isRecommendationFood !== undefined && isRecommendationFood.length > 0 && isRecommendationFood[0].image !== null ? API_URL + 'images/' + isRecommendationFood[0].image : '/assets/no-image.jpeg'}`}
              alt="Banner Restaurant"
              fill
              sizes="50vw"
              className="absolute object-cover"
            />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold md:mb-5 md:text-2xl">
              {restaurantName}
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
  );
};

export default BannerSection;
