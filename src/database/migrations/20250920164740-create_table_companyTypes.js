'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.companyTypes (
          companyTypeId 		UUID 			    DEFAULT gen_random_uuid() PRIMARY KEY,
          companyTypeName		varchar(50)   NOT NULL  UNIQUE,
          createdAt   		  timestamp     default NOW(),
          updatedAt			    timestamp     default NOW(),
          deletedAt			    timestamp     null
        );`);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.companyTypes;`);
  }
};
