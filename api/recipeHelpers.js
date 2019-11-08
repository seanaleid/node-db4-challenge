const db = require('../dbConfig.js');

module.exports = {
    getRecipes,
    getRecipeById
}

function getRecipes() {
    return db('recipes')
};

function getRecipeById(id) {
    return db('recipes')
        .where({id})
        .first();
}