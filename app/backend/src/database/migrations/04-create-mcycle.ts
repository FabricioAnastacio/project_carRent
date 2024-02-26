import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IMcycle } from '../../Interfaces/IMcycle';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMcycle>>('mcycles', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      concessionaireId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'concessionaire_id',
        references: {
          model: 'stores',
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
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cc: {
        type: DataTypes.INTEGER,
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('mcycles');
  },
};
