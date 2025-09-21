'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.sequelize.query(`
      CREATE TABLE IF NOT EXISTS ams.branches (
        branchId 	    UUID 		      DEFAULT gen_random_uuid() PRIMARY KEY,
        companyId 	  UUID          NOT NULL,
        branchName	  varchar(80)   NOT NULL,
        branchCode	  varchar(15)	  NOT NULL,
        filialOrder 	integer       NOT NULL,
        isMatrix	    boolean       NOT NULL,
        contactId	    UUID          NOT NULL,
        addressId     UUID          NOT NULL,
        createdAt     timestamp 	  default NOW(),
        updatedAt	    timestamp 	  default NOW(),
        deletedAt	    timestamp 	  null,
        FOREIGN KEY (companyId) REFERENCES ams.companies(companyId),
        FOREIGN KEY (contactId) REFERENCES ams.contacts(contactId),
        FOREIGN KEY (addressId) REFERENCES ams.addresses(addressId),
        UNIQUE (companyId, branchCode),
        UNIQUE (companyId, filialOrder),
        CHECK (isMatrix IN (true, false))
      );`);
  },

  async down (queryInterface) {
    await queryInterface.sequelize.query(`DROP TABLE IF EXISTS ams.branches;`);
  }
};
