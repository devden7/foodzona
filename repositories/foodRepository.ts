import { IFoodsLists } from '@/model/accountModel';

const API_URL = process.env.NEXT_PUBLIC_API;

export const getFoodLists = async (request: IFoodsLists) => {
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
