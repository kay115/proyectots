var faker = require('faker');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   var dummyJSON = [];
   for(var i = 0 ; i < 50 ; i++){
      dummyJSON.push({
    Correo: faker.internet.email(),
    Nombres: faker.name.firstName(),
    ApellidoPaterno: faker.name.lastName(),
    ApellidoMaterno: faker.name.lastName(),
    Avatar: faker.internet.ip(),
    Activo: faker.address.streetAddress(),
    createdAt : new Date(),
    updatedAt : new Date()
    });
   }
   await queryInterface.bulkInsert('Usuarios',dummyJSON,{});
  },
 
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};