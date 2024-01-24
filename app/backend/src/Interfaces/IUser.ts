export interface IUser {
  id?: number,
  userName: string,
  email: string,
  cpf: string,
  password: string,
  balance: string,
  vehicles: string | null,
  role: string
}

export interface IRequestUser {
  userName: string,
  password: string,
  email: string,
  cpf: string,
}

// export interface IResponseUser {
//   userName: string,
//   email: string,
//   cpf: string,
//   role: string
// }
