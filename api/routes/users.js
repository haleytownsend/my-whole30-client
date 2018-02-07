const User = require ('../models/User')

const router = require('express').Router()

//GET all users
router.get('/', (req, res) => {
  User.find().exec()
    .then(docs => res.status(200).json(userId).end())
    .catch(err => res.status(500).json(err).end())
})


//GET by ID
router.get('/:id', (req, res) => {
  User.findById(req.params['id']).exec()
  .then(user => {res.status(200).json(user).end())
  .catch(message => {res.status(404).json({ error: true, message }).end()})
})


//POST
router.post('/', (req, res) => {
  Promise.resolve()
    .then(() => ['email', 'password'].forEach(field => {
      if(!(field in req.body)) {
        throw new Error ('\'${field}\' is not in request body')
      }
    }))
    .then (() => User.create({
      email: req.body.email,
      password: req.body.password
    }))
    .then(user => res.status(201).json(user).end())
    .catch(message => res.status(400).json({ error: true, message }).end())
})


//PUT
router.put('/:id', (req, res) => {
  return Promise.resolve()
    .then() => User.validate(req.body))
    .then() => User.findByIdAndUpdate(req.body.id, req.body))
    .then(user => res.status(200).json(user).end()
    .catch(user => res.status(500).json({ error: true, message }).end())
})


//DELETE
 router.delete('/:id', (req, res) => {
   User.findByIdAndRemove(req.params.id).exec()
    .then(user => res.status(200).end())
    .catch(message => res.status(404).json({ error: true, message }).end())
 })
