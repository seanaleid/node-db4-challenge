
exports.seed = function(knex) {
  return knex('quantity').insert([
    {ingredient_quantity: 1, unit: 'cup'}, // 1
    {ingredient_quantity: 2, unit: 'tablespoons'}, // 2
    {ingredient_quantity: 1, unit: 'kilogram'}, // 3
    {ingredient_quantity: 1, unit: 'pound'} // 4
  ]);
};
