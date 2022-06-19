const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Event.Users = Event.belongsToMany(User, {
        foreignKey: 'event_id',
        through: 'UserEvent',
      });
    }
  }
  Event.init(
    {
      name: DataTypes.TEXT,
      description: DataTypes.TEXT,
      location: DataTypes.TEXT,
      picture: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};
