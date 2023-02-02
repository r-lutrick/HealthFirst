// Import model
const RecipeModel = require('../models/recipes.model')
const UserModel = require('../models/user.model')

// Create
// module.exports.addRecipe = (req, res) => {
//     RecipeModel.create(req.body)
//         .then(data => res.json(data))
//         .catch(err => res.json(err))
//         // .catch(err => res.status(400).json(err))
// }

//function to create recipes while connecting recipe to users
module.exports.addRecipe = async (req, res)=>{
    //compares logged in user to user database
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    let foundUser = await User.findOne({_id: decodedJWT.payload.id});
    //takes form data from recipe create and puts it into recipeData variable
    let {...recipeData} = req.body;
    //ties recipeData to user - user is the name you gave it in the controller using ref
    recipeData.user = foundUser;
    Recipe.create(recipeData)
        .then(newRecipe=>{
            User.findOneAndUpdate(
                {_id: decodedJWT.payload.id},
                { $push: { recipes: newRecipe  } }
            )
            .then(updatedUser=>{
                res.json({results: newRecipe})
            })
        })
        .catch(err=>{
            res.json(err)
        })
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
        .catch(err => res.json(err))
        // .catch(err => res.status(400).json(err))
}

// Delete
module.exports.deleteRecipe = (req, res) => {
    RecipeModel.deleteOne({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.json(err))
}