'use strict';

const { SpotImage } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      // IMAGES OF FIRST SPOT
      {
        spotId: 1,
        url: 'https://www.google.com/1',
        preview: true,
      },

      {
        spotId: 1,
        url: 'https://www.google.com/2',
        preview: true,
      },

      {
        spotId: 1,
        url: 'https://www.google.com/3',
        preview: true,
      },

       // IMAGES OF SECOND SPOT
      {
        spotId: 2,
        url: 'https://www.yahoo.com/1',
        preview: true
      },

      {
        spotId: 2,
        url: 'https://www.yahoo.com/2',
        preview: true
      },

      {
        spotId: 2,
        url: 'https://www.yahoo.com/3',
        preview: true
      },

       // IMAGES OF THIRD SPOT
      {
        spotId: 3,
        url: 'https://github.com/1',
        preview: true
      },

      {
        spotId: 3,
        url: 'https://github.com/2',
        preview: true
      },

      {
        spotId: 3,
        url: 'https://github.com/3',
        preview: true
      },

       // IMAGES OF FOURTH SPOT
      {
        spotId: 4,
        url: 'https://facebook.com/1',
        preview: true
      },

      {
        spotId: 4,
        url: 'https://facebook.com/2',
        preview: true
      },

      {
        spotId: 4,
        url: 'https://facebook.com/3',
        preview: true
      },

       // IMAGES OF FIFTH SPOT
      {
        spotId: 5,
        url: 'https://pinterest.com/1',
        preview: true
      },

      {
        spotId: 5,
        url: 'https://pinterest.com/2',
        preview: true
      },

      {
        spotId: 5,
        url: 'https://pinterest.com/3',
        preview: true
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', {});
  }
};
