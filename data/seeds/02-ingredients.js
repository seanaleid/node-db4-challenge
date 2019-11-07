
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'milk', quantity_id: 1}, // 1
    {name: 'chocolate powder', quantity_id: 2}, // 2
    {name: 'rice', quantity_id: 3}, // 3
    {name: 'corn flour', quantity_id: 4} // 4
  ]);
};
