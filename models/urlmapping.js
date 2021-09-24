'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UrlMapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UrlMapping.init({
    url: DataTypes.STRING,
    tiny_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UrlMapping',
  });
  return UrlMapping;
};