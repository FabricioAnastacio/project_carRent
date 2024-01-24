import { IUser } from '../Interfaces/IUser';
import UserModel from '../database/models/UserModel';
import { ILogin } from '../Interfaces/ILogin';

class ModelUser implements ILogin {
  private model = UserModel;

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  async createUser(user: IUser): Promise<void> {
    await this.model.create(user);
  }
}

export default ModelUser;
