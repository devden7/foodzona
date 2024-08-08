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
  isRecommendation: boolean;
  rating?: number | null;
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
  city: string | null;
  category: string;
  limit?: number;
}
