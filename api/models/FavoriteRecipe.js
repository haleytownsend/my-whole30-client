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

var fr = new FavoriteRecipe({
  recipeId: 'ahsljkdfhas',
  notes: `That's really good`
})

FavoriteRecipe.findOne()
  .populate('user')
  .populate('recipe')
  .then(fr => {
    fr.user // => User
    fr.recipe // => Recipe
  })

module.exports = FavoriteRecipe
