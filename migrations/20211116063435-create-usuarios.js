'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Correo: {
        type: Sequelize.STRING
      },
      Nombres: {
        type: Sequelize.STRING
      },
      ApellidoPaterno: {
        type: Sequelize.STRING
      },
      ApellidoMaterno: {
        type: Sequelize.STRING
      },
      Avatar: {
        type: Sequelize.STRING
      },
      Activo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};