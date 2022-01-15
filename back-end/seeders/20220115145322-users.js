module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        fullname: 'Alan Gonçlaves',
        email: 'alang@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        fullname: 'Claudia Riodades',
        email: 'claudia@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

