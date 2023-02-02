// Import mongoose
const mongoose = require('mongoose');
const { User } = require('./user.model')
const Schema = mongoose.Schema

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
	servings: {
		type: Number,
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
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
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