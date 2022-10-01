'use strict';

const { Review } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 1,
        review: 'amazing experience',
        stars: 5
      },

      {
        spotId: 2,
        userId: 2,
        review: 'good experience',
        stars: 4
      },

      {
        spotId: 3,
        userId: 3,
        review: 'ok experience',
        stars: 3
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {})
  }
};
