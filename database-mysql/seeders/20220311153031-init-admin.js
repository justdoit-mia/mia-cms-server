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
     const init_admin=[
       {
        name:'admin',
        password:'123456',
        created_at: new Date() ,
        updated_at: new Date() ,

       }
     ]
      await queryInterface.bulkInsert('admin',  init_admin, {});


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
