'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_about.init({
    avatar: DataTypes.TEXT,
    name: DataTypes.TEXT,
    surname: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    location: DataTypes.TEXT,
    skill: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User_about',
  });
  return User_about;
};