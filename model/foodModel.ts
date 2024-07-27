export interface IDataFood {
  foodId: number;
  name: string;
  description: string;
  price: string | number;
  category: string;
  image: string | null;
}

export interface IInsertFood {
  foodId?: number;
  foodName: string;
  description: string;
  price: number;
  category: string;
  image?: FileList | any;
  token: string;
}

export interface responseCreateFood {
  foods: IDataFood;
}
