'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.permissions_roles (
          permissionId	UUID        NOT NULL,
          roleId		  	UUID        NOT NULL,
          createdAt   	timestamp 	default NOW() NOT NULL,
          FOREIGN KEY (roleId)		REFERENCES ams.roles(roleId),
          FOREIGN KEY (permissionId)	REFERENCES ams.permissions(permissionId)
        );`);

    await queryInterface.sequelize.query(`
      ALTER TABLE ams.permissions_roles
      ADD CONSTRAINT permissions_roles_pkey PRIMARY KEY (permissionId, roleId);
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.permissions_roles;`);
  }
};
