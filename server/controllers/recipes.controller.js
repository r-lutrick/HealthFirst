// Import model
const RecipeModel = require('../models/recipes.model')

// Create
module.exports.addRecipe = (req, res) => {
    RecipeModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

// Read
module.exports.allRecipes = (req, res) => {
    RecipeModel.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Read one
module.exports.oneRecipe = (req, res) => {
    RecipeModel.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Update
module.exports.updateRecipe = (req, res) => {
    RecipeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteRecipe = (req, res) => {
    RecipeModel.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}