import { IReqOrder } from '@/model/orderModel';

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
  return data;
};
