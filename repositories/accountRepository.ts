import {
  IDataResponse,
  IReqLoginAccount,
  IReqRegisterAccount,
  IResponse,
} from '@/model/accountModel';
import { IRestaurant } from '@/model/restaurantModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const registerUser = async (
  request: IReqRegisterAccount
): Promise<IResponse<IDataResponse>> => {
  const response = await fetch(`${API_URL}api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data;
};

export const loginUser = async (
  request: IReqLoginAccount
): Promise<IResponse<IDataResponse>> => {
  const response = await fetch(`${API_URL}api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data;
};

export const createRestaurant = async (
  request: IRestaurant
): Promise<IResponse<IRestaurant>> => {
  const response = await fetch(`${API_URL}api/register-restaurant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });
  const data = await response.json();
  return data;
};
