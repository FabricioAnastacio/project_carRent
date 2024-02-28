import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { ILoginRole, ILoginValidation } from '../Interfaces/ILogin';
import IToken from '../Interfaces/IToken';
import JWT, { TokenPayload } from '../utils/JWT';
import ModelUser from '../models/userModel';
import { IFunctionsUser, IRequestUser, IUpdateUser, IUser } from '../Interfaces/IUser';
import {
  validateDataUpdateUser,
  validateDataUser,
  validateDataUserMoney,
  verifyUser,
} from './validation/validateInput';

class UserService {
  constructor(
    private userModel: IFunctionsUser = new ModelUser(),
  ) {}

  public async validateUser(people: ILoginValidation): Promise<ServiceResponse<IToken>> {
    const { email, password } = people;

    const error = verifyUser(people);
    if (error) return { status: error.status, data: error.data };

    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };

    if (!bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const payload = {
      email,
      role: user.role,
    };
    const token = JWT.createToken(payload);

    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async getDataUser(payload: TokenPayload): Promise<ServiceResponse<ILoginRole>> {
    const { email } = payload;
    const user = await this.userModel.findByEmail(email);

    const { role } = user as IUser;

    return { status: 'SUCCESSFUL', data: { role } };
  }

  public async getAllDataUser(email: string): Promise<ServiceResponse<IUser>> {
    const user = await this.userModel.findByEmailResponse(email) as IUser;

    return { status: 'SUCCESSFUL', data: user };
  }

  public async addNewUser(people: IRequestUser): Promise<ServiceResponse<IToken>> {
    const error = validateDataUser(people);
    if (error) return { status: error.status, data: error.data };

    const verificUser = await this.userModel.findByEmail(people.email);
    if (verificUser) return { status: 'CONFLICT', data: { message: 'User already registered' } };

    const newUser = {
      userName: people.userName,
      cpf: people.cpf,
      email: people.email,
      balance: '00',
      role: 'user',
      vehicles: null,
      password: bcrypt.hashSync(people.password),
    };

    await this.userModel.createUser(newUser);
    const token = JWT.createToken({ email: newUser.email, role: newUser.role });

    return { status: 'CREATED', data: { token } };
  }

  public async updateDataUser(
    newData: IUpdateUser,
    emailUser: string,
  ): Promise<ServiceResponse<string>> {
    const error = validateDataUpdateUser(newData);
    if (error) return { status: error.status, data: error.data };

    const upUser = {
      userName: newData.userName,
      email: newData.email,
      password: bcrypt.hashSync(newData.password),
    };

    await this.userModel.updateUser(upUser, emailUser);

    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  public async updateBalance(
    money: { balance: string },
    email: string,
  ): Promise<ServiceResponse<string>> {
    const error = validateDataUserMoney(money);
    if (error) return { status: error.status, data: error.data };

    await this.userModel.updateUser(money, email);

    return { status: 'SUCCESSFUL', data: { message: 'Information changed successfully' } };
  }

  public async deleteUser(email: string): Promise<ServiceResponse<void>> {
    await this.userModel.delete(email);

    return { status: 'DELETED', data: { message: '' } };
  }
}

export default UserService;
