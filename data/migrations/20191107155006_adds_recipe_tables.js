
exports.up = function(knex) {
    return knex.schema.createTable('quantity', tbl => {
        // The type of the Primary Key is: integer without negative values, also called unsigned 
        tbl.increments(); 

        tbl.float('ingredient_quantity').notNullable()
        tbl.string('quantity_unit', 255);
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('ingredient_name', 255)
        .notNullable();
        
        // Define our Foreign Keys
        tbl 
            .integer('quantity_id')
            .unsigned()
            .references('id')
            .inTable('quantity')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE') 
    })
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('name', 255)
            .notNullable();
    })
    .createTable('instructions', tbl => {
        tbl.increments();

        tbl.string('step', 255)
            .notNullable();
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl.string('from', 255)

        // Foreign Keys
        tbl
            .integer('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('ingredients_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl
            .integer('instructions_id')
            .unsigned()
            .references('id')
            .inTable('instructions')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        tbl 
            .integer('quantity_id')
            .unsigned()
            .references('id')
            .inTable('quantity')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE') 
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('quantity');
};
