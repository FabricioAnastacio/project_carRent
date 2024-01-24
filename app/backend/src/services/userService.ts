import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { ILogin, ILoginRole, ILoginValidation } from '../Interfaces/ILogin';
import IToken from '../Interfaces/IToken';
import verifyUser from './validation/validateInput';
import JWT, { TokenPayload } from '../utils/JWT';
import ModelUser from '../models/userModel';
import { IUser } from '../Interfaces/IUser';

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
}

export default UserService;
