export interface IReqCreateRestaurant {
  restaurantName: string;
  city: string;
  token?: string;
}

export interface IResCityList {
  city_name: string;
}
