import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'cars',
      [
        {
          model: 'Volkswagen',
          brand: 'Golf',
          cc: '250',
          capacity: '5',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
        },
        {
          model: 'Ferrari',
          brand: 'SF90',
          cc: '769',
          capacity: '2',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
};
