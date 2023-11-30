/*
 * @Date           : 2022-03-12 09:59:03
 * @FilePath       : /jinnian-cms-server/database/seeders/20220312015903-init-admin.js
 * @Description    : 
 */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const admin=[
     {
       name: 'admin',
       password:'123456',
       created_at: new Date(),
       updated_at: new Date(),

     }

   ]
     await queryInterface.bulkInsert('admin',admin, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('admin', null, {});
  }
};
