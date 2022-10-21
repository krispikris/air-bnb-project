'use strict';

const { SpotImage } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      // 1
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48089233/original/32e6234f-2f32-4b7c-8137-ee81e9f6c7d1.jpeg',
        preview: true
      },

      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg',
        preview: true
      },

      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/becad6f1-e9bc-4b54-afe8-910ad18d169a.jpg',
        preview: true
      },

      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/8dae018e-ee08-4956-ab90-4a451e96e424.jpeg',
        preview: true
      },

      // 5
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/379f84f9-d418-41ad-b1b3-e1f9d007124d.jpg',
        preview: true
      },

      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bca57cdc-bc62-4366-91e9-03ba6c4059ee.jpeg',
        preview: true
      },

      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-18994970/original/9a160552-6fa1-4d07-9a49-b93a4792dd74.jpeg',
        preview: true
      },

      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/712a31dd-fad0-4882-ba33-783e5e8620e4.jpg',
        preview: true
      },

      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg',
        preview: true
      },

      // 10
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/fe5ff38b-d386-46b2-b9f8-f36d18fcdaad.jpg',
        preview: true
      }

      // MORE MODERN HOMES
      // {
      //   spotId: 1,
      //   url: 'https://res.cloudinary.com/duvgdb8rd/image/upload/v1666125413/1_rjrweh.webp',
      //   preview: true
      // },

      // {
      //   spotId: 2,
      //   url: 'https://res.cloudinary.com/duvgdb8rd/image/upload/v1666125471/2-1_vmrshk.webp',
      //   preview: true
      // },

      // {
      //   spotId: 3,
      //   url: 'https://res.cloudinary.com/duvgdb8rd/image/upload/v1666125488/3-1_fdm6c0.jpg',
      //   preview: true
      // }

      // {
      //   spotId: 4,
      //   url: 'https://a0.muscache.com/im/pictures/99aed923-2f02-4b41-8ec5-47ed58ecdf91.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 5,
      //   url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-42357902/original/ba090443-126d-4687-87fd-5859c584545b.jpeg',
      //   preview: true
      // },

      // {
      //   spotId: 6,
      //   url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-41272444/original/72841f23-4a0c-4e44-a7ce-df2986bef593.jpeg',
      //   preview: true
      // },

      // {
      //   spotId: 7,
      //   url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35130292/original/31ae2949-4771-4ed0-a944-20370d6ccf3f.jpeg',
      //   preview: true
      // },

      // {
      //   spotId: 8,
      //   url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51753381/original/2a63e32a-a8a8-43cb-b322-9b9d549644d1.jpeg',
      //   preview: true
      // },

      // {
      //   spotId: 9,
      //   url: 'https://a0.muscache.com/im/pictures/03f23a46-efe0-4537-92e3-96b8df13e98f.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 10,
      //   url: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg',
      //   preview: true
      // },

      // {
      //   spotId: 11,
      //   url: 'https://a0.muscache.com/im/pictures/9cef5c15-9f3b-4159-99c8-bc8939013907.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 12,
      //   url: 'https://a0.muscache.com/im/pictures/f0cc4bbb-23c7-4877-9a12-f8679e44b6c3.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 13,
      //   url: 'https://a0.muscache.com/im/pictures/09e72533-126c-4480-bc60-633a382fbfce.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 14,
      //   url: 'https://a0.muscache.com/im/pictures/e08a1fe2-4965-46cb-85ad-0104bcb36030.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 15,
      //   url: 'https://a0.muscache.com/im/pictures/7e67787a-e2df-44ed-81f3-0840ce1601b1.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 16,
      //   url: 'https://a0.muscache.com/im/pictures/3c3d244e-c52a-4d38-a645-2734dde35c6d.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 17,
      //   url: 'https://a0.muscache.com/im/pictures/ba1999f8-e146-47d5-962d-da1b4422ae69.jpg',
      //   preview: true
      // },

      // {
      //   spotId: 18,
      //   url: 'https://a0.muscache.com/im/pictures/e20aa49d-f246-4066-8029-94128fb00753.jpg',
      //   preview: true
      // },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};
