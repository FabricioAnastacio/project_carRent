import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'stores',
      [
        {
          name: 'Concessionária FAR',
          mcycle_id: 1,
          car_id: 1,
          user_id: 1,
        },
        {
          name: 'Concessionária FAR',
          mcycle_id: 2,
          car_id: 2,
          user_id: 2,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('stores', {});
  },
};
