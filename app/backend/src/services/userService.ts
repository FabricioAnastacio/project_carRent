import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { ILogin, ILoginRole, ILoginValidation } from '../Interfaces/ILogin';
import IToken from '../Interfaces/IToken';
import { validateDataUser, verifyUser } from './validation/validateInput';
import JWT, { TokenPayload } from '../utils/JWT';
import { IRequestUser, IUser } from '../Interfaces/IUser';
import ModelUser from '../models/userModel';

class UserService {
  constructor(
    private userModel: ILogin = new ModelUser(),
  ) {}

  public async validateUser(people: ILoginValidation): Promise<ServiceResponse<IToken>> {
    const { email, password } = people;

    const error = verifyUser(people);
    if (error) return { status: error.status, data: error.data };

    const user = await this.userModel.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const payload = {
      email,
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
    const token = JWT.createToken({ email: newUser.email });

    return { status: 'CREATED', data: { token } };
  }
}

export default UserService;
