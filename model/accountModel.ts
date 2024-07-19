export interface IReqRegisterAccount {
  username: string;
  name: string;
  password: string;
}

export interface dataResponseRegister {
  username: string;
  name: string;
}

export interface IResponseRegister {
  data: dataResponseRegister;
  errors?: string;
}
