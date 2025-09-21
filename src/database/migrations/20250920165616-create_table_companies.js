'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.companies (
          companyId 		  UUID            DEFAULT gen_random_uuid() PRIMARY KEY,
          companyName 	  varchar(200)    NOT NULL,
          companyTypeId	  uuid            NOT NULL,
          createdAt   	  timestamp       default NOW(),
          updatedAt		    timestamp       default NOW(),
          deletedAt		    timestamp       null,
          FOREIGN KEY (companyTypeId) REFERENCES ams.companyTypes(companyTypeId)
        );
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.companies;`);
  }
};
