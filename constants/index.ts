import {
  CategoriesList,
  NavbarList,
  TypeFoodList,
  RestaurantList,
  ValueList,
  RecommendationsList,
} from '@/types';

export const navbarLists: NavbarList[] = [
  {
    route: '/',
    label: 'Beranda',
  },
  {
    route: '/recommendations',
    label: 'Rekomendasi',
  },
];

export const categoriesLists: CategoriesList[] = [
  {
    id: '0',
    label: 'Terdekat',
    imageUrl: '/assets/categories_terdekat.png',
    href: '/jakarta/restaurants/near_me',
  },
  {
    id: '1',
    label: 'Terlaris',
    imageUrl: '/assets/categories_terlaris.png',
    href: '/jakarta/restaurants/best_seller',
  },
  {
    id: '2',
    label: 'Terfavorit',
    imageUrl: '/assets/categories_terfavorit.png',
    href: '/jakarta/restaurants/most_loved',
  },
];

export const typeFoodLists: TypeFoodList[] = [
  {
    id: '0',
    label: 'Martabak',
    imageUrl: '/assets/martabak.jpg',
    href: '/jakarta/restaurants/martabak',
  },
  {
    id: '1',
    label: 'Bakso & soto',
    imageUrl: '/assets/bakso-soto.jpg',
    href: '/jakarta/restaurants/soto_bakso_sop',
  },
  {
    id: '2',
    label: 'Roti',
    imageUrl: '/assets/roti.jpg',
    href: '/jakarta/restaurants/roti',
  },
  {
    id: '3',
    label: 'Chinese',
    imageUrl: '/assets/chinese.jpg',
    href: '/jakarta/restaurants/chinese',
  },
  {
    id: '4',
    label: 'Barat',
    imageUrl: '/assets/barat.jpg',
    href: '/jakarta/restaurants/burger_sandwich_steak',
  },
  {
    id: '5',
    label: 'Cepat saji',
    imageUrl: '/assets/cepatsaji.jpg',
    href: '/jakarta/restaurants/fastfood',
  },
  {
    id: '6',
    label: 'Jepang',
    imageUrl: '/assets/jepang.jpg',
    href: '/jakarta/restaurants/japanese',
  },
  {
    id: '7',
    label: 'Jajanan',
    imageUrl: '/assets/jajanan.jpg',
    href: '/jakarta/restaurants/snacks_jajanan',
  },
  {
    id: '8',
    label: 'Sate',
    imageUrl: '/assets/sate.jpg',
    href: '/jakarta/restaurants/sate',
  },
  {
    id: '9',
    label: 'Pizza & pasta',
    imageUrl: '/assets/pizza-pasta.jpg',
    href: '/jakarta/restaurants/pizza_pasta',
  },
  {
    id: '10',
    label: 'Bakmie',
    imageUrl: '/assets/bakmie.jpg',
    href: '/jakarta/restaurants/bakmie',
  },
  {
    id: '11',
    label: 'Minuman',
    imageUrl: '/assets/minuman.jpg',
    href: '/jakarta/restaurants/minuman',
  },
  {
    id: '12',
    label: 'Korea',
    imageUrl: '/assets/korea.jpg',
    href: '/jakarta/restaurants/korean',
  },
  {
    id: '13',
    label: 'Seafood',
    imageUrl: '/assets/seafood.jpg',
    href: '/jakarta/restaurants/seafood',
  },
  {
    id: '14',
    label: 'Kopi',
    imageUrl: '/assets/kopi.jpg',
    href: '/jakarta/restaurants/coffee_shop',
  },
  {
    id: '15',
    label: 'India',
    imageUrl: '/assets/india.jpg',
    href: '/jakarta/restaurants/indian_food',
  },
  {
    id: '16',
    label: 'Timur tengah',
    imageUrl: '/assets/timur tengah.jpg',
    href: '/jakarta/restaurants/middle_eastern',
  },
];

