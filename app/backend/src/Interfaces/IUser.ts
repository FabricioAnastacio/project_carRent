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

export interface IFunctionsUser {
  findByEmail(email: string): Promise<IUser | null>,
  findByEmailResponse(email: string): Promise<IUser | null>,
  createUser(user: IUser): Promise<void>,
  updateUser(newDtaUser: IUpdateUser | { balance: string }, email: string): Promise<void>,
  delete(email: string): Promise<void>
}
