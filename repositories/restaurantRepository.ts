import { IResponse } from '@/model/accountModel';
import { ICreateFood, IRestaurant } from '@/model/restaurantModel';

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

export const createFood = async (
  request: ICreateFood
): Promise<IResponse<IRestaurant>> => {
  const pickImage = request.image[0] !== undefined ? request.image[0] : '';
  const formData = new FormData();

  formData.append('foodName', request.foodName);
  formData.append('description', request.description);
  formData.append('price', request.price.toString());
  formData.append('category', request.category);
  formData.append('image', pickImage);

  const response = await fetch(`${API_URL}api/create-food`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${request.token}`,
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};
