import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';
import UserModel from './UserModel';
import McycleModel from './McycleModel';
import CarModel from './CarModel';

class StoreModel extends Model<InferAttributes<StoreModel>,
InferCreationAttributes<StoreModel>> {
  declare id: number;

  declare name: string;

  declare mcycleId: number;

  declare carId: number;

  declare userId: number;
}

StoreModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mcycleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'stores',
  underscored: true,
});

StoreModel.belongsTo(CarModel, { foreignKey: 'carId', as: 'car' });
StoreModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
StoreModel.belongsTo(McycleModel, { foreignKey: 'mcycleId', as: 'mcycle' });

export default StoreModel;
