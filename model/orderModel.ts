import { IDataFood } from './foodModel';

export interface IReqOrder {
  token: string;
  items: IDataFood[];
  calcPriceItem: number;
  totalQuantity: number;
}

export interface OrderItem {
  orderItemId: number;
  foodNameOrder: string;
}

interface Restaurant {
  city_name: string;
}

export interface Order {
  orderId: number;
  orderItem: OrderItem[];
  restaurant: Restaurant;
  restaurantName: string;
  status: string;
  totalPrice: number;
  totalQuantity: number;
  username: string;
}

export interface IRatingReq {
  rating: number;
  comment: string;
}

export interface userDate {
  createAt: string;
}
export interface dataReview {
  reviewId: number;
  username: string;
  comment: string;
  rating: number;
  restaurantName: string;
  order: { createAt: string; orderItem: OrderItem[] };
  user: userDate;
}
