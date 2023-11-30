/*
 * @Date           : 2022-03-11 12:02:10
 * @FilePath       : /jinnian-cms-server/database/seeders/20220311040210-init-users.js
 * @Description    : 
 */
'use strict';
var randomstring = require("randomstring");
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
   let users=[]
 for (let index = 0; index < 50; index++) {
    

  users.push({
    name:randomstring.generate(15),
    password:randomstring.generate(15),
    age: parseInt( Math.random()*100),
    created_at: new Date() ,
    updated_at: new Date() ,
  })
   
 }

   
   
     await queryInterface.bulkInsert('user',users  , {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user', null, {});
  }
};
