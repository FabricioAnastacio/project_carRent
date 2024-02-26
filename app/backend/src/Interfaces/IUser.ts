export interface IUser {
  id?: number,
  userName: string,
  email: string,
  cpf: string,
  password: string,
  balance: string,
  role: string
}

export interface IRequestUser {
  userName: string,
  password: string,
  email: string,
  cpf: string,
}

export interface IUpdateUser {
  userName: string,
  password: string,
  email: string,
}
