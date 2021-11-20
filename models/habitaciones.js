'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Habitaciones.init({
    numerodecamas: DataTypes.INTEGER,
    numerodepersonas: DataTypes.INTEGER,
    aireacondicionado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Habitaciones',
  });
  return Habitaciones;
};