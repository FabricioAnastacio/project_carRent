import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import StoreModel from './StoreModel';
import UserModel from './UserModel';

class CarModel extends Model<InferAttributes<CarModel>,
InferCreationAttributes<CarModel>> {
  declare id: number | undefined;

  declare concessionaireId: number | null;

  declare userId: number | null;

  declare model: string;

  declare brand: string;

  declare cv: number;

  declare capacity: number;

  declare image: string | undefined;

  declare description: string;

  declare price: number;
}

CarModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  concessionaireId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  brand: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  cv: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cars',
  timestamps: false,
  underscored: true,
});

StoreModel.hasMany(CarModel, { foreignKey: 'concessionaireId', as: 'cars' });
UserModel.hasMany(CarModel, { foreignKey: 'userId', as: 'usersCars' });

export default CarModel;
