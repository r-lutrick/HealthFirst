// Import controller
const RecipeController = require('../controllers/recipes.controller')


module.exports = (app) => {
    // Create
    app.post("/api/recipe/create", RecipeController.addRecipe)

    // Read
    app.get("/api/recipe/get", RecipeController.allRecipes)

    // Read One
    app.get("/api/recipe/get/:id", RecipeController.oneRecipe)

    // Update
    app.put("/api/recipe/update/:id", RecipeController.updateRecipe)

    //Delete
    app.delete("/api/recipe/delete/:id", RecipeController.deleteRecipe)
}

