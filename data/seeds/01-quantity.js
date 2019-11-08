
exports.seed = function(knex) {
  return knex('quantity').insert([
    {ingredient_quantity: 1, quantity_unit: 'cup'}, // 1
    {ingredient_quantity: 2, quantity_unit: 'tablespoons'}, // 2
    {ingredient_quantity: 1, quantity_unit: 'kilogram'}, // 3
    {ingredient_quantity: 1, quantity_unit: 'pound'} // 4
  ]);
};
