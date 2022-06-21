module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_abouts', [{
      avatar: 'https://www.idlememe.com/wp-content/uploads/2021/10/beluga-cat-meme-idlememe-5-300x169.jpg',
      name: 'John',
      surname: 'Smith',
      age: '31',
      location: 'Liverpool',
      user_id: '1',
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
