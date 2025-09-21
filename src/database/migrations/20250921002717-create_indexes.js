'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE INDEX idx_companies_companyTypeId ON ams.companies(companyTypeId);
        CREATE INDEX idx_branches_companyId ON ams.branches(companyId);
        CREATE INDEX idx_users_branchId ON ams.users(branchId);
        CREATE INDEX idx_roles_branchId ON ams.roles(branchId);
      `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        DROP INDEX IF EXISTS idx_companies_companyTypeId;
        DROP INDEX IF EXISTS idx_branches_companyId;
        DROP INDEX IF EXISTS idx_users_branchId;
        DROP INDEX IF EXISTS idx_roles_branchId;
      `);
  }
};
