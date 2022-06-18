const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserEvent.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id',
      },
    },
    user_id: {
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
    modelName: 'UserEvent',
  });
  return UserEvent;
};
