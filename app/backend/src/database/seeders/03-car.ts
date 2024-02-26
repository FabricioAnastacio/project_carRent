import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'cars',
      [
        {
          concessionaire_id: 1,
          model: 'Volkswagen',
          brand: 'Golf',
          cv: '250',
          capacity: '5',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
        },
        {
          concessionaire_id: 1,
          model: 'Ferrari',
          brand: 'SF90',
          cv: '769',
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
