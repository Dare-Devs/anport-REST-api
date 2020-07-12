const Sequelize = require('sequelize')
const sequelize = require('../db/connnection')

module.exports = sequelize.define('Dsa', {
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
  gender: {
    type: Sequelize.ENUM(`MALE`, `FEMALE`),
    allowNull: false,
  },
  passwordHash: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})
