
exports.seed = function(knex) {
  return knex('instructions').insert([
    {step: 'Step 1: Gather milk and chocolate powder. Step 2: Measure 2 tablespoons of chocolate powder. Step 3: Mix chocolate powder in milk. Step 4: Enjoy'}, // 1
    {step: 'Step 1: Gather corn flour and water. Step 2: Mix warm water into corn flour mixing with hands. Step 3: COmbine until a dough forms. Step 4: Rest for 15 mins. Step 5: Portion into small balls. Step: 6: Flaten with hand or tortilla press. Step 7: Place on a warm griddle and cook for 1 min per side or until dough is no longer raw.'}, // 2
    {step: 'Step 1: Make food.'}, // 3
  ]);
};
