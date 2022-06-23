/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Event, Company_about, User_about, UserContact, Skill, Note,
    }) {
      User.Events = User.belongsToMany(Event, {
        foreignKey: 'user_id',
        through: 'UserEvents',
      });
      User.Company_about = User.hasOne(Company_about, {
        foreignKey: 'user_id',
      });
      User.User_about = User.hasOne(User_about, {
        foreignKey: 'user_id',
      });
      User.UserContact = User.hasOne(UserContact, {
        foreignKey: 'user_id',
      });
      User.Skill = User.belongsToMany(Skill, {
        foreignKey: 'user_id',
        through: 'UserSkills',
      });
      User.Note = User.hasOne(Note, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    role: {
      allowNull: false,
      type: DataTypes.TEXT,
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
    modelName: 'User',
  });
  return User;
};