export const restaurantLists: RestaurantList[] = [
  {
    id: '0',
    label: 'Judul restoran 1, indonesia',
    imageUrl: '/assets/makanan_satu.jpg',
    category: [
      { categoriesId: '0', categories: 'Nasi' },
      { categoriesId: '1', categories: 'Bakmie' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 5.0,
  },
  {
    id: '1',
    label: 'Judul restoran 2, indonesia',
    imageUrl: '/assets/makanan_dua.jpg',
    category: [
      { categoriesId: '0', categories: 'Bakso & soto' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.5,
  },
  {
    id: '2',
    label: 'Judul restoran 3, indonesia',
    imageUrl: '/assets/makanan_tiga.jpg',
    category: [
      { categoriesId: '0', categories: 'Cepat saji' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.0,
  },
  {
    id: '3',
    label: 'Judul restoran 4, indonesia',
    imageUrl: '/assets/makanan_satu.jpg',
    category: [
      { categoriesId: '0', categories: 'Nasi' },
      { categoriesId: '1', categories: 'Bakmie' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 5.0,
  },
  {
    id: '4',
    label: 'Judul restoran 5, indonesia',
    imageUrl: '/assets/makanan_dua.jpg',
    category: [
      { categoriesId: '0', categories: 'Bakso & soto' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.5,
  },
  {
    id: '5',
    label:
      'Judul restoran 6, indonesia Judul restoran 6, indonesia,Judul restoran 6, indonesia',
    imageUrl: '/assets/makanan_tiga.jpg',
    category: [
      { categoriesId: '0', categories: 'Cepat saji' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
      { categoriesId: '3', categories: 'Cepat saji' },
      { categoriesId: '4', categories: 'Ayam & bebek' },
      { categoriesId: '5', categories: 'Aneka nasi' },
      { categoriesId: '6', categories: 'Cepat saji' },
      { categoriesId: '6', categories: 'Ayam & bebek' },
      { categoriesId: '8', categories: 'Aneka nasi' },
      { categoriesId: '9', categories: 'Cepat saji' },
      { categoriesId: '10', categories: 'Ayam & bebek' },
      { categoriesId: '11', categories: 'Aneka nasi' },
    ],
    rating: 4.0,
  },
  {
    id: '6',
    label: 'Judul restoran 7, indonesia',
    imageUrl: '/assets/makanan_satu.jpg',
    category: [
      { categoriesId: '0', categories: 'Nasi' },
      { categoriesId: '1', categories: 'Bakmie' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 5.0,
  },
  {
    id: '7',
    label: 'Judul restoran 8, indonesia',
    imageUrl: '/assets/makanan_dua.jpg',
    category: [
      { categoriesId: '0', categories: 'Bakso & soto' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.5,
  },
];

// linear-gradient(to right, #0284c7, #0ea5e9);
export const valueList: ValueList[] = [
  {
    id: '0',
    description: '20,000+ ulasan baru setiap menitnya',
    imageUrl: '/assets/review_illustration.png',
    backgroundColor: 'linear-gradient(to right, #86198f, #c026d3)',
  },
  {
    id: '1',
    description: 'Pesan antar atau ambil sendiri di resto',
    imageUrl: '/assets/delivery_illustration.png',
    backgroundColor: 'linear-gradient(to right, #0369a1, #0ea5e9)',
  },
  {
    id: '2',
    description: 'Makan apa aja, promonya ada',
    imageUrl: '/assets/promo_illustration.png',
    backgroundColor: '#ec4899',
  },
  {
    id: '3',
    description: 'Diantar dengan aman & cepat',
    imageUrl: '/assets/packing_illustration.png',
    backgroundColor: '#d97706',
  },
];

export const recommendationsLists: RecommendationsList[] = [
  {
    id: '0',
    label: 'Judul restoran 1, indonesia',
    imageUrl: '/assets/makanan_satu.jpg',
    category: [
      { categoriesId: '0', categories: 'Nasi' },
      { categoriesId: '1', categories: 'Bakmie' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 5.0,
  },
  {
    id: '1',
    label: 'Judul restoran 2, indonesia',
    imageUrl: '/assets/makanan_dua.jpg',
    category: [
      { categoriesId: '0', categories: 'Bakso & soto' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.5,
  },
  {
    id: '2',
    label: 'Judul restoran 3, indonesia',
    imageUrl: '/assets/makanan_tiga.jpg',
    category: [
      { categoriesId: '0', categories: 'Cepat saji' },
      { categoriesId: '1', categories: 'Ayam & bebek' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 4.0,
  },
  {
    id: '3',
    label: 'Judul restoran 4, indonesia',
    imageUrl: '/assets/makanan_satu.jpg',
    category: [
      { categoriesId: '0', categories: 'Nasi' },
      { categoriesId: '1', categories: 'Bakmie' },
      { categoriesId: '2', categories: 'Aneka nasi' },
    ],
    rating: 5.0,
  },
];
