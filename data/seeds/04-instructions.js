
exports.seed = function(knex) {
  return knex('instructions').insert([
    {step: 'Step 1: Gather milk and chocolate powder.', recipe_id: 1}, // 1
    {step: 'Step 2: Measure 2 tablespoons of chocolate powder.', recipe_id: 1}, // 2
    {step: 'Step 3: Mix chocolate powder in milk.', recipe_id: 1}, // 3
    {step: 'Step 4: Enjoy', recipe_id: 1}, // 4
    {step: 'Step 1: Gather corn flour and water.', recipe_id: 3}, // 5
    {step: 'Step 2: Mix warm water into corn flour mixing with hands.', recipe_id: 3}, // 6
    {step: 'Step 3: COmbine until a dough forms.', recipe_id: 3}, // 7
    {step: 'Step 4: Rest for 15 mins.', recipe_id: 3}, // 8
    {step: 'Step 5: Portion into small balls.', recipe_id: 3}, // 9
    {step: 'Step: 6: Flaten with hand or tortilla press.', recipe_id: 3}, // 10
    {step: 'Step 7: Place on a warm griddle and cook for 1 min per side or until dough is no longer raw.', recipe_id: 3}, // 11
    {step: 'Step 8: Enjoy!', recipe_id: 3}, // 12
    {step: 'Step 1: Make food.', recipe_id: 2}, // 13
  ]);
};
