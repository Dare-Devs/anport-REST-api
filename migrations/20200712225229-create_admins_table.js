'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('admins', {
      id: {
        type: Sequelize.UUID,
        defaultType: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      schoolId: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      passwordHash: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('admins')
  },
}