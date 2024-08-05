import { dataReview } from './orderModel';

export interface IDataFood {
  foodId: number;
  name: string;
  description: string;
  price: string | number;
  category: string;
  image: string | null;
  restaurantName: string;
  quantity: number;
}

export interface IResponseGetFoods {
  foods: IDataFood[];
  restaurantName?: string;
  reviews?: dataReview[];
}

export interface IReqInsertFood {
  foodId?: number;
  foodName: string;
  description: string;
  price: number;
  category: string;
  image?: FileList | any;
  token: string;
}

export interface IResponseCreateFood {
  foods: IDataFood;
}

export interface IReqFoodsListsCategory {
  city: string;
  category: string;
  limit?: number;
}
