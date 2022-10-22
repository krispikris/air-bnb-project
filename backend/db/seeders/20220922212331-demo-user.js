'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Kris',
        lastName: 'Han',
        email: 'kris@kristopherhan.com',
        username: 'kris',
        hashedPassword: bcrypt.hashSync('airbnb')
      },

      {
        firstName: 'Andrew',
        lastName: 'Kim',
        email: 'andrewkim@gmail.com',
        username: 'drew',
        hashedPassword: bcrypt.hashSync('airbnb')
      },

      {
        firstName: 'Droo',
        lastName: 'Duong',
        username: 'droo',
        email: 'droo@gmail.com',
        hashedPassword: bcrypt.hashSync('airbnb')
      },

      {
        firstName: 'Gary',
        lastName: 'Spng',
        username: 'gary',
        email: 'garysong@gmail.com',
        hashedPassword: bcrypt.hashSync('airbnb')
      },

      {
        firstName: 'Samuel',
        lastName: 'Suh',
        username: 'ssuh',
        email: 'samsuh@gmail.com',
        hashedPassword: bcrypt.hashSync('airbnb')
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
      const Op = Sequelize.Op;
      await queryInterface.bulkDelete('Users', {
        username: { [Op.in]: ['kris', 'drew', 'droo', 'gary', 'ssuh'] }
      }, {});

  }
};
