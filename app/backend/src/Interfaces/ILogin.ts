import { IUpdateUser, IUser } from './IUser';

export interface ILoginValidation {
  email: string,
  password: string,
}

export interface ILoginRole {
  role: string,
}

export interface ILogin {
  findByEmail(email: string): Promise<IUser | null>,
  createUser(user: IUser): Promise<void>,
  updateUser(newDtaUser: IUpdateUser, email: string): Promise<void>
}
