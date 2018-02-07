const User = require ('../models/User')

const router = require('express').Router()

//GET all users
router.get('/', (req, res) => {
  User.find().exec()
    .then(docs => res.status(200).json(userId).end())
    .catch(err => res.status(500).json(err).end())
})


//GET by ID


//POST
router.post('/', (req, res) => {
  Promise.resolve()
    .then(() => ['email', 'password'].forEach(field => {
      if(!(field in req.body)) {
        throw new Error ('\'${field}\' is not in request body')
      }
    }))
})


//PUT


//DELETE
