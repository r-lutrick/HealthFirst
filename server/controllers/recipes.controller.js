// Import model
const Recipe = require('../models/recipes.model')
const { User } = require('../models/user.model')
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')


// Create
// module.exports.addRecipe = (req, res) => {
//     Recipe.create(req.body)
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
//         // .catch(err => res.status(400).json(err))
// }

// function to create recipes while connecting recipe to users
// WORK IN PROGRESS FOR USER AND RECIPE CREATION
module.exports.addRecipe = async (req, res) => {
    //compares logged in user to user database
    // console.log(req)
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    let foundUser = await User.findOne({ _id: decodedJWT.payload.id });
    //takes form data from recipe create and puts it into recipeData variable
    let { ...recipeData } = req.body;
    //ties recipeData to user - user is the name you gave it in the controller using ref
    recipeData.user = foundUser;
    Recipe.create(recipeData)
        .then(newRecipe => {
            User.findOneAndUpdate(
                { _id: decodedJWT.payload.id },
                { $push: { recipes: newRecipe } }
            )
                .then(updatedUser => {
                    res.json({ results: newRecipe })
                })
        })
        .catch(err => {
            res.json(err)
        })
}


// Read
module.exports.allRecipes = (req, res) => {
    Recipe.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Read one
module.exports.oneRecipe = (req, res) => {
    Recipe.findOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}

// Update
module.exports.updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(data => res.json(data))
        .catch(err => res.json(err))
    // .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}