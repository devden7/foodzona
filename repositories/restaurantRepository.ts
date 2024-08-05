import { IResponse } from '@/model/accountModel';
import { IReqInsertFood, IResponseCreateFood } from '@/model/foodModel';
import { IReqCreateRestaurant } from '@/model/restaurantModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const createRestaurant = async (
  request: IReqCreateRestaurant
): Promise<IResponse<IReqCreateRestaurant>> => {
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
  request: IReqInsertFood
): Promise<IResponse<IResponseCreateFood>> => {
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

export const updateFoodRestaurant = async (request: IReqInsertFood) => {
  const pickImage = request.image[0] !== undefined ? request.image[0] : '';
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

export const deleteFoodRestaurant = async (foodId: number, token: string) => {
  const response = await fetch(`${API_URL}api/delete/${foodId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const addRecommendationFood = async (foodId: number, token: string) => {
  const response = await fetch(`${API_URL}api/add-recommendation/${foodId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
