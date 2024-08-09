'use client';

import RecommendationMenuSection from '@/components/shared/RecommendationMenuSection';
import CategoriesMenuSection from '@/components/shared/CategoriesMenuSection';
import BreadCrumbSection from '@/components/shared/BreadCrumbSection';
import BannerSection from '@/components/detail-restaurant/restaurants/BannerSection';

const Restaurants = () => {
  return (
    <>
      <BannerSection />

      <section className="mb-5">
        <BreadCrumbSection />
        <div className="container">
          <div>
            <h3 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">
              Rekomendasi kami
            </h3>
            <p className="mb-5 text-sm text-black/80 lg:text-base">
              Ini ini nih jalan pintas menuju nikmat.
            </p>

            <RecommendationMenuSection />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="container">
          <div>
            <h3 className="mb-1 text-lg font-semibold  md:text-xl lg:text-2xl">
              Aneka kuliner menarik
            </h3>
            <p className="mb-5 text-sm text-black/80 lg:text-base">
              Liat-liat aja dulu siapa tau jadi ngidam.
            </p>

            <CategoriesMenuSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurants;
