'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sk_example_user extends Model {
    static associate(models) {
    }
  }
  sk_example_user.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'sk_example_user',
  });
  return sk_example_user;
};
