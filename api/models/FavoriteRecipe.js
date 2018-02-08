const mongoose = require('mongoose')

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipes'
  },
})

const FavoriteRecipe = mongoose.model('FavoriteRecipe', schema, 'favorite_recipes')

module.exports = FavoriteRecipe
