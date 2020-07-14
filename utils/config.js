const dbconfig = require('../config/config.json')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

let dbValues

if (process.env.NODE_ENV === 'production') {
  dbValues = dbconfig.production
} else if (process.env.NODE_ENV === 'test') {
  dbValues = dbconfig.test
} else {
  dbValues = dbconfig.development
}

let PORT = process.env.PORT

module.exports = { PORT, dbValues }
