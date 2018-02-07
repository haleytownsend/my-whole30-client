const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [ String],
  body: { type: String, required: true }
})

const Recipe = mongoose.model('Recipe', schema, 'recipes')

module.exports = Recipe
