const JWT = require('jsonwebtoken')
const config = require('./config')
const { Admin, Dsa, Porter } = require('../models')

const authenticate = (payload) => {
  return JWT.sign(payload, config.JWT_SECRET)
}

const authAdmin = async (req, res, next) => {
  try {
    const token = JWT.verify(req.token)
    const admin = await Admin.findByPk(token.id)
    console.log(admin)
  } catch (error) {
    next(error)
  }
}

const authDsa = async (req, res, next) => {
  try {
    const token = JWT.verify(req.token)
    const dsa = await Dsa.findByPk(token.id)
    console.log(dsa)
  } catch (error) {
    next(error)
  }
}

const authPorter = (req, res, next) => {}
module.exports = { authenticate, authorize }
