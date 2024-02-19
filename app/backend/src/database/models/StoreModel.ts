import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import db from '.';

class StoreModel extends Model<InferAttributes<StoreModel>,
InferCreationAttributes<StoreModel>> {
  declare id: number | undefined;

  declare name: string;
}

StoreModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'stores',
  underscored: true,
  timestamps: false,
});

export default StoreModel;
