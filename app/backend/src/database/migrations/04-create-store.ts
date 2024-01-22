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
      mcycleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'mcycle_id',
        references: {
          model: 'mcycles',
          key: 'id',
        },
      },
      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'car_id',
        references: {
          model: 'cars',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('stores');
  },
};
