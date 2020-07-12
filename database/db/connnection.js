const Sequelize = require('sequelize')

const sequelize = new Sequelize('anport', 'root', 'dodo123=', {
  host: 'localhost',
  dailect: 'mariadb',
  operatorsAliases: false,
})

module.exports = sequelize
