'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "hstore";');

    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "citext";');

    await queryInterface.sequelize.query('CREATE SCHEMA IF NOT EXISTS "ams";');

    await queryInterface.sequelize.query('CREATE SCHEMA IF NOT EXISTS "ams_audit";');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP SCHEMA IF EXISTS "ams_audit";');

    await queryInterface.sequelize.query('DROP SCHEMA IF EXISTS "ams";');

    await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "citext";');

    await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "hstore";');

    await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
  }
};
