export interface IDataFood {
  foodId: number | null;
  name: string;
  description: string;
  price: string | number;
  category: string;
  image: string | null;
}

export interface responseCreateFood {
  foods: IDataFood;
}
