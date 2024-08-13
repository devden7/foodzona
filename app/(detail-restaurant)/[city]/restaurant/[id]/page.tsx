import BannerSection from '@/components/detail-restaurant/restaurant/BannerSection';
import Reviews from '@/components/detail-restaurant/restaurant/Reviews';
import ListFoodSection from '@/components/detail-restaurant/restaurant/ListFoodSection';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import { getFoodListsDetail } from '@/repositories/FoodsRepository';

interface PropsParams {
  params: {
    city: string;
    id: string;
  };
}

const DetailRestaurant = async ({ params }: PropsParams) => {
  const data = await getFoodListsDetail(params.id);

  const isRecommendationFood = data?.data.foods.filter(
    (item) => item.isRecommendation === true
  );
  return (
    <>
      <BreadCrumbSection
        pageName="restaurant"
        restaurantName={data?.data.restaurantName}
      />

      <BannerSection
        isRecommendationFood={isRecommendationFood}
        restaurantName={data?.data.restaurantName}
      />

      <Reviews data={data.data} params={params} />

      <ListFoodSection
        dataItems={data.data}
        isRecommendationFood={isRecommendationFood}
      />
    </>
  );
};

export default DetailRestaurant;
