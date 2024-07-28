import HeroBanner from '@/components/shared/HeroBanner';
import { notFound, useParams } from 'next/navigation';

const HeroSection = () => {
  const listsParamsId = [
    'near_me',
    'best_seller',
    'most_loved',
    'martabak',
    'soto_bakso_sop',
    'roti',
    'chinese',
    'burger_sandwich_steak',
    'fastfood',
    'japanese',
    'snacks_jajanan',
    'sate',
    'pizza_pasta',
    'bakmie',
    'minuman',
    'korean',
    'seafood',
    'coffee_shop',
    'indian_food',
    'middle_eastern',
  ];

  const params = useParams();
  const validParamsId = listsParamsId.includes(params.id as string);

  if (!validParamsId) {
    return notFound();
  }
  return (
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
  );
};

export default HeroSection;
