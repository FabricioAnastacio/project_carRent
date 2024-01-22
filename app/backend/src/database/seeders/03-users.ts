import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          user_name: 'Adimin',
          email: 'adimin@gmail.com',
          password: 'adimin',
          cpf: '999.999.999-99',
          balance: '9.999',
          vehicles: null,
        },
        {
          user_name: 'Marlon Alexandre',
          email: 'marlinhoogrande@gmail.com',
          password: 'senhaMuuuitoForte',
          cpf: '111.124.561-10',
          balance: '11.200',
          vehicles: null,
        },
        {
          user_name: 'Fabricio A. Rodrigues',
          email: 'fabricio01teste@gmail.com',
          password: 'senhaMuuuitoFraca',
          cpf: '130.325.769-21',
          balance: '20.200',
          vehicles: null,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
