'use strict';

const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.bulkInsert('users', [
      {
         nome: 'Wesley Moraes',
         email: 'wesleym@email.com',
         password_hash: await bcryptjs.hash('123456', 8),
         created_at: new Date(),
         updated_at: new Date(),
       },
       {
        nome: 'Wesley Moraes 2',
        email: 'wesleym2@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Wesley Moraes 3',
        email: 'wesleym3@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }


      ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
