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

    await queryInterface.bulkInsert('admins', [
      {
        schoolId: 'AUL/SCI/18/00256',
        firstName: 'Tekena',
        lastName: 'Solomon',
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
    await queryInterface.bulkDelete('admins', null, {})
  },
}
