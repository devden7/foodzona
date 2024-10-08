export interface NavbarList {
  route: string;
  label: string;
}

export interface CategoriesList {
  id: string;
  label: string;
  imageUrl: string;
  href: string;
}

export interface TypeFoodList {
  id: string;
  label: string;
  imageUrl: string;
  href: string;
}

interface Categories {
  categoriesId: string;
  categories: string;
}

export interface RestaurantList {
  id: string;
  label: string;
  imageUrl: string;
  category: Categories[];
  rating: number;
}

export interface ValueList {
  id: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

export interface RecommendationsList {
  id: string;
  label: string;
  imageUrl: string;
  category: Categories[];
  rating: number;
}
