import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/serviceResponse';
import { ILogin, ILoginValidation } from '../Interfaces/ILogin';
import IToken from '../Interfaces/IToken';
import verifyUser from './validation/validateInput';
import JWT from '../utils/JWT';
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
}

export default UserService;
