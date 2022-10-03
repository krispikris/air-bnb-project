'use strict';

const { Spot } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '3403 Stormy Ct',
        city: 'Rocklin',
        state: 'CA',
        country: 'USA',
        lat: 38.81001221,
        lng: -121.24899957,
        name: 'Home',
        description: 'description1',
        price: 1
      },

      {
        ownerId: 2,
        address: '550 N Figeroa St',
        city: 'Los Angeles',
        state: 'CA',
        country: 'USA',
        lat: 34.06199155,
        lng: -118.24554911,
        name: 'Orsini',
        description: 'description2',
        price: 2
      },

      {
        ownerId: 3,
        address: '1161 Folsom St',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'OrangeSF',
        description: 'description3',
        price: 3
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', {})
  }
};
