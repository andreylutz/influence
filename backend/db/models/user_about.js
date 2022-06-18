/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      User_about.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  User_about.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    avatar: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    surname: {
      type: DataTypes.TEXT,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.TEXT,
    },
    skill: {
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User_about',
  });
  return User_about;
};
