import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class UserModel extends Model<InferAttributes<UserModel>,
InferCreationAttributes<UserModel>> {
  declare id: CreationOptional<number>;

  declare userName: string;

  declare email: string;

  declare password: string;

  declare cpf: string;

  declare balance: number;

  declare vehicles: Array<number>;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicles: {
    type: DataTypes.ARRAY,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;
