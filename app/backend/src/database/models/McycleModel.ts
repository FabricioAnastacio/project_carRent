import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class McycleModel extends Model<InferAttributes<McycleModel>,
InferCreationAttributes<McycleModel>> {
  declare id: number;

  declare model: string;

  declare brand: string;

  declare cc: number;

  declare capacity: number;

  declare image: string | undefined;

  declare description: string;
}

McycleModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
}, {
  sequelize: db,
  modelName: 'mcycles',
  timestamps: false,
});

export default McycleModel;
