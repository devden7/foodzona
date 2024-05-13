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
  },
  {
    id: '1',
    label: 'Terlaris',
    imageUrl: '/assets/categories_terlaris.png',
  },
  {
    id: '2',
    label: 'Menu hemat',
    imageUrl: '/assets/categories_hemat.png',
  },
  {
    id: '3',
    label: 'Terfavorit',
    imageUrl: '/assets/categories_terfavorit.png',
  },
  {
    id: '4',
    label: '24 jam',
    imageUrl: '/assets/categories_24jam.png',
  },
  {
    id: '5',
    label: 'Menu sehat',
    imageUrl: '/assets/categories_menusehat.png',
  },
  {
    id: '6',
    label: 'Pasti ada promo',
    imageUrl: '/assets/categories_promo.png',
  },
];

export const typeFoodLists: TypeFoodList[] = [
  {
    id: '0',
    label: 'Martabak',
    imageUrl: '/assets/martabak.jpg',
  },
  {
    id: '1',
    label: 'Bakso & soto',
    imageUrl: '/assets/bakso-soto.jpg',
  },
  {
    id: '2',
    label: 'Roti',
    imageUrl: '/assets/roti.jpg',
  },
  {
    id: '3',
    label: 'Chinese',
    imageUrl: '/assets/chinese.jpg',
  },
  {
    id: '4',
    label: 'Barat',
    imageUrl: '/assets/barat.jpg',
  },
  {
    id: '5',
    label: 'Cepat saji',
    imageUrl: '/assets/cepatsaji.jpg',
  },
  {
    id: '6',
    label: 'Jepang',
    imageUrl: '/assets/jepang.jpg',
  },
  {
    id: '7',
    label: 'Jajanan',
    imageUrl: '/assets/jajanan.jpg',
  },
  {
    id: '8',
    label: 'Sate',
    imageUrl: '/assets/sate.jpg',
  },
  {
    id: '9',
    label: 'Pizza & pasta',
    imageUrl: '/assets/pizza-pasta.jpg',
  },
  {
    id: '10',
    label: 'Bakmie',
    imageUrl: '/assets/bakmie.jpg',
  },
  {
    id: '11',
    label: 'Minuman',
    imageUrl: '/assets/minuman.jpg',
  },
  {
    id: '12',
    label: 'Korea',
    imageUrl: '/assets/korea.jpg',
  },
  {
    id: '13',
    label: 'Seafood',
    imageUrl: '/assets/seafood.jpg',
  },
  {
    id: '14',
    label: 'Kopi',
    imageUrl: '/assets/kopi.jpg',
  },
  {
    id: '15',
    label: 'Jepang',
    imageUrl: '/assets/india.jpg',
  },
  {
    id: '16',
    label: 'Timur tengah',
    imageUrl: '/assets/timur tengah.jpg',
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
