
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {from: 'Dad', recipe_id: 1, ingredients_id: 1, instructions_id: 1},
    {recipe_id: 1, ingredients_id: 2},
    {from: 'Bon Appetite Test Kitchen', recipe_id: 2, ingredients_id: 3, instructions_id: 3},
    {from: 'Abuelita', recipe_id: 3, ingredients_id: 4, instructions_id: 2}
  ]);
};
