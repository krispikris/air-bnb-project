'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Kris',
        lastName: 'Han',
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password')
      },

      {
        firstName: 'Jarrod',
        lastName: 'Mishima',
        username: 'FakeUser1',
        email: 'user1@user.io',
        hashedPassword: bcrypt.hashSync('password2')
      },

      {
        firstName: 'Andrew',
        lastName: 'Kim',
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
      const Op = Sequelize.Op;
      await queryInterface.bulkDelete('Users', {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
      }, {});

  }
};
