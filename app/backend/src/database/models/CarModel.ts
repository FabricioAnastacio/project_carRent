import { DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import db from '.';

class CarModel extends Model<InferAttributes<CarModel>,
InferCreationAttributes<CarModel>> {
  declare id: number;

  declare model: string;

  declare brand: string;

  declare cc: number;

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
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'cars',
  timestamps: false,
});

export default CarModel;
