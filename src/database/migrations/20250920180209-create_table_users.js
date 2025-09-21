'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
        CREATE TABLE IF NOT EXISTS ams.users (
          userId		  UUID			    default gen_random_uuid() PRIMARY KEY,
          branchId	  UUID          NOT NULL,
          addressId	  UUID          NOT NULL,
          firstName	  varchar(80)   NOT NULL,
          lastName	  varchar(200)  NOT NULL,
          title		    varchar(80)       NULL,
          isActive	  boolean       NOT NULL,
          createdAt   timestamp 	  default NOW(),
          updatedAt	  timestamp 		default NOW(),
          deletedAt	  timestamp 		null,
          FOREIGN KEY (addressId) REFERENCES ams.addresses(addressId),
          FOREIGN KEY (branchId)  REFERENCES ams.branches(branchId),
          CHECK (isActive IN (true, false))
        );`);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.users;`);
  }
};
