// Import mongoose
const mongoose = require('mongoose');

const RecipesSchema = new mongoose.Schema({
	// Your objects here//
	name: {
		type: String,
		require: true
	},
	description: {
		type: String,
	},
	ingredients: {
		type: Array,
		require: true
	},
	tags: {
		type: Array,
	}
	// api for imgs
	// add authors after users

}, { timestamps: true })


module.exports = mongoose.model("Recipes", RecipesSchema)