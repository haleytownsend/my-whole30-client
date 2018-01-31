/*
# Recipes

- id: ObjectId
- title: String
- body: String
- ingredients: Array[String]

# Users

- email
- password

# FavoriteRecipes

- id: ObjectId
- user: ObjectId
- recipe: ObjectId
- notes: String
*/

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }, // TODO: check if there's a formal way to describe this field as a foreign key of `recipes`
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recipes'
  }, // TODO: check if there's a formal way to describe this field as a foreign key of `recipes`
  notes: String
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
