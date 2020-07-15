const db = require('./models')

const dbCheck = async () => {
  try {
    // await db.sequelize.sync({ force: true })
    await db.sequelize.authenticate()
    console.log('Connected to mysql')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = dbCheck()
