import BannerSection from '@/components/detail-restaurant/restaurant/BannerSection';
import Reviews from '@/components/detail-restaurant/restaurant/Reviews';
import ListFoodSection from '@/components/detail-restaurant/restaurant/ListFoodSection';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import { getFoodListsDetail } from '@/repositories/FoodsRepository';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PropsParams {
  params: {
    city: string;
    id: string;
  };
}

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  return {
    title: params.id + ' | Food Zona',
  };
}

const DetailRestaurant = async ({ params }: PropsParams) => {
  const data = await getFoodListsDetail(params.id);
  if (data.errors) {
    return notFound();
  }
  console.log(data);
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
