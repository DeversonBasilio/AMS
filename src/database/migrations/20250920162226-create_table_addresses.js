'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `CREATE TABLE IF NOT EXISTS ams.addresses (
        addressId     UUID          default gen_random_uuid() PRIMARY KEY,
        address       varchar(150)  NOT NULL,
        city          varchar(120)  NOT NULL,
        stateProvince varchar(2)    NOT NULL,
        country       varchar(120)  NOT NULL,
        createdAt     timestamp     default NOW(),
        updatedAt     timestamp     default NOW(),
        deletedAt     timestamp     null
    );`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `DROP TABLE IF EXISTS ams.addresses;`
    );
  }
};
