const Sequelize = require('sequelize')
const { dbValues } = require('../../utils/config')

const sequelize = new Sequelize(
  dbValues.database,
  dbValues.username,
  dbValues.password,
  {
    host: dbValues.host,
    dialect: 'mysql',
  }
)
const dbCheck = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
dbCheck()

module.exports = sequelize
