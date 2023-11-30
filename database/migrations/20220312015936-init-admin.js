/*
 * @Date           : 2022-03-12 09:59:36
 * @FilePath       : /jinnian-cms-server/database/migrations/20220312015936-init-admin.js
 * @Description    : 
 */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { STRING, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable("admin", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },

      name: STRING(30),
      password: STRING(32),

      last_sign_in_at: DATE,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable("admin");

  },
};
