import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'mcycles',
      [
        {
          concessionaire_id: 1,
          model: 'Honda',
          brand: 'Titan',
          cc: '160',
          capacity: '2',
          image: null,
          description: 'Moto de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
        },
        {
          concessionaire_id: 1,
          model: 'Yamaha',
          brand: 'XT',
          cc: '660',
          capacity: '2',
          image: null,
          description: 'Moto de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('mcycles', {});
  },
};
