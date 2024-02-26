import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import StoreModel from './StoreModel';

class CarModel extends Model<InferAttributes<CarModel>,
InferCreationAttributes<CarModel>> {
  declare id: number | undefined;

  declare concessionaireId: number;

  declare model: string;

  declare brand: string;

  declare cv: number;

  declare capacity: number;

  declare image: string | undefined;

  declare description: string;
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
    allowNull: false,
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
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.NUMBER,
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
}, {
  sequelize: db,
  modelName: 'cars',
  timestamps: false,
  underscored: true,
});

StoreModel.hasMany(CarModel, { foreignKey: 'concessionaireId', as: 'cars' });

export default CarModel;
