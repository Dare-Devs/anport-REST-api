const dsaRouter = require('express').Router()
const { Dsa } = require('../models')

dsaRouter.get('/', async (req, res, next) => {
  try {
    const dsas = await Dsa.findAll()
    res.json(dsas)
  } catch (error) {
    next(error)
  }
})

dsaRouter.get('/:id', async (req, res, next) => {
  try {
    const dsa = await Dsa.findByPk(req.params.id)
    console.log(dsa)
    if (dsa) {
      return res.json(dsa.dataValues)
    }
    res.status(400).json({ error: 'Invalid id' })
  } catch (error) {
    next(error)
  }
})

dsaRouter.post('/', async (req, res, next) => {
  try {
    const dsa = Dsa.build(req.body)
    const newPorter = await dsa.save()
    res.json(newPorter)
  } catch (error) {
    next(error)
  }
})

dsaRouter.put('/:id', async (req, res, next) => {
  try {
    const { schoolId, firstName, lastName, gender, passwordHash } = req.body

    const done = await Dsa.update(
      { schoolId, firstName, lastName, gender, passwordHash },
      {
        where: { id: req.params.id },
      }
    )

    if (done[0]) {
      const dsa = await Dsa.findByPk(req.params.id)
      return res.json(dsa.dataValues)
    }
    res.status(400).json({ error: 'cannot complete update' })
  } catch (error) {
    next(error)
  }
})

dsaRouter.delete('/:id', async (req, res, next) => {
  try {
    const done = await Dsa.destroy({ where: { id: req.params.id } })
    if (done) {
      return res.status(204).end()
    }
    res.status(400).json({ error: 'dsa with this id does not exist' })
  } catch (error) {
    next(error)
  }
})

module.exports = dsaRouter
