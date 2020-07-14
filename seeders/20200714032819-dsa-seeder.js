'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('dsas', [
      {
        schoolId: 'AUL/SCI/17/00999',
        firstName: 'Baba',
        lastName: 'Apufre',
        gender: 'MALE',
        passwordHash:
          '$2y$10$cX.CaTdABuFpHBafQqRVROm./33hDvP3zT4SrORWFAF.8pef73rw2',
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('dsas', null, {})
  },
}