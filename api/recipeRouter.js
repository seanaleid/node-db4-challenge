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


router.get('/:id/ingredients', (req, res) => {
    // const {id} = req.params;

    recipes.getShoppingList(req.params.id)
    .then(id => {
        if (id.length) {
            res.json(id);
        } else {
        res.status(404).json({ message: 'Could not find the shopping list with the given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the shopping list' });
    });
})


router.get('/:id/instructions', (req, res) => {
    // const {id} = req.params;

    recipes.getInstructions(req.params.id)
    .then(id => {
        if (id.length) {
            res.json(id);
        } else {
        res.status(404).json({ message: 'Could not find the shopping list with the given id.' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get the shopping list' });
    });
})

module.exports = router;