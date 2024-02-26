import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';
import StoreModel from './StoreModel';

class McycleModel extends Model<InferAttributes<McycleModel>,
InferCreationAttributes<McycleModel>> {
  declare id: number | undefined;

  declare concessionaireId: number;

  declare model: string;

  declare brand: string;

  declare cc: number;

  declare capacity: number;

  declare image: string | undefined;

  declare description: string;

  declare price: number;
}

McycleModel.init({
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
  cc: {
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
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'mcycles',
  timestamps: false,
  underscored: true,
});

StoreModel.hasMany(McycleModel, { foreignKey: 'concessionaireId', as: 'mcycles' });

export default McycleModel;
