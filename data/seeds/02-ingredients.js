
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'milk', quantity_id: 1}, // 1
    {ingredient_name: 'chocolate powder', quantity_id: 2}, // 2
    {ingredient_name: 'rice', quantity_id: 3}, // 3
    {ingredient_name: 'corn flour', quantity_id: 4} // 4
  ]);
};
