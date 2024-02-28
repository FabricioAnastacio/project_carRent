import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          user_name: 'Adimin',
          email: 'adimin@gmail.com',
          password: '$2a$10$N2xhK3QyOzyOdkY9Ux4nyuYy6HMNNbjI98P.9UT7PoR/Fir5JN8hW',
          cpf: '999.999.999-99',
          balance: '9999',
          role: 'admin',
          // senha: admin123
        },
        {
          user_name: 'Marlon Alexandre',
          email: 'marlinhoogrande@gmail.com',
          password: '$2a$10$lI/Is3Q9LJwQN06GPMdYSuEwD0t9drcvRjdB4IZ8Lk.iPxz3gmFai',
          cpf: '111.124.561-10',
          balance: '11200',
          role: 'user',
          // senhaMuuuitoForte
        },
        {
          user_name: 'Fabricio A. Rodrigues',
          email: 'fabricio01teste@gmail.com',
          password: '$2a$10$ZvnXHIlH4yR3W7LIg10.n.prNpGDFzsx8Ok6tCVlssmDWlV6kf/ye',
          cpf: '130.325.769-21',
          balance: '20200',
          role: 'admin',
          // senhaMuuuitoFraca
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
