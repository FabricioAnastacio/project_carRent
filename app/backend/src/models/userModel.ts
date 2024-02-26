import { IUpdateUser, IUser } from '../Interfaces/IUser';
import UserModel from '../database/models/UserModel';
import { ILogin } from '../Interfaces/ILogin';
import McycleModel from '../database/models/McycleModel';
import CarModel from '../database/models/CarModel';

class ModelUser implements ILogin {
  private model = UserModel;
  private include = [
    {
      model: McycleModel,
      as: 'usersMcycles',
      attributes: ['id', 'model'],
    },
    {
      model: CarModel,
      as: 'usersCars',
      attributes: ['id', 'model'],
    },
  ];

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne(
      {
        where: { email },
        include: this.include,
        attributes: { exclude: ['password'] },
      },
    );
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
