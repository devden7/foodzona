'use server';

import { IResponse } from '@/model/accountModel';
import { IReqInsertFood, IResponseCreateFood } from '@/model/foodModel';
import { IReqCreateRestaurant, IResCityList } from '@/model/restaurantModel';
import { revalidatePath } from 'next/cache';

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
  revalidatePath('/');
  return data;
};

export const createFood = async (
  request: IReqInsertFood
): Promise<IResponse<IResponseCreateFood>> => {
  const response = await fetch(`${API_URL}api/create-food`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${request.token}`,
    },
    body: request.data,
  });
  const data = await response.json();
  revalidatePath('/my-restaurant');
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
  const response = await fetch(`${API_URL}api/update/${request.foodId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${request.token}`,
    },
    body: request.data,
  });
  const data = await response.json();
  revalidatePath('/my-restaurant');
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
  revalidatePath('/my-restaurant');
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
  revalidatePath('my-restaurant');
  return data;
};

export const getCityLists = async (): Promise<IResCityList[]> => {
  const response = await fetch(`${API_URL}api/city`);
  const data = await response.json();
  return data.data;
};
