if (process.env.NODE_ENV !== 'production') require('dotenv').config()

let PORT = process.env.PORT

module.exports = { PORT }
