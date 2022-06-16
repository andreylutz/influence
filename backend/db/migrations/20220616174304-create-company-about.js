module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Company_abouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      logo: {
        type: Sequelize.TEXT,
      },
      companyName: {
        type: Sequelize.TEXT,
      },
      location: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Company_abouts');
  },
};
