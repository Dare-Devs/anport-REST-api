const porterRouter = require('express').Router()
const { Porter } = require('../models')
const bcrypt = require('bcrypt')

porterRouter.get('/', async (req, res, next) => {
  try {
    const porters = await Porter.findAll()
    res.json(porters)
  } catch (error) {
    next(error)
  }
})

porterRouter.get('/:id', async (req, res, next) => {
  try {
    const porter = await Porter.findByPk(req.params.id)
    if (porter) {
      return res.json(porter.dataValues)
    }
    res.status(400).json({ error: 'Invalid id' })
  } catch (error) {
    next(error)
  }
})

porterRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body
    const passwordHash = await bcrypt.hash(body.password, 10)
    const porter = Porter.build({
      firstName: body.firstName,
      lastName: body.lastName,
      schoolId: body.schoolId,
      email: body.email,
      gender: body.gender,
      passwordHash,
    })

    const newPorter = await porter.save()
    res.json(newPorter)
  } catch (error) {
    next(error)
  }
})

porterRouter.put('/:id', async (req, res, next) => {
  try {
    const { schoolId, firstName, lastName, gender, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)

    const done = await Porter.update(
      { schoolId, firstName, lastName, gender, passwordHash },
      {
        where: { id: req.params.id },
      }
    )

    if (done[0]) {
      const porter = await Porter.findByPk(req.params.id)
      return res.json(porter.dataValues)
    }
    res.status(400).json({ error: 'cannot complete update' })
  } catch (error) {
    next(error)
  }
})

porterRouter.delete('/:id', async (req, res, next) => {
  try {
    const done = await Porter.destroy({ where: { id: req.params.id } })
    if (done) {
      return res.status(204).end()
    }
    res.status(400).json({ error: 'porter with this id does not exist' })
  } catch (error) {
    next(error)
  }
})

module.exports = porterRouter
