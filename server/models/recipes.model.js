// Import mongoose
const mongoose = require('mongoose');

const RecipesSchema = new mongoose.Schema({
	// Your objects here
	name: {
		type: String,
		require: true
	},
	ingredients: {
		type: Array,
		require: true
	},
	instructions: {
		type: String,
		require: true
	},
	description: {
		type: String
	},
	tags: {
		type: Array
	},
	// api for imgs
	// add authors after users
	// Schema.Types.Objectid
}, { timestamps: true })

// const ingredientsSchema = new mongoose.Schema({
// 	name: {
// 		type: String,
// 		require: true
// 	}
// })

module.exports = mongoose.model("Recipes", RecipesSchema)