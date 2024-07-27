import { IResponse } from '@/model/accountModel';
import { IInsertFood, responseCreateFood } from '@/model/foodModel';
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

export const createFood = async (
  request: IInsertFood
): Promise<IResponse<responseCreateFood>> => {
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

export const getFoodRestaurant = async (token: string) => {
  const response = await fetch(`${API_URL}api/restaurant-foods`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data;
};

export const updateFoodRestaurant = async (request: IInsertFood) => {
  console.log(request);
  const pickImage = request.image[0] !== undefined ? request.image[0] : '';
  console.log(pickImage);
  const formData = new FormData();

  formData.append('foodName', request.foodName);
  formData.append('description', request.description);
  formData.append('price', request.price.toString());
  formData.append('category', request.category);
  formData.append('image', pickImage);

  const response = await fetch(`${API_URL}api/update/${request.foodId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${request.token}`,
    },
    body: formData,
  });
  const data = await response.json();
  return data;
};
