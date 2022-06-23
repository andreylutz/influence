module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Events', [
      {
        name: 'Авто вечеринка',
        description: 'Дотянуться до неба',
        location: 'Москва',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Прогулка по рекам и каналам',
        description: 'Навстречу новым горизонтам',
        location: 'Санкт-Петербург',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Вечер музеев',
        description: 'Самые смелые решения',
        location: 'Москва',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Баня',
        description: 'Супер Бани, заходи!',
        location: 'Санкт-Петербург',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Шашлык пати',
        description: 'Вкусный Шашлык, бери два!',
        location: 'Краснодар',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Сауна',
        description: 'Супер Сауна!',
        location: 'Омск',
        picture:
          'https://img-cdn.tinkoffjournal.ru/i/XtTQa5beTdy_JQE9DDydmpmf5JiEYchqA60E90YUH4Y/w:1400/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl9fX3NfcGl0/X19zaHV0dGVyc3Rv/Y2tfNjg4OTM5NjE4/LjVjYXpmbGtwb3No/by5qcGc',
        date: new Date(),
        user_id: 999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Events', null, {});
  },
};
