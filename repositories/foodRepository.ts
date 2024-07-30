import { IResponse } from '@/model/accountModel';
import { IReqFoodsListsCategory, IResponseGetFoods } from '@/model/foodModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const getFoodLists = async (
  request: IReqFoodsListsCategory
): Promise<IResponse<IResponseGetFoods>> => {
  const response = await fetch(`${API_URL}api/foods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data;
};

export const getFoodListsDetail = async (
  restaurantName: string
): Promise<IResponse<IResponseGetFoods>> => {
  const response = await fetch(`${API_URL}api/foods/${restaurantName}`);
  const data = await response.json();
  return data;
};
