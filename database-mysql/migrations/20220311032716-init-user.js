/*
 * @Date           : 2022-03-11 11:27:16
 * @FilePath       : /jinnian-cms-server/database/migrations/20220311032716-init-users.js
 * @Description    :
 */
"use strict";

module.exports = {
  // 在执行数据库升级时调用的函数，创建 表
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    const { STRING, INTEGER, DATE } = Sequelize;

    await queryInterface.createTable("user", {
      id: {
        allowNull: false,
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      login: STRING,
      name: STRING(30),
      password: STRING(32),
      age: {
        allowNull: false,
        type:  INTEGER
      },
      last_sign_in_at: {
       
          allowNull: true,
          type:  DATE
        
      },
      created_at: {
        allowNull: false,
        type:  DATE
      } ,
      updated_at: {
        allowNull: false,
        type:  DATE
      },
    });
  },

  // 在执行数据库降级时调用的函数，删除  表
  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("user");
  },
};
