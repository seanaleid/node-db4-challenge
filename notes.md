## Sprint notes ~ Building the project with Reed

## Resources

- Recipe_book(s)
- Recipes
- Ingredients
- Instructions

## Business Rules

- Recipes can bi in different books

- Book have multiple recipes
- Ingredients can be used in multiple recipes
- Instructions are only used by one recipe
- Recipes use multiple ingredients

## Relationships

- BOOK -- ONE to MANY -- RECIPES
- INGREDIENTS -- MANY to MANY -- RECIPES
    // many ingredients can be used in many recipes
    // a recipe uses many ingredients 
- INSTRUCTIONS -- ONE to MANY -- 

# Step 1: Plan out schema 
    - Identify relationships and what information should be on which table
# Step 2: 