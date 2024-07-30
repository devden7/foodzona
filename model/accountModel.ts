export interface IReqRegisterAccount {
  username: string;
  name: string;
  password: string;
}

export interface IUserInfo {
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
  user: IUserInfo;
  location: string;
  login: (request: IReqLoginAccount) => void;
  logout: () => void;
  isLoggedIn: () => void;
}

export interface IResponse<T> {
  data: T;
  errors?: string;
}
