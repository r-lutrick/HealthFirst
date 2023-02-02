const { User } = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { decrypt } = require('../config/jwt.config');

// REGISTER USER
module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .cookie("checktoken", userToken, {
                    secure: true,
                    samesite: "none"
                })
                .json({ msg: "success", user: user });
        })
        .catch(err => {
            console.log("in err", err)
            res.status(404).json(err)
        });
}

// LOGIN USER
module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    // email not found
    if (user === null) { return res.sendStatus(400) }

    // compare password to hashed dbPassword (Truthy/Falsey)
    const correctPassword = await bcrypt.compare(req.body.password, user.password);

    // Incorrect Password (Falsey)
    if (!correctPassword) { return res.sendStatus(400) }

    // User has been authenticated and needs to be "signed" with secretkey
    const userToken = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    // response is chain capable
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .cookie("checktoken", userToken, {
            secure: true,
            samesite: "none"
        })
        .json({ msg: "success!" });
}

// LOGOUT USER
module.exports.logout = (req, res) => {
    res.clearCookie('usertoken', {httpOnly: true})
    res.sendStatus(200)
}

module.exports.getUser = (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true })
    User.findOne({ _id: decodedJwt.payload.id })
        .then(oneUser => res.json(oneUser))
        .catch(err => res.status(500).json(err))
}



// TESTING TOOLS
module.exports.cookie = (req, res) => {
    res
        .cookie("testkey", "testvalue", { httpOnly: true })
        .json("success")
}

module.exports.index = (req, res) => {
    User.find()
        .then(users => res.cookie("test", "test", { httpOnly: true }).json(users))
        .catch(err => res.json(err))
}