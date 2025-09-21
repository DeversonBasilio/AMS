'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.permissions_users (
          permissionId	UUID        NOT NULL,
          userId    		UUID        NOT NULL,
          createdAt   	timestamp 	NOT NULL default NOW(),
          FOREIGN KEY (userId) 		REFERENCES ams.users(userId),
          FOREIGN KEY (permissionId)	REFERENCES ams.permissions(permissionId)
        );`);
    await queryInterface.sequelize.query(`
      ALTER TABLE ams.permissions_users
      ADD CONSTRAINT permissions_users_pkey PRIMARY KEY (permissionId, userId);`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.permissions_users;`);
  }
};
