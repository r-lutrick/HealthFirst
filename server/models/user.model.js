const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    recipes: {
        type: Schema.Types.ObjectId,
        ref: "Recipes"
    }
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(val => this._confirmPassword = val)


UserSchema.pre('validate', function (next) {
    console.log(this.password)
    console.log(this.get('confirmPassword'))
    if (this.password !== this.get('confirmPassword')) {
        this.invalidate('confirmPassword', 'Password must match confirm password')
    }
    next()
})

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})

module.exports.User = mongoose.model('User', UserSchema);