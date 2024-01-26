import { IUpdateUser, IUser } from '../Interfaces/IUser';
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

  async updateUser(user: IUpdateUser, email: string): Promise<void> {
    await this.model.update(
      { ...user },
      { where: { email } },
    );
  }

  async delete(email: string): Promise<void> {
    this.model.destroy({ where: { email } });
  }
}

export default ModelUser;
