'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.contacts (
            contactId   UUID          default gen_random_uuid() PRIMARY KEY,
            email       varchar(254)  NOT NULL UNIQUE,
            phone       varchar(16)   null,
            createdAt   timestamp     default NOW(),
            updatedAt   timestamp     default NOW(),
            deletedAt   timestamp     null
          );
      `);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.contacts;`);
  }
};
