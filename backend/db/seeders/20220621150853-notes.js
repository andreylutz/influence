module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notes', [{
      title: 'Thoughts',
      description: 'I visited NYC at 9am on Monday',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
