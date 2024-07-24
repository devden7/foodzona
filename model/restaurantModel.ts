export interface IRestaurant {
  restaurantName: string;
  city: string;
  token?: string;
}

export interface ICreateFood {
  foodName: string;
  description: string;
  price: number;
  category: string;
  image?: FileList | undefined;
  token: string;
}
