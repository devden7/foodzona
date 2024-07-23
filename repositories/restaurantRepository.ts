import { IResponse } from '@/model/accountModel';
import { IRestaurant } from '@/model/restaurantModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const createRestaurant = async (
  request: IRestaurant
): Promise<IResponse<IRestaurant>> => {
  const response = await fetch(`${API_URL}api/register-restaurant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${request.token}`,
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data;
};
