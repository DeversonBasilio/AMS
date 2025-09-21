'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.roles_users (
          roleId		UUID		    NOT NULL,
          userId		UUID		    NOT NULL,
          createdAt  timestamp 	default NOW(),
          FOREIGN KEY (userId) 	REFERENCES ams.users(userId),
          FOREIGN KEY (roleId)	REFERENCES ams.roles(roleId)
        );`);

    await queryInterface.sequelize.query(`
      ALTER TABLE ams.roles_users
      ADD CONSTRAINT roles_users_pkey PRIMARY KEY (roleId, userId);
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.roles_users;`);
  }
};
