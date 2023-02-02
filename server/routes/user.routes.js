const UserController = require("../controllers/user.controller")
const {authenticate} = require('../config/jwt.config')

module.exports = app =>{
    // Reg/Login & Logout
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
    // GETUSER
    app.get(`/api/getUser`, UserController.getUser)
    app.get(`/api/allUsers`, UserController.index)
    app.get(`/api/cookie`, UserController.cookie)
}
// module.exports = function(app) {
//     app.post("/api/register", Users.register);
//     app.post("/api/login", Users.login);
//     app.post("/api/logout", Users.logout);
//     app.get("/api/users/", decrypt);
//     app.get("/api/users/:id", authenticate, Users.getOne);
// }