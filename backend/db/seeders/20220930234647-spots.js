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
        name: 'Greenhouse',
        description: 'This house is green',
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
        name: 'Hummingbird Place',
        description: 'description2',
        price: 23
      },

      {
        ownerId: 1,
        address: '1161 Folsom St',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Tarzan Heaven',
        description: 'description3',
        price: 312
      },

      {
        ownerId: 1,
        address: '1161 Cannon St',
        city: 'Stockton',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Monkey Maze',
        description: 'description3',
        price: 323
      },

      {
        ownerId: 3,
        address: '12341 Sac St',
        city: 'Sacramento',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Shelby',
        description: 'description3',
        price: 312
      },

      {
        ownerId: 2,
        address: '3669 Pizza Way',
        city: 'Little Italy',
        state: 'NY',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Pizza Pizza',
        description: 'description3',
        price: 3677
      },

      {
        ownerId: 3,
        address: '11 Blue St',
        city: 'Orange',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Orange and Blue',
        description: 'description3',
        price: 343
      },

      {
        ownerId: 1,
        address: '500 Humboldt St',
        city: 'Roseville',
        state: 'CA',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Rosemount',
        description: 'description3',
        price: 4355
      },

      {
        ownerId: 3,
        address: '32 Stone Cold Way',
        city: 'Austin',
        state: 'TX',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Nest',
        description: 'description3',
        price: 321
      },

      {
        ownerId: 2,
        address: '699 Heart Way',
        city: 'San Antionio',
        state: 'TX',
        country: 'USA',
        lat: 37.77648571,
        lng: -122.40936024,
        name: 'Dome Home',
        description: 'description3',
        price: 321
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots', {})
  }
};
