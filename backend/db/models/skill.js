const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Skill.Users = Skill.belongsToMany(User, {
        foreignKey: 'skill_id',
        through: 'UserSkill',
      });
    }
  }
  Skill.init({
    name: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};
