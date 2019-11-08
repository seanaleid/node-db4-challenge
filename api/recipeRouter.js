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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    recipes.getRecipeById(id)
    .then(recipes => {
        if (recipes) {
            res.json(recipes);
        } else {
        res.status(404).json({ message: 'Could not find the recipe with the given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the recipe' });
    });
});

module.exports = router;