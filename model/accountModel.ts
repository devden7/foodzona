export interface IReqRegisterAccount {
  username: string;
  name: string;
  password: string;
}

export interface IDataResponse {
  username: string;
  name: string;
  restaurant: string;
  token: string;
}

export interface IReqLoginAccount {
  username: string;
  password: string;
}

export interface IReqContext {
  isAuth: boolean | undefined;
  user: IDataResponse;
  location: string;
  login: (request: IReqLoginAccount) => void;
  logout: () => void;
  isLoggedIn: () => void;
}

export interface IFoodsLists {
  city: string;
  category: string;
  limit?: number;
}

export interface IResponse<T> {
  data: T;
  errors?: string;
}
