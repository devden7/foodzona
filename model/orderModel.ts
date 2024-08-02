import { IDataFood } from './foodModel';

export interface IReqOrder {
  token: string;
  items: IDataFood[];
  calcPriceItem: number;
  totalQuantity: number;
}
