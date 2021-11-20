var faker = require('faker');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   var dummyJSON = [];
   for(var i = 0 ; i < 50 ; i++){
      dummyJSON.push({
    Cilindros: faker.datatype.number({ min: 4, max: 8 }),
    color: faker.vehicle.color(),
    cantidaddepuertas: faker.datatype.number({ min: 2, max:4 }),
    cantidaddepersonas: faker.datatype.number({ min: 1, max: 8 }),
    createdAt : new Date(),
    updatedAt : new Date()
    });
   }
   await queryInterface.bulkInsert('Autos',dummyJSON,{});
  },
 
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Autos', null, {});
  }
};
