module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Keys', [{
      uniquekey: '1215204',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Keys', null, {});
  },
};
