import {
  IUserInfo,
  IReqLoginAccount,
  IReqRegisterAccount,
  IResponse,
} from '@/model/accountModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const registerUser = async (
  request: IReqRegisterAccount
): Promise<IResponse<IUserInfo>> => {
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

export const loginUser = async (request: IReqLoginAccount) => {
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
