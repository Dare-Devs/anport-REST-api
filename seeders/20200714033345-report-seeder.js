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
    await queryInterface.bulkInsert('Reports', [
      {
        porterId: 'AUL/PORTER/15/656565',
        title: 'REQUEST FOR PAINT FOR THE BOYS HOSTEL',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Curabitur nulla elit, rhoncus id libero quis, elementum gravida nisl. Maecenas ornare tincidunt quam, nec volutpat lacus rhoncus elementum. Nam urna orci.',
        read: false,
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
    await queryInterface.bulkDelete('Reports', null, {})
  },
}
