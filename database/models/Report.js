const Sequelize = require('sequelize')
const sequelize = require('../db/connnection')

module.exports = sequelize.define('Report', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  porterId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT(),
    allowNull: false,
  },
  read: {
    type: Sequelize.BOOLEAN(),
    default: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
})
