import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IStore } from '../../Interfaces/IStore';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IStore>>('stores', {
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
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('stores');
  },
};
