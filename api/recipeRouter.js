const express = require('express');

const recipes = require('./recipeHelpers.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipeList => {
        res.json(recipeList);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
      });
})

module.exports = router;