
exports.seed = function(knex) {
      return knex('recipes').insert([
        {name: 'Chocolate Milk'}, // 1
        {name: 'Arroz con pollo'}, // 2
        {name: 'Trotillas'} // 3
      ]);
};
