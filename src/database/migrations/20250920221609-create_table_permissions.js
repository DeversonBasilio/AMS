'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ams.permissions (
        permissionId	  UUID		      default gen_random_uuid() PRIMARY KEY,
        permissionCode	varchar(50)   NOT NULL  UNIQUE,
        permissionName  varchar(50)   NOT NULL  UNIQUE,
        createdAt   	  timestamp 	  default NOW(),
        updatedAt	  	  timestamp 		default NOW(),
        deletedAt	  	  timestamp 		null
      );`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.permissions;`);
  }
};
