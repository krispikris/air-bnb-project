'use strict';

const { SpotImage } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://www.google.com/',
        preview: true
      },

      {
        spotId: 2,
        url: 'https://www.yahoo.com/',
        preview: true
      },

      {
        spotId: 3,
        url: 'https://github.com/',
        preview: true
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};
