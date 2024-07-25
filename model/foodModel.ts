export interface IDataFood {
  foodId: number;
  name: string;
  description: string;
  price: string;
  image: string | null;
}

export interface responseCreateFood {
  foods: IDataFood;
}
