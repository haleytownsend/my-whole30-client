const Recipe = require ('../models/Recipe')

const router = require('express').Router()


//GET all recipes
// //router.get('/', (req, res) => {
//   Recipe.find().exec()
//     .then(docs => res.status(200).json(docs).end())
//     .catch(err => res.status(500).json(err).end())
// })

//POST new recipes
router.post('/', (req, res) => {
  Promise.resolve()
    .then(() => ['title', 'ingredients', 'body'].forEach(field => {
      if (!(field in req.body)) {
        throw new Error ('\'${field}\' is not in request body')
      }
    }))
    .then(() => Recipe.create({
      title: req.body.title,
      ingredients: req.body.ingredients,
      body: req.body.body
    }))
    .then(recipe => res.status(201).json(recipe).end())
    .catch(message => res.status(400).json({ error: true, message }).end())
  )}

//GET by ID tp post onto the Favorites board
router.get('/', (req, res) => {
  Recipe.findById(req.params['id']).exec()
    .then(recipe => {
      res.status(200).json(recipe).end()
    })
    .catch(message => {
      res.status(404).json({ error: true, message }).end()
    })
})

//PUT


//DELETE
router.delete('/:id', (req, res) => {
  Recipe.findByIdAndRemove(req.params.id).exec()
    .then(recipe => res.status(204).end())
    .catch(mesage => res.status(404).json({ error: true, message }).end())
})


module.exports = router
