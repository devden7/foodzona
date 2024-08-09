'use client';

import { useEffect, useState } from 'react';
import { IResponseGetFoods } from '@/model/foodModel';
import { getFoodListsDetail } from '@/repositories/foodRepository';
import { useParams } from 'next/navigation';
import BannerSection from '@/components/detail-restaurant/restaurant/BannerSection';
import Reviews from '@/components/detail-restaurant/restaurant/Reviews';
import ListFoodSection from '@/components/detail-restaurant/restaurant/ListFoodSection';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';

const DetailRestaurant = () => {
  const [data, setData] = useState<IResponseGetFoods>();
  const params = useParams();
  const getFoodListDetail = async () => {
    const response = await getFoodListsDetail(params.id as string);
    setData(response.data);
  };

  useEffect(() => {
    getFoodListDetail();
  }, []);

  const isRecommendationFood = data?.foods.filter(
    (item) => item.isRecommendation === true
  );
  return (
    <>
      <BreadCrumbSection
        pageName="restaurant"
        restaurantName={data?.restaurantName}
      />

      <BannerSection
        isRecommendationFood={isRecommendationFood}
        restaurantName={data?.restaurantName}
      />

      <Reviews data={data} />

      <ListFoodSection
        data={data}
        isRecommendationFood={isRecommendationFood}
      />
    </>
  );
};

export default DetailRestaurant;
