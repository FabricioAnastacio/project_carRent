import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'cars',
      [
        {
          concessionaire_id: 1,
          user_id: null,
          model: 'Volkswagen',
          brand: 'Golf',
          cv: '250',
          capacity: '5',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
          price: 155000,
        },
        {
          concessionaire_id: 1,
          user_id: null,
          model: 'Ferrari',
          brand: 'SF90',
          cv: '769',
          capacity: '2',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
          price: 5200000,
        },
        {
          concessionaire_id: null,
          user_id: 3,
          model: 'Ferrari',
          brand: '458-Italia',
          cv: '2000',
          capacity: '2',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
          price: 2389900,
        },
        {
          concessionaire_id: null,
          user_id: 3,
          model: 'Ferrari',
          brand: 'SF90',
          cv: '769',
          capacity: '2',
          image: null,
          description: 'Carro de alta potencia, capas de ir de 0 à 100 em menos de 0,2 segundos',
          price: 5200000,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
};
