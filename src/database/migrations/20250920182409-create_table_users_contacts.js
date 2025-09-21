'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ams.users_contacts (
        userId 		  UUID 		    NOT NULL,
        contactId	  UUID 		    NOT NULL,
        createdAt   timestamp 	default NOW(),
        FOREIGN KEY (userId) 	REFERENCES ams.users(userId),
        FOREIGN KEY (contactId) REFERENCES ams.contacts(contactId)
      );
    `);

    await queryInterface.sequelize.query(`
      ALTER TABLE ams.users_contacts
      ADD CONSTRAINT users_contacts_pkey PRIMARY KEY (userId, contactId);
    `);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.users_contacts;`);
  }
};
