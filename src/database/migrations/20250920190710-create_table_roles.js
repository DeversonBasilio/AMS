'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface ) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.roles (
          roleId				    UUID			    default gen_random_uuid() PRIMARY KEY,
          branchId	        UUID          NOT NULL,
          roleName			    varchar(60)   NOT NULL,
          roleDescription		varchar(150)  null,
          createdAt   		  timestamp 		default NOW(),
          updatedAt			    timestamp 		default NOW(),
          deletedAt			    timestamp 		null,
          FOREIGN KEY (branchId) REFERENCES ams.branches(branchId)
        );`);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.roles;`);
  }
};
