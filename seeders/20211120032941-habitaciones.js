var faker = require('faker');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   var dummyJSON = [];
   for(var i = 0 ; i < 50 ; i++){
      dummyJSON.push({
    numerodecamas: faker.datatype.number({ min: 1,max: 4}),
    numerodepersonas: faker.datatype.number({min: 1,max: 4}),
    aireacondicionado: faker.random.arrayElements(["si","no"]),
    createdAt : new Date(),
    updatedAt : new Date()
    });
   }
   await queryInterface.bulkInsert('Habitaciones',dummyJSON,{});
  },
 
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Habitaciones', null, {});
  }
};
