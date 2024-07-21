export interface IReqRegisterAccount {
  username: string;
  name: string;
  password: string;
}

export interface IDataResponse {
  username: string;
  name: string;
  restaurant: string | null;
  token: string;
}

export interface IReqLoginAccount {
  username: string;
  password: string;
}

export interface IReqContext {
  isAuth: boolean;
  user: IDataResponse;
  login: (request: IReqLoginAccount) => void;
}

export interface IResponse {
  data: IDataResponse;
  errors?: string;
}
