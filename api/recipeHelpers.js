const db = require('../dbConfig.js');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
};

function getRecipeById(id) {
    return db('recipes')
        .where({id})
        .first();
}

function getShoppingList(recipeId) {
    return db('recipe_ingredients as ri')
        .select(
            'r.name', 
            'i.ingredient_name', 
            // 'quantity.ingredient_quantity', 
            // 'quantity.quantity_unit'
        )
        .join('recipes as r', 'r.id', 'ri.recipe_id')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        // .join('quantity', 'quantity.id', 'ingredients.quantity_id')
        .where({recipeId})
}

/* Works in SQLite Studio
select r.name as Recipe, i.ingredient_name as Ingredient, q.ingredient_quantity as Quantity, q.quantity_unit as Units
from recipe_ingredients as ri
join recipes as r on ri.recipe_id = r.id
join ingredients as i on ri.ingredients_id = i.id
join quantity as q on i.quantity_id = q.id
where r.id = 1;
*/


function getShoppingList(recipe_id) {
return db("recipe_ingredients as ri")
    .select(
    "recipes.name",
    "ingredients.ingredient_name",
    "quantity.ingredient_quantity",
    "quantity.quantity_unit"
    )
    .join("recipes", "recipes.id", "ri.recipe_id")
    .join("quantity", "quantity.id", "ri.quantity_id")
    .join("ingredients", "ingredients.id", "ri.ingredients_id")
    .where({ recipe_id });
}


/* Works in SQLite Studio
select i.step as Instructions
from recipe_ingredients as ri
join instructions as i on ri.instructions_id = i.id
where ri.recipe_id = 1;
*/