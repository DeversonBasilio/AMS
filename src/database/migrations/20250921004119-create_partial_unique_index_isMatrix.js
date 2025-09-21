'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE UNIQUE INDEX idx_branches_one_matrix_per_company
          ON ams.branches (companyId)
          WHERE isMatrix = true AND deletedAt IS NULL;
      `);},

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        DROP INDEX IF EXISTS ams.idx_branches_one_matrix_per_company;
      `);
  }
};
