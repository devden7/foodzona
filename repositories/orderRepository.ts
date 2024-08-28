'use server';

import { IResMessage, IResponse } from '@/model/accountModel';
import { IRatingReq, IReqOrder } from '@/model/orderModel';
import { revalidatePath } from 'next/cache';

const API_URL = process.env.NEXT_PUBLIC_API;

export const createOrder = async (request: IReqOrder) => {
  const response = await fetch(`${API_URL}api/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${request.token}`,
    },
    body: JSON.stringify({
      items: request.items,
      calcPriceItem: request.calcPriceItem,
      totalQuantity: request.totalQuantity,
    }),
  });
  const data = await response.json();
  revalidatePath('/orders');
  return data;
};

export const getOrdersRestaurant = async (token: string) => {
  const response = await fetch(`${API_URL}api/orders-restaurant`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const deliveryFood = async (token: string, orderId: number) => {
  const response = await fetch(`${API_URL}api/delivery-food/${orderId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  revalidatePath('my-restaurant');
  return data;
};

export const cancelFood = async (token: string, orderId: number) => {
  const response = await fetch(`${API_URL}api/cancel-food/${orderId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  revalidatePath('/my-restaurant');
  return data;
};

export const getOrdersUser = async (token: string) => {
  const response = await fetch(`${API_URL}api/orders-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const reviewFood = async (
  request: IRatingReq,
  orderId: number,
  token: string
): Promise<IResponse<IResMessage>> => {
  const response = await fetch(`${API_URL}api/review/${orderId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();

  revalidatePath('/orders');
  return data;
};
