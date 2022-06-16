const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company_about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company_about.init({
    logo: DataTypes.TEXT,
    companyName: DataTypes.TEXT,
    location: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Company_about',
  });
  return Company_about;
};
