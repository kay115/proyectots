'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Autos.init({
    Cilindros: DataTypes.STRING,
    year: DataTypes.STRING,
    color: DataTypes.STRING,
    cantidaddepuertas: DataTypes.STRING,
    cantidaddepersonas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autos',
  });
  return Autos;
};